import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { MathService } from './math.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
