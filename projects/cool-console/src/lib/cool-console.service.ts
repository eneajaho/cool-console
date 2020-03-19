import { Injectable, Inject } from '@angular/core';
import { CoolConsoleConfig } from './CoolConsoleConfig';
import { Colors } from './Colors';

@Injectable({ providedIn: 'root' })
export class CoolConsoleService {

  private defaultConfigs: CoolConsoleConfig = {
    padding: ' 5px 10px',
    borderRadius: '2px',
    fontSize: '16px'
  }

  private colors: Colors;

  constructor(@Inject('config') private config?: CoolConsoleConfig) {
    this.checkConfig();
  }

  /* Applies the configs from forRoot() */
  private checkConfig() {
    if (this.config) {
      for (const key in this.config) {
        if (this.config.hasOwnProperty(key)) {
          this.defaultConfigs = { ...this.defaultConfigs, [key]: this.config[key] }
        }
      }
    }

    this.colors = new Colors(this.defaultConfigs);
  }

  success(args) {
    this.log(args, 'green', 'lightgreen');
  }

  warning(args) {
    this.log(args, '#856404', '#fff3cd')
  }

  danger(args) {
    this.log(args, '#721c24', '#f8d7da')
  }

  info(args) {
    this.log(args, '#004085', '#cce5ff')
  }

  log(args: string | object, color: string, bgColor: string) {
    if (typeof args === 'string') {
      console.log(`%c${args}`, this.colors.init(color, bgColor));
    } else if (typeof args === 'object') {
      console.log(`%c${JSON.stringify(args, null, 4)}`, this.colors.init(color, bgColor));
    }
  }

}
