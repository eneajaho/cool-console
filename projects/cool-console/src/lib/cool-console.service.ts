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

  success(...args) {
    this.log(args, 'green', 'lightgreen');
  }

  warning(...args) {
    this.log(args, '#856404', '#fff3cd')
  }

  danger(...args) {
    this.log(args, '#721c24', '#f8d7da')
  }

  info(...args) {
    this.log(args, '#004085', '#cce5ff')
  }

  log(args: any[], color: string, bgColor: string) {

    if (args.length === 0) {
      console.log(args);
      return;
    }

    else if (args.length >= 1) {
      args.forEach(arg => {
        if (typeof arg === 'string' || typeof args[0] === 'number' || typeof args[0] === 'boolean') {
          console.log(`%c${arg}`, this.colors.init(color, bgColor));
        } else if (typeof arg === 'object') {
          this.logObj(arg);
        } else {
          console.log(arg);
        }
      })
    }
  }

  private logObj(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'object') {
        console.log(`%c${key} : %c${obj[key]}`, this.colors.init('#b003b0', 'black'), this.colors.init('lightgreen', 'black'));
      } else {
        this.logObj(obj[key]);
      }
    });
    console.log('');
  }

}
