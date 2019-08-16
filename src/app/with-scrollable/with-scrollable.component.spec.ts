import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithScrollableComponent } from './with-scrollable.component';

describe('WithScrollableComponent', () => {
  let component: WithScrollableComponent;
  let fixture: ComponentFixture<WithScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithScrollableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
