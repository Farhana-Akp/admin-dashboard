import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpagecomponent } from './loginpagecomponent';

describe('Loginpagecomponent', () => {
  let component: Loginpagecomponent;
  let fixture: ComponentFixture<Loginpagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginpagecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Loginpagecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
