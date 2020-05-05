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

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MainComponent,
      TopImageCategoryComponent,
      RequestDialogComponent,
      PortfolioMenuComponent,
      CopyrightsComponent,
   ],
   entryComponents: [
      RequestDialogComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      NgxMaskModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
