import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { RentCalculatorComponent } from './rent-calculator/rent-calculator.component';
import { KmMileComponent } from './km-mile/km-mile.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'navigation', canActivate: [AuthGuard], component: NavigationComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'age-calculator', component: AgeCalculatorComponent },
      { path: 'rent-calculator', component: RentCalculatorComponent },
      { path: 'km-mile', component: KmMileComponent },
      { path: 'crud', component: CrudComponent },
      { path: '**', component: HomeComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
