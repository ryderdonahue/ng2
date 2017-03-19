import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoolBack } from '../coolBack/coolBack.component';
import { GraphicText } from '../graphicText/graphicText.component';
import { PeerAudio } from '../peer-audio/peer-audio.component';
import { SiteTitle } from '../site-title/site-title.component';
import { Spacer } from '../spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicText,
    PeerAudio,
    SiteTitle,
    Spacer,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
