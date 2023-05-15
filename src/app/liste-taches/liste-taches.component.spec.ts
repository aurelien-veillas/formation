import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTachesComponent } from './liste-taches.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TacheService} from "./tache.service";
import {HttpClientModule} from "@angular/common/http";

describe('ListeTachesComponent', () => {
  let component: ListeTachesComponent;
  let fixture: ComponentFixture<ListeTachesComponent>;
  let service: TacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTachesComponent],
      imports: [HttpClientTestingModule],
      providers:[TacheService]
    }).compileComponents();
    fixture = TestBed.createComponent(ListeTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TacheService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verif lancement getList à l\'initialisation)', () =>{
    const spy = spyOn(service, 'getList');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  })
});
