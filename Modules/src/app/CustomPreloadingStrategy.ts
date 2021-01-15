import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { mergeMap } from 'rxjs/operators'

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route, loadModule: () => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']){
            var delay = route.data['delay']
            console.log('preload called on ' + route.path + ' delay is ' + delay)
            return timer(delay).pipe(
                mergeMap( _ => {
                    console.log('loading module' + route.path)
                    return loadModule();
                })
            )
        }else{
            console.log('no preload for the path '+ route.path);
            return of(null);
        }
    }
    
}