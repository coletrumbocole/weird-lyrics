import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsOutputComponent } from './lyrics-output.component';

describe('LyricsOutputComponent', () => {
  let component: LyricsOutputComponent;
  let fixture: ComponentFixture<LyricsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
