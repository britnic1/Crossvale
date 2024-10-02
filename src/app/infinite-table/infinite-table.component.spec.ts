import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { of } from 'rxjs';

import { InfiniteTableComponent } from './infinite-table.component';
import { CharacterService } from '../services/character.service';

describe('InfiniteTableComponent', () => {
  let component: InfiniteTableComponent;
  let fixture: ComponentFixture<InfiniteTableComponent>;
  let characterService: jasmine.SpyObj<CharacterService>;

  const mockCharacterData = {
    results: [
      { id: 1, name: 'Rick Sanchez', status: 'Alive', location: { name: 'Earth' }, origin: { name: 'Earth' }, created: '2017-11-04T18:48:46.250Z' },
      { id: 2, name: 'Morty Smith', status: 'Alive', location: { name: 'Earth' }, origin: { name: 'Earth' }, created: '2017-11-04T18:50:21.651Z' }
    ]
  };

  beforeEach(async () => {
    const characterServiceSpy = jasmine.createSpyObj('CharacterService', ['getCharacters']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, InfiniteScrollModule],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InfiniteTableComponent);
    component = fixture.componentInstance;
    characterService = TestBed.inject(CharacterService) as jasmine.SpyObj<CharacterService>;

    // Mock the getCharacters method
    characterService.getCharacters.and.returnValue(of(mockCharacterData));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load more characters on scroll', () => {
    component.onScroll();

    expect(characterService.getCharacters).toHaveBeenCalledTimes(1);
    expect(component.characters.length).toBe(2); // appends to existing characters
  });

  it('should update character filters and reload data', () => {
    component.onNameFilter({ target: { value: 'Rick' } });

    expect(component.nameFilter).toBe('Rick');
    expect(characterService.getCharacters).toHaveBeenCalled();
    expect(component.page).toBe(2); // resets the page
  });

  // it('should reset filters and refresh the table', () => {
  //   // Pre-set some filters
  //   component.locationFilter = 'Earth';
  //   component.characterIdFilter = 1;

  //   component.refreshTable();

  //   expect(component.locationFilter).toBe('');
  //   expect(component.characterIdFilter).toBe(0);
  //   expect(characterService.getCharacters).toHaveBeenCalledTimes(1); // once on init, once on refresh
  //   expect(component.characterFilterForm.get('location')?.value).toBe('');
  // });

  it('should return correct status prepend object', () => {
    const aliveStatus = component.getStatusPrepend('Alive');
    expect(aliveStatus.letter).toBe('A');
    expect(aliveStatus.color).toBe('#31692D');
    expect(aliveStatus.icon).toBe(false);

    const unknownStatus = component.getStatusPrepend('unknown');
    expect(unknownStatus.letter).toBe('');
    expect(unknownStatus.color).toBe('#000');
    expect(unknownStatus.icon).toBe(true);
  });

  it('should not load characters if loading is true', () => {
    component.loading = true;
    component.loadCharacters();
    expect(characterService.getCharacters).not.toHaveBeenCalled();
  });
});