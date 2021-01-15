import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateExample';

  arr: string[] = ["a", "b" , "c"];

  condition = true;

  sayHello(firstName, lastName) {
    alert('Hello '+firstName.value+' '+ lastName.value)
  }

  onSubmit(form){
    console.log('submit', form)
  }
}
