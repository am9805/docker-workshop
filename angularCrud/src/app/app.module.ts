import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudGetComponent } from './crud-get/crud-get.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { AppRoutingModule } from './/app-routing.module';

import { BusinessService } from './business.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudAddComponent,
    CrudGetComponent,
    CrudEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
