import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ContentComponent } from './common/content/content.component';
import { FooterComponent } from './common/footer/footer.component';
import { StarComponent } from './common/star/star.component';
import { SlidebarComponent } from './common/slidebar/slidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CDetailsComponent } from './pages/c-details/c-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import EnterGuard from './guards/enter';
import LeaveGuard from './guards/leave';
import ResolveGuard from './guards/resolve';
import { ListComponent } from './pages/products/list/list.component';
import { SearchComponent } from './pages/products/search/search.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
  }, {
    path: 'products',
    component: ProductsComponent,
  }, {
    path: 'details/:id',
    component: DetailsComponent,
  }, {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [EnterGuard],
    canDeactivate: [LeaveGuard],
    resolve: {
      prepared: ResolveGuard,
    }
  }, {
    path: 'cDetails/:id',
    component: CDetailsComponent,
  }, {
    path: '**',
    component: NotfoundComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    StarComponent,
    SlidebarComponent,
    HomeComponent,
    ProductsComponent,
    NotfoundComponent,
    DetailsComponent,
    CustomerComponent,
    CDetailsComponent,
    ListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // 引入路由模块RouterModule
  ],
  providers: [ProductService, CustomerService, EnterGuard, LeaveGuard, ResolveGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
