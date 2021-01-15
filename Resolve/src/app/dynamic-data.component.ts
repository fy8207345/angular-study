import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
 
@Component({
     template: `<H1>Passing Dynamic Data Demo</H1>
 
     {{ product | json }}`
})
export class DynamicComponent implements OnInit {
 
     product;
 
     constructor(private router:Router, private activatedRoute:ActivatedRoute) {
          console.log(this.router.getCurrentNavigation().extras.state);
     }
 
     ngOnInit() {
          //console.log(history.state);
          this.product=history.state;
          this.activatedRoute.data.subscribe(data => {
              console.log('dynamic data', data, history.state, window)
          })
     }
 
}