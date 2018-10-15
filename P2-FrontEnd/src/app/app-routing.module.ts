import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserPortfolioComponent } from './components/user-portfolio/user-portfolio.component'
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { StockCompanyComponent } from './components/stock-company/stock-company.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent },
 {path: 'settings', component: UserSettingsComponent},
 {path: 'portfolio', component: UserPortfolioComponent },
 {path: 'logout', component: LogoutComponent},
 {path: 'home', component: HomeComponent},
 {path: 'directory', component: TestComponent},
 {path: 'company', component: StockCompanyComponent},
 {path: 'new', component: NewUserComponent},
 {path: 'transaction-history', component:TransactionHistoryComponent}
];

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
   // CommonModule
 ],
 // declarations: []
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
