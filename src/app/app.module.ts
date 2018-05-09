import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    AppComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, 
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
