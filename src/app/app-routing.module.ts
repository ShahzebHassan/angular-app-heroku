import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { RentCalculatorComponent } from './rent-calculator/rent-calculator.component';
import { KmMileComponent } from './km-mile/km-mile.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'age-calculator', component: AgeCalculatorComponent },
  { path: 'rent-calculator', component: RentCalculatorComponent },
  { path: 'km-mile', component: KmMileComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
