import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondButtonComponent } from './second-button.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SecondButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [SecondButtonComponent]
})
export class SecondButtonModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(SecondButtonComponent, {injector: this.injector});

    // Specify your custom element unique name
    if (!customElements.get('second-button')) {
      customElements.define('second-button', ce);
    }
  }
}
