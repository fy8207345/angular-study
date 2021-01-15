import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing Module - Parameters Demo';

  constructor(private router: Router, private activedRoute: ActivatedRoute){}
  gotoProduct(){
    // this.router.navigate(['product']);
    // this.router.navigateByUrl('product')
    // this.router.navigateByUrl('product/1')
    this.router.navigate(['product/1'], {queryParams: {page: 1}, 
    relativeTo: this.activedRoute, fragment: 'top', 
    preserveFragment: true, queryParamsHandling: "merge"})
  }
}
