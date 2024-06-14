import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieversComponent } from './achievers.component';

describe('AchieversComponent', () => {
  let component: AchieversComponent;
  let fixture: ComponentFixture<AchieversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchieversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchieversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
