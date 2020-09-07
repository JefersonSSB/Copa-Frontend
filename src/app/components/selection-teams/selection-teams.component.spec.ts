import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTeamsComponent } from './selection-teams.component';

describe('SelectionTeamsComponent', () => {
  let component: SelectionTeamsComponent;
  let fixture: ComponentFixture<SelectionTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
