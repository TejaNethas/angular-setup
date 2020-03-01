import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElementExampleComponent } from './custom-element-example.component';

describe('CustomElementExampleComponent', () => {
  let component: CustomElementExampleComponent;
  let fixture: ComponentFixture<CustomElementExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomElementExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomElementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
