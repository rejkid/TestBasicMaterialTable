import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { DateInputDirective } from './dateinput.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
