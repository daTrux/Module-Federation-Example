import { TestBed } from '@angular/core/testing';
import { RemoteTemplateModule } from './remote-template.module';
import anything = jasmine.anything;
import { RemoteTemplateInitService } from './services/remote-template-init/remote-template-init.service';
import { REMOTE_TEMPLATE_CONFIGURATION } from '../injectors';


const mockRemoteTemplateInitService = jasmine.createSpyObj('RemoteTemplateInitService', [
  'init',
  'getRemoteTemplateConfiguration'
]);

describe('RemoteTemplateModule', () => {
  let module: RemoteTemplateModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RemoteTemplateModule],
      providers: [
        {
          provide: RemoteTemplateInitService,
          useValue: mockRemoteTemplateInitService
        }
      ]
    });
  });

  beforeEach(() => {
    mockRemoteTemplateInitService.init.calls.reset();
    mockRemoteTemplateInitService.getRemoteTemplateConfiguration.calls.reset();

    module = TestBed.inject(RemoteTemplateModule);
  });

  it('should be created', () => {
    expect(module).toBeTruthy();
  });

  it('RemoteTemplateInitService init method should be called', () => {
    expect(mockRemoteTemplateInitService.init).toHaveBeenCalledTimes(1);
  });

  it('should call ConnectionPointEquipmentsInitService getRemoteTemplateConfiguration' +
    ' to provide REMOTE_TEMPLATE_CONFIGURATION', () => {
    const expectedConfiguration = {
      exampleProperty: 'mock-example-property'
    };

    mockRemoteTemplateInitService.getRemoteTemplateConfiguration
      .and.returnValue(expectedConfiguration);

    const configuration = TestBed.inject(REMOTE_TEMPLATE_CONFIGURATION);

    expect(configuration).toEqual(expectedConfiguration);
    expect(mockRemoteTemplateInitService.getRemoteTemplateConfiguration).toHaveBeenCalledTimes(1);
  });

  describe('test ngDoBootstrap', () => {
    let getSpy: any;
    let defineSpy: any;

    beforeEach(() => {
      getSpy = spyOn(customElements, 'get');
      defineSpy = spyOn(customElements, 'define');
    });

    it('should call customElements.define, if remote-template is not defined', () => {
      const expectedElementName = 'remote-template';

      getSpy.and.returnValue(false);

      module.ngDoBootstrap();

      expect(getSpy).toHaveBeenCalledOnceWith(expectedElementName);
      expect(defineSpy).toHaveBeenCalledOnceWith(expectedElementName, anything());
    });

    it('should not call customElements.define, if remote-template is already defined', () => {
      const expectedElementName = 'remote-template';

      getSpy.and.returnValue(true);

      module.ngDoBootstrap();

      expect(getSpy).toHaveBeenCalledOnceWith(expectedElementName);
      expect(defineSpy).not.toHaveBeenCalled();
    });
  });
});
