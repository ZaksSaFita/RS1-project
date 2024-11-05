import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageGamesComponent} from './manage-games/manage-games.component';
import {ManageBookingsComponent} from './manage-bookings/manage-bookings.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ManageReviewsComponent} from './manage-reviews/manage-reviews.component';
import {ManageEquipmentComponent} from './manage-equipment/manage-equipment.component';
import {ManageShopComponent} from './manage-shop/manage-shop.component';
import {ManageAchievementsComponent} from './manage-achievements/manage-achievements.component';
import {ManageTeamsComponent} from './manage-teams/manage-teams.component';
import {ManageEventsComponent} from './manage-events/manage-events.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageGamesComponent,
    ManageBookingsComponent,
    ManageUsersComponent,
    ManageReviewsComponent,
    ManageEquipmentComponent,
    ManageShopComponent,
    ManageAchievementsComponent,
    ManageTeamsComponent,
    ManageEventsComponent,
    AdminLayoutComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
