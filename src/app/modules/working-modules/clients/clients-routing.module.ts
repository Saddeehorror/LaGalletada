import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ShowComponent } from './components/show/show.component';
import { AddComponent } from './components/add/add.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [{ path: '', component: ContainerComponent, children:[
  {path:'add',component: AddComponent},
  {path:':id', component: InfoComponent},
  {path:'', component: ShowComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
