import { Injectable, Injector } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { gteService } from "./gte.service";

@Injectable({
    providedIn: 'root'
})
export class gteValidatorService{
    constructor(private gteService: gteService){}

    gte(val: number): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let v = control.value;
            if(!this.gteService.gte(v, val)){
                return {'gte': true, 'requiredValue': val}
            }
            return null;
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class gteValidateService2{
    gte(val: number) : ValidatorFn{
        return (control: AbstractControl) : ValidationErrors | null => {
            let injector = Injector.create({providers: [
                {provide: gteService, useClass: gteService, deps:[]}
            ]});
            let service = injector.get(gteService);
            let v = control.value;
            if(!service.gte(v, val)){
                return {'gte': true, 'requiredValue': val}
            }
            return null;
        }
    }
}