import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottlingConceptComponent } from './throttling-concept.component';

describe('ThrottlingConceptComponent', () => {
  let component: ThrottlingConceptComponent;
  let fixture: ComponentFixture<ThrottlingConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottlingConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottlingConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
