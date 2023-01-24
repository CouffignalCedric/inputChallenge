import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelloperComponent } from './develloper.component';

describe('DevelloperComponent', () => {
  let component: DevelloperComponent;
  let fixture: ComponentFixture<DevelloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
