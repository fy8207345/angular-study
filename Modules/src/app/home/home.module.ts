import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us.component";
import { ContactUsComponent } from "./pages/contact-us.component";
import { HomeComponent } from "./pages/home.component";

const routes : Routes = [
    {path: '', component: HomeComponent},
    {   path: 'home',   component: HomeComponent   },
    {   path: 'contactus',   component: ContactUsComponent   },
    {   path: 'aboutus',   component: AboutUsComponent   },
]

@NgModule({
    declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
})
export class HomeModule{}