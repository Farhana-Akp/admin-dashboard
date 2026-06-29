import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlistcomponent } from './productlistcomponent';

describe('Productlistcomponent', () => {
  let component: Productlistcomponent;
  let fixture: ComponentFixture<Productlistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlistcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Productlistcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
