import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CoolConsoleConfig } from './CoolConsoleConfig';
import { CoolConsoleService } from './cool-console.service';

@NgModule()
export class CoolConsoleModule {
  static forRoot(config?: CoolConsoleConfig): ModuleWithProviders {
    return {
      ngModule: CoolConsoleModule,
      providers: [CoolConsoleService, { provide: 'config', useValue: config }]
    }
  }
}
