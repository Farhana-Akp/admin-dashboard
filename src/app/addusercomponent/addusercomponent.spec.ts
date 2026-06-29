import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addusercomponent } from './addusercomponent';

describe('Addusercomponent', () => {
  let component: Addusercomponent;
  let fixture: ComponentFixture<Addusercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addusercomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Addusercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
