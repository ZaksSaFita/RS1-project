import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ManageGamesComponent} from './manage-games/manage-games.component';
import {ManageBookingsComponent} from './manage-bookings/manage-bookings.component';
import {ManageReviewsComponent} from './manage-reviews/manage-reviews.component';
import {ManageShopComponent} from './manage-shop/manage-shop.component';
import {ManageTeamsComponent} from './manage-teams/manage-teams.component';
import {ManageAchievementsComponent} from './manage-achievements/manage-achievements.component';
import {ManageEquipmentComponent} from './manage-equipment/manage-equipment.component';
import {ManageEventsComponent} from './manage-events/manage-events.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';


const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'manage-users', component: ManageUsersComponent},
      {path: 'manage-games', component: ManageGamesComponent},
      {path: 'manage-bookings', component: ManageBookingsComponent},
      {path: 'manage-reviews', component: ManageReviewsComponent},
      {path: 'manage-shop', component: ManageShopComponent},
      {path: 'manage-teams', component: ManageTeamsComponent},
      {path: 'manage-achievements', component: ManageAchievementsComponent},
      {path: 'manage-equipment', component: ManageEquipmentComponent},
      {path: 'manage-events', component: ManageEventsComponent},

      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', component: DashboardComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
