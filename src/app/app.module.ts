import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GplinkModule } from 'gplink';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GplinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
