import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contactForm:FormGroup;
  country_name="";
  countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];
  constructor(private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      country: [null]
    });

    this.contactForm.get("country").valueChanges.subscribe(c => {
      this.onCountryChanged(c);
    })
  }

  onCountryChanged(c: any) {
    console.log('onCountryChanged', c)
  }

  
  title = 'select-options-example';

  submit(){
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }

  setDefaults(){
    this.contactForm.get("country").patchValue(null);
  }

  addCountry() {
    console.log('country', this.country_name)
    const country = this.countries.find(el => el.name === this.country_name);
    if (!country) {
      let id=Math.max.apply(Math, this.countries.map(function(o) { return o.id; }))
      this.countries.push({id:id+1, name:this.country_name})
      this.country_name="";
    }
  }

  set_country="";
 
setCountry() {
  const country = this.countries.find(el => el.name === this.set_country);
  if (country) {
    this.contactForm.get("country").patchValue(country);
  }
}
 
}
