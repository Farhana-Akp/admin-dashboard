import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDashcomponent } from './parent-dashcomponent';

describe('ParentDashcomponent', () => {
  let component: ParentDashcomponent;
  let fixture: ComponentFixture<ParentDashcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDashcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentDashcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
