import { InjectionToken } from '@angular/core';

export interface CoolConsoleConfig {
    padding?: string;
    borderRadius?: string;
    fontSize?: string;
}



export const CoolConsoleConfigService = new InjectionToken<CoolConsoleConfig>('CoolConsoleConfig');
