import { TestBed } from '@angular/core/testing';

import { RemoteTemplateInitService } from './remote-template-init.service';
import { RemoteTemplateConfiguration } from '../../models/remote-template-configuration.model';

describe('RemoteTemplateInitService', () => {
  let service: RemoteTemplateInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RemoteTemplateInitService
      ]
    });
    service = TestBed.inject(RemoteTemplateInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test init', () => {
    let fetchSpy: any;

    beforeEach(() => {
      fetchSpy = spyOn(window, 'fetch');
    });

    it('should call fetch and set remoteTemplateConfiguration', async () => {
      const mockConfig: RemoteTemplateConfiguration = {
        exampleProperty: 'mock-example-property'
      };
      const mockConfigData = Promise.resolve(new Response(JSON.stringify(mockConfig), {
        status: 200,
        statusText: 'OK',
      }));
      const expectedInput = 'http://localhost:5000/assets/config.json';
      const expectedConfiguration = new RemoteTemplateConfiguration(mockConfig.exampleProperty);

      fetchSpy.and.returnValue(mockConfigData);

      await service.init();

      expect(fetchSpy).toHaveBeenCalledOnceWith(expectedInput);
      // @ts-ignore
      expect(service.remoteTemplateConfiguration).toEqual(expectedConfiguration);
    });
  });

  describe('test getRemoteTemplateConfiguration', () => {
    it('should return remoteTemplateConfiguration', () => {
      const mockConfig: RemoteTemplateConfiguration = {
        exampleProperty: 'mock-example-property'
      };
      // @ts-ignore
      service.remoteTemplateConfiguration = mockConfig;

      expect(service.getRemoteTemplateConfiguration()).toEqual(mockConfig);
    });
  });
});
