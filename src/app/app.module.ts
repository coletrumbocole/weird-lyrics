import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LyricsOutputComponent } from './lyrics-output/lyrics-output.component';
import { FontStylePanelComponent } from './font-style-panel/font-style-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsOutputComponent,
    FontStylePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
