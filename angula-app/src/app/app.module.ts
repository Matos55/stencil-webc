// import { ComponentLibraryModule } from './../../../angular-workspace/projects/component-library/src/lib/component-library.module';
import { MyComponent } from '../../../angular-workspace/projects/component-library/src/lib/stencil-generated/components';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MyComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
