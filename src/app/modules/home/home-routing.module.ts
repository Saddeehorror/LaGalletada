import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: LayoutComponent, canActivate: [ AuthGuard],children:[
  
  { path: 'clients', loadChildren: () => import('src/app/modules/working-modules/clients/clients.module').then(m => m.ClientsModule) },
  {path:'', component: HomeComponent},
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {


// prepareRoutes( routesJson: any ) {

//     let routesArr = <Routes>[];

//     routesArr = routesJson;

//     routesArr.forEach( route => {

//         routes.push( route );

//     });



// }
 }
