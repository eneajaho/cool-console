import { CoolConsoleConfig } from './CoolConsoleConfig';

export class Colors {
    constructor(private config: CoolConsoleConfig) { }

    public init(color: string, backgroundColor: string): string {
        return `
            color: ${color}; 
            background-color: ${backgroundColor}; 
            padding: ${this.config.padding}; 
            font-size:  ${this.config.fontSize};
            border-radius: ${this.config.borderRadius};`;
    }
}

export type ColorTypes = 'success' | 'warning' | 'danger' | 'info';