import { ValidatorFn } from "@angular/forms"


export function matchPasswordValidator (
    passwordControl: string,
    rePasswordControl: string
): ValidatorFn {
    return (control) => {
        const passControl = control.get(passwordControl);
        const rePassControl = control.get(rePasswordControl);
        const areMatching = passControl?.value == rePassControl?.value;

        return areMatching ? null : {matchPasswordValidator: true};
    }
}