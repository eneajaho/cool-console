# 😎 Cool Console

Cool Console is an angular library that displays cool messages in console.

![Screenshot](https://i.imgur.com/98NHB3T.png)

## Install
```bash
npm install cool-console --save
```

## Setup
Add CoolConsoleModule to app NgModule

```typescript
import { CommonModule } from '@angular/common';
import { CoolConsoleModule } from 'cool-console';

@NgModule({
  imports: [
    CommonModule,
    CoolConsoleModule.forRoot() // CoolConsoleModule added
  ],
  bootstrap: [App],
  declarations: [App]
})
class MainModule {}
```

## Use

```typescript
import { CoolConsoleModule } from 'cool-console';

@Component({...})
export class YourComponent {
  constructor(private cc: CoolConsoleService) {
    this.cc.success('✔ Successfully Initialized!');
    this.cc.warning('⚠ Global Warning!');
    this.cc.danger('💀 World is in danger!');
    this.cc.info('🕊 Everything will be okay!');

    /* Custom log
    *  @param1 args
    *  @param2 color
    *  @param3 backgroundColor */
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

--
GitHub [@eneajaho](https://github.com/eneajaho)

