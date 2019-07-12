import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGraphComponent } from './chart-graph.component';

describe('ChartGraphComponent', () => {
  let component: ChartGraphComponent;
  let fixture: ComponentFixture<ChartGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
