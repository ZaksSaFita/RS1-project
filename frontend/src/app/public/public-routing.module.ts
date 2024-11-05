import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {BookingComponent} from './booking/booking.component';
import {ShopComponent} from './shop/shop.component';
import {TeamComponent} from './team/team.component';
import {PublicLayoutComponent} from './public-layout/public-layout.component';

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'achievements', component: AchievementsComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'team', component: TeamComponent},

      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: HomeComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
