import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
// import * as AppRoutingJson  from "src/assets/app-routing.json;


const routes: Routes = [
  { path: 'home', pathMatch:'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [
    LoginModule,
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor( private router: Router ){

    // this.prepareRoutes( AppRoutingJson );
    // routes.push(
    //   { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    //   { path: 'clients', loadChildren: () => import('./modules/working-modules/clients/clients.module').then(m => m.ClientsModule) },
    //   // { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },                         
    // );

    // this.router.resetConfig( routes );  
}

prepareRoutes( routesJson: any ) {

    let routesArr = <Routes>[];

    routesArr = routesJson;

    routesArr.forEach( route => {

        routes.push( route );

    });



}
}
