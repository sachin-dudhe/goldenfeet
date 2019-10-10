import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { IconsComponent } from '../../icons/icons.component';
import { AccountStmtComponent } from 'app/accountstmt/accountstmt.component';
import { ExpensesComponent } from 'app/expenses/expenses.component';
import { TrendsComponent } from 'app/trends/trends.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    AccountStmtComponent,
    IconsComponent,
    ExpensesComponent,
    TrendsComponent
  ]
})

export class AdminLayoutModule {}
