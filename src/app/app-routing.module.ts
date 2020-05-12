import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { AerialComponent } from './portfolio-pages/aerial/aerial.component';
import { ArchitectureComponent } from './portfolio-pages/architecture/architecture.component';
import { AgriculturalComponent } from './portfolio-pages/agricultural/agricultural.component';
import { ChildComponent } from './portfolio-pages/child/child.component';
import { FoodComponent } from './portfolio-pages/food/food.component';
import { ObjectComponent } from './portfolio-pages/object/object.component';
import { ReportageComponent } from './portfolio-pages/reportage/reportage.component';
import { SportComponent } from './portfolio-pages/sport/sport.component';
import { WhiteComponent } from './portfolio-pages/white/white.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'aerial', component: AerialComponent},
  {path: 'architecture', component: ArchitectureComponent},
  {path: 'agricultural', component: AgriculturalComponent},
  {path: 'child', component: ChildComponent},
  {path: 'food', component: FoodComponent},
  {path: 'object', component: ObjectComponent},
  {path: 'reportage', component: ReportageComponent},
  {path: 'sport', component: SportComponent},
  {path: 'white', component: WhiteComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}