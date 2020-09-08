import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerTeamsComponent } from './winner-teams.component';

describe('WinnerTeamsComponent', () => {
  let component: WinnerTeamsComponent;
  let fixture: ComponentFixture<WinnerTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
