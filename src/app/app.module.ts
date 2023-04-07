import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {provideEffectsManager} from '@ngneat/effects-ng';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [provideEffectsManager()],
  bootstrap: [AppComponent]
})
export class AppModule {
}