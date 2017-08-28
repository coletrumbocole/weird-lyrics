import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LyricsOutputComponent } from './lyrics-output/lyrics-output.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
