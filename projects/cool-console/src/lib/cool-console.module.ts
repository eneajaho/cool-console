import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoolConsoleConfig, CoolConsoleConfigService } from './CoolConsoleConfig';
import { CoolConsoleService } from './cool-console.service';


@NgModule()
export class CoolConsoleModule {

  static forRoot(config?: CoolConsoleConfig): ModuleWithProviders {
    return {
      ngModule: CoolConsoleModule,
      providers: [
        CoolConsoleService,
        {
          provide: CoolConsoleConfigService,
          useValue: config
        }
      ]
    }
  }
}
