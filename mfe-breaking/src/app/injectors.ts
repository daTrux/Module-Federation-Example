import { InjectionToken } from '@angular/core';
import { RemoteTemplateConfiguration } from './remote-template/models/remote-template-configuration.model';

export const REMOTE_TEMPLATE_CONFIGURATION = new InjectionToken<RemoteTemplateConfiguration>('REMOTE_TEMPLATE_CONFIGURATION');
