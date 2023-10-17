import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RemoteTemplateConfiguration } from '../../models/remote-template-configuration.model';

@Injectable()
export class RemoteTemplateInitService {
  private remoteTemplateConfiguration: RemoteTemplateConfiguration | undefined = undefined;

  async init(): Promise<void> {
    const configData = await fetch(`${environment.baseUrl}${environment.configPath}`);
    const config = await configData.json();
    this.remoteTemplateConfiguration = new RemoteTemplateConfiguration(config.exampleProperty);
  }

  getRemoteTemplateConfiguration(): RemoteTemplateConfiguration {
    return this.remoteTemplateConfiguration as RemoteTemplateConfiguration;
  }
}
