import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { IconsComponent } from '../../icons/icons.component';
import { AccountStmtComponent } from 'app/accountstmt/accountstmt.component';
import { ExpensesComponent } from 'app/expenses/expenses.component';
import { TrendsComponent } from 'app/trends/trends.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'accountstmt',    component: AccountStmtComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'expenses',       component: ExpensesComponent },
    { path: 'trends',       component: TrendsComponent }
];