import { Component, OnInit } from '@angular/core';
import { LyricsData } from '../../statics/lyrics-data';
import { FontStylePanelComponent } from '../font-style-panel/font-style-panel.component';

@Component({
  selector: 'app-lyrics-output',
  templateUrl: './lyrics-output.component.html',
  styleUrls: ['./lyrics-output.component.scss']
})
export class LyricsOutputComponent implements OnInit {
  lyrics = LyricsData.LYRICS;

  constructor() { }

  ngOnInit() {

  }

}
