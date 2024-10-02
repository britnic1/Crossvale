import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Character } from '../models/character.model';

@Component({
  selector: 'app-mat-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatTableModule],
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.scss'
})
export class MatTableComponent implements OnInit {
  characters: Character[] = [];

  displayedColumns: string[] = ['id', 'name', 'location', 'origin', 'created', 'status'];
  dataSource = new MatTableDataSource<Character>(this.characters);

  ngOnInit(): void {
  }

  applyCharacterIdFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.id.toString().includes(searchString);
    }
  }

  applyNameFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.name.toLowerCase().includes(searchString);
    }
  }

  applyLocationFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.location.name.toLowerCase().includes(searchString);
    }
  }

  applyOriginFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.origin.name.toLowerCase().includes(searchString);
    }
  }

  applyDateFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.created.toLowerCase().includes(searchString);
    }
  }

  applyStatusFilter(event: Event) {
    this._updateFilterResults(event);
    this.dataSource.filterPredicate = (data: Character, filter: string) => {
      const searchString = filter.trim().toLowerCase();
      return data.status.toLowerCase().includes(searchString);
    }
  }

  private _updateFilterResults(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}