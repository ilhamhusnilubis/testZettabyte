import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chalange1AngularComponent } from './chalange1-angular.component';

describe('Chalange1AngularComponent', () => {
  let component: Chalange1AngularComponent;
  let fixture: ComponentFixture<Chalange1AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chalange1AngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chalange1AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
