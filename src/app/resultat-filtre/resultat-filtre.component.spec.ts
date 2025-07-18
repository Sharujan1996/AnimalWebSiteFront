import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatFiltreComponent } from './resultat-filtre.component';

describe('ResultatFiltreComponent', () => {
  let component: ResultatFiltreComponent;
  let fixture: ComponentFixture<ResultatFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatFiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
