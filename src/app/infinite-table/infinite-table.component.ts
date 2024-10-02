import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchCharacterNameComponent } from '../search-character-name/search-character-name.component';

@Component({
  selector: 'app-infinite-table',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, ReactiveFormsModule, SearchCharacterNameComponent],
  templateUrl: './infinite-table.component.html',
  styleUrl: './infinite-table.component.scss'
})
export class InfiniteTableComponent implements OnInit {
  private _characterService = inject(CharacterService);

  characters: Character[] = [];
  characterFilterForm!: FormGroup;
  filters: any;
  page = 1;
  characterIdFilter = 0;
  nameFilter = '';
  locationFilter = '';
  originFilter = '';
  dateFilter = '';
  statusFilter = '';
  loading = false;
  resetFilters: boolean = false;

  ngOnInit(): void {
    this.loadCharacters();

    this.characterFilterForm = new FormGroup({
      characterId: new FormControl(''),
      name: new FormControl(''),
      location: new FormControl(''),
      origin: new FormControl(''),
      created: new FormControl(''),
      status: new FormControl(''),
    });
  }

  loadCharacters(): void {
    if (this.loading) return;
    this.loading = true;

    this._characterService.getCharacters(this.page, this.characterIdFilter, this.nameFilter, this.locationFilter, this.originFilter, this.dateFilter, this.statusFilter).subscribe(data => {
      this.characters = [...this.characters, ...data.results];
      this.page++;
      this.loading = false;
    });
  }

  onCharacterIdFilter($event: any): void {
    this.characterIdFilter = $event.target.value;
    this._updateFilter();
  }

  onSearchName(name: string): void {
    console.log(name);
    this.nameFilter = name;
    this._updateFilter();
  }

  onNameFilter($event: any): void {
    this.nameFilter = $event.target.value;
    this._updateFilter();
  }

  onLocationFilter($event: any): void {
    this.locationFilter = $event.target.value;
    this._updateFilter();
  }

  onOriginFilter($event: any): void {
    this.originFilter = $event.target.value;
    this._updateFilter();
  }

  onDateFilter($event: any): void {
    this.dateFilter = $event.target.value;
    this._updateFilter();
  }

  onStatusFilter($event: any): void {
    this.statusFilter = $event.target.value;
    this._updateFilter();
  }

  private _updateFilter(): void {
    this.characters = [];
    this.page = 1;
    this.loadCharacters();
  }

  onScroll(): void {
    this.loadCharacters();
  }

  refreshTable(): void {
    this.characterIdFilter = 0;
    this.nameFilter = '';
    this.locationFilter = '';
    this.originFilter = '';
    this.dateFilter = '';
    this.statusFilter = '';

    this._updateFilter();
    this.characterFilterForm.reset();
    this.resetFilters = true;
  }

  getStatusPrepend(status: string): { letter: string, color: string, icon: boolean } {
    let letterOrIcon: string = status.substring(0, 1).toUpperCase();
    let color: string = '#981E2F';
    let icon: boolean = false;
    if (status === 'Alive') color = '#31692D';

    if (status !== 'Alive' && status !== 'Dead') {
      color = '#000';
      letterOrIcon = '';
      icon = true;
    }

    return { letter: letterOrIcon, color: color, icon: icon };
  }
}