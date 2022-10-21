import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstButtonComponent } from './first-button.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {createCustomElement} from '@angular/elements';



@NgModule({
  declarations: [
    FirstButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [FirstButtonComponent]
})
export class FirstButtonModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(FirstButtonComponent, {injector: this.injector});

    // Specify your custom element unique name
    if (!customElements.get('first-button')) {
      customElements.define('first-button', ce);
    }
  }
 }
