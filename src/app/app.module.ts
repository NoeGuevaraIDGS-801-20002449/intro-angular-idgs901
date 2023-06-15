import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponents } from './utl/utl.components';
import { ievnComponents } from './ievn/ievn.components';
import { IricComponent } from './grupos/iric/iric.component';
import { MenuComponent } from './grupos/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    utlComponents,
    ievnComponents,
    IricComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
