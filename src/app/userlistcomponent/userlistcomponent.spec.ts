import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlistcomponent } from './userlistcomponent';

describe('Userlistcomponent', () => {
  let component: Userlistcomponent;
  let fixture: ComponentFixture<Userlistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlistcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Userlistcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
