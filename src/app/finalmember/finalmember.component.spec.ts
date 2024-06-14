import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalmemberComponent } from './finalmember.component';

describe('FinalmemberComponent', () => {
  let component: FinalmemberComponent;
  let fixture: ComponentFixture<FinalmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
