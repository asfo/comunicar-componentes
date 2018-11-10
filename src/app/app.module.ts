import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HelperService } from './helper.service';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
