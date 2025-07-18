import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialisationMotDePasseComponent } from './reinitialisation-mot-de-passe.component';

describe('ReinitialisationMotDePasseComponent', () => {
  let component: ReinitialisationMotDePasseComponent;
  let fixture: ComponentFixture<ReinitialisationMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinitialisationMotDePasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinitialisationMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
