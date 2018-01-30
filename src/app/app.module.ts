import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BasicPageComponent} from './mybasicpage/basic-page.component';
import {BrowserModule} from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: 'basic', component: BasicPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
