import { Component, OnInit } from '@angular/core';
import { LyricsData } from '../../statics/lyrics-data';

@Component({
  selector: 'app-lyrics-output',
  templateUrl: './lyrics-output.component.html',
  styleUrls: ['./lyrics-output.component.css']
})
export class LyricsOutputComponent implements OnInit {
  lyrics = LyricsData.LYRICS;

  constructor() { }

  ngOnInit() {

  }

}
