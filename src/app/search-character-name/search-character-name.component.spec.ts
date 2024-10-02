import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCharacterNameComponent } from './search-character-name.component';

describe('SearchCharacterNameComponent', () => {
  let component: SearchCharacterNameComponent;
  let fixture: ComponentFixture<SearchCharacterNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCharacterNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCharacterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
