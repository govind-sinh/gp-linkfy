import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GplinkModule } from '../../projects/gplink/src/lib/gplink.module';


@NgModule({
  declarations: [
    AppComponent,
    // GplinkPipe
  ],
  imports: [
    BrowserModule,
    GplinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
