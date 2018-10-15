import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StockCompanyComponent } from './components/stock-company/stock-company.component';
import { UserPortfolioComponent } from './components/user-portfolio/user-portfolio.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TestServiceService } from './services/test-service.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { NavComponent } from './components/nav/nav.component';
import { TransactionServiceService } from './services/transaction-service.service';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    StockCompanyComponent,
    UserPortfolioComponent,
    UserSettingsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    TestComponent,
    NavComponent,
    NewUserComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestServiceService, TransactionServiceService],
  bootstrap: [AppComponent]
   //adding bootstrap: npm install bootstrap. in angular.json, put location under styles. restart to do ng serve
})
export class AppModule { }
