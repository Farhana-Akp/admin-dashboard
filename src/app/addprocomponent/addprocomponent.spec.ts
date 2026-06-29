import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addprocomponent } from './addprocomponent';

describe('Addprocomponent', () => {
  let component: Addprocomponent;
  let fixture: ComponentFixture<Addprocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addprocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Addprocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
