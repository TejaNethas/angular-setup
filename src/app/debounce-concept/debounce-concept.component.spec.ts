import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceConceptComponent } from './debounce-concept.component';

describe('DebounceConceptComponent', () => {
  let component: DebounceConceptComponent;
  let fixture: ComponentFixture<DebounceConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
