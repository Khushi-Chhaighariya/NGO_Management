import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvolunteerComponent } from './viewvolunteer.component';

describe('ViewvolunteerComponent', () => {
  let component: ViewvolunteerComponent;
  let fixture: ComponentFixture<ViewvolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
