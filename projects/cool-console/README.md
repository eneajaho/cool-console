# 😎 Cool Console

Cool Console is an angular library that displays cool messages in console.

![Screenshot](https://i.imgur.com/98NHB3T.png)

## Install
```bash
npm install cool-console --save
```

## Setup
Add CoolConsoleModule to App NgModule

```typescript
import { CommonModule } from '@angular/common';
import { CoolConsoleModule } from 'ng-cool-console';

@NgModule({
  imports: [
    CommonModule,
    CoolConsoleModule.forRoot()
  ],
  bootstrap: [App],
  declarations: [App]
})
class MainModule {}
```

## Use

```typescript
import { CoolConsoleModule } from 'ng-cool-console';

@Component({...})
export class YourComponent {
  constructor(private cc: CoolConsoleService) {
    this.cc.success('✔ Successfully Initialized!');
    this.cc.warning('⚠ Global Warning!');
    this.cc.danger('💀 World is in danger!');
    this.cc.info('🕊 Everything will be okay!');
    this.cc.info({ name: 'ng-cool-console' });

    /* Custom Log
    *  @param1 args
    *  @param2 color
    *  @param3 backgroundColor 
    */
    this.cc.log('🕊 Everything will be okay!', 'black', 'red');
  }
}
```

### Global Options

Global options include the following options:

| Option          | Type    | Default       | Description                                       |
| ----------------| ------- | ------------- | ------------------------------------------------- |
| padding         | string  | '5px 10px'    | Sets the padding for the console string box       | 
| borderRadius    | string  | '2px'         | Sets the border radius for the console string box |
| fontSize        | string  | '16px'        | Classes used on toastr service methods            |


#### Setting Global Options

Pass values to `CoolConsoleModule.forRoot()`

```typescript
// AppModule
imports: [
    CoolConsoleModule.forRoot({
        padding: '6px 12px',
        borderRadius: '5px',
        fontSize: '18px'
    })
],
```

## License

MIT


## Contributors
[@drdreo](https://github.com/drdreo/)

---

Author: [@eneajaho](https://github.com/eneajaho)

