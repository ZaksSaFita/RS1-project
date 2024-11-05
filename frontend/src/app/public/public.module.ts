import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TeamComponent} from './team/team.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {BookingComponent} from './booking/booking.component';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    AchievementsComponent,
    BookingComponent,
    PublicLayoutComponent,
    PublicHeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
  ]
})
export class PublicModule {
}
