import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-character-name',
  standalone: true,
  imports: [],
  templateUrl: './search-character-name.component.html',
  styleUrl: './search-character-name.component.scss'
})
export class SearchCharacterNameComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onNameFilter($event: any): void {
    this.search.emit($event.target.value);
  }
}
