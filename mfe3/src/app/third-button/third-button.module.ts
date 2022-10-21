import { Injector, NgModule } from '@angular/core';
import { ThirdButtonComponent } from './third-button.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ThirdButtonComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [ThirdButtonComponent],
})
export class ThirdButtonModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const ce = createCustomElement(ThirdButtonComponent, {
      injector: this.injector,
    });

    // Specify your custom element unique name
    if (!customElements.get('third-button')) {
      customElements.define('third-button', ce);
    }
  }
}
