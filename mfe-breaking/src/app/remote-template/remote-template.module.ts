import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RemoteTemplateComponent } from './remote-template.component';
import { createCustomElement } from '@angular/elements';
import { RemoteTemplateInitService } from './services/remote-template-init/remote-template-init.service';
import { REMOTE_TEMPLATE_CONFIGURATION } from '../injectors';
import { initializeLanguage } from '../app.initializers';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestedComponent } from './nested/nested.component';


@NgModule({
  declarations: [
    RemoteTemplateComponent,
    NestedComponent
  ],
  exports: [
    RemoteTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  // Fill with extra providers (same dependencies provided in the AppModule)
  providers: [
    RemoteTemplateInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeLanguage,
      multi: true,
    },
    /**
     * To load external configuration and make it available at startup.
     */
    {
      provide: APP_INITIALIZER,
      useFactory: (remoteTemplateInitService: RemoteTemplateInitService) =>
        (() => remoteTemplateInitService.init()),
      deps: [RemoteTemplateInitService],
      multi: true
    },
    /**
     * To provide a configuration value for the REMOTE_TEMPLATE_CONFIGURATION token.
     */
    {
      provide: REMOTE_TEMPLATE_CONFIGURATION,
      useFactory: (remoteTemplateInitService: RemoteTemplateInitService) =>
        remoteTemplateInitService.getRemoteTemplateConfiguration(),
      deps: [RemoteTemplateInitService]
    }
  ]
})
export class RemoteTemplateModule {
  private customElementName = 'remote-template';

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {


    // Specify your custom element unique name
    if (!customElements.get(this.customElementName)) {
      const ce = createCustomElement(RemoteTemplateComponent, {injector: this.injector});
      customElements.define(this.customElementName, ce);
    }
  }
}
