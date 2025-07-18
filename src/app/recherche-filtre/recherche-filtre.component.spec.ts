import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheFiltreComponent } from './recherche-filtre.component';

describe('RechercheFiltreComponent', () => {
  let component: RechercheFiltreComponent;
  let fixture: ComponentFixture<RechercheFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheFiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
