import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { TopImageCategoryComponent } from './top-image-category/top-image-category.component';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';
import { NgxMaskModule } from 'ngx-mask';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { CopyrightsComponent } from './copyrights/copyrights.component'
import { AppRoutingModule } from './app-routing.module';
import { AgriculturalComponent } from './portfolio-pages/agricultural/agricultural.component';
import { FoodComponent } from './portfolio-pages/food/food.component';
import { WhiteComponent } from './portfolio-pages/white/white.component';
import { ChildComponent } from './portfolio-pages/child/child.component';
import { ReportageComponent } from './portfolio-pages/reportage/reportage.component';
import { ObjectComponent } from './portfolio-pages/object/object.component';
import { SportComponent } from './portfolio-pages/sport/sport.component';
import { AerialComponent } from './portfolio-pages/aerial/aerial.component';
import { ArchitectureComponent } from './portfolio-pages/architecture/architecture.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MainComponent,
      TopImageCategoryComponent,
      RequestDialogComponent,
      PortfolioMenuComponent,
      CopyrightsComponent,
      AgriculturalComponent,
      FoodComponent,
      WhiteComponent,
      ChildComponent,
      ReportageComponent,
      ObjectComponent,
      SportComponent,
      AerialComponent,
      ArchitectureComponent,
   ],
   entryComponents: [
      RequestDialogComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      NgxMaskModule.forRoot(),
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
