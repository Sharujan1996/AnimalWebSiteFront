import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEntreeComponent } from './recherche-entree.component';

describe('RechercheEntreeComponent', () => {
  let component: RechercheEntreeComponent;
  let fixture: ComponentFixture<RechercheEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
