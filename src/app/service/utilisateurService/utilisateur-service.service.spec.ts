import { TestBed } from '@angular/core/testing';
import { UtilisateurService } from './utilisateur-service.service';


describe('UtilisateurServiceService', () => {
  let service: UtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
