import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStylePanelComponent } from './font-style-panel.component';

describe('FontStylePanelComponent', () => {
  let component: FontStylePanelComponent;
  let fixture: ComponentFixture<FontStylePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontStylePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStylePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
