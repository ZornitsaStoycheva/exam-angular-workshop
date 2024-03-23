import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CountDirective,
      multi: true
    }
  ]
})
export class CountDirective implements Validator{
@Input() appCount: number | undefined;
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
  
    const len = control.value?.length || 0;
      if(!this.appCount || len > this.appCount) {
        return null;
      }

      return { appCount: this.appCount}
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
