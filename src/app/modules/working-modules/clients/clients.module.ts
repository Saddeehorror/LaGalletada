import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { ShowComponent } from './components/show/show.component';
import { SharedModule } from '../../shared/shared.module';
import { AddComponent } from './components/add/add.component';
import { FormComponent } from './components/form/form.component';
import { EmailComponent } from './components/form/items/email/email.component';
import { TelephoneComponent } from './components/form/items/telephone/telephone.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  declarations: [
    ContainerComponent,
    ShowComponent,
    AddComponent,
    FormComponent,
    EmailComponent,
    TelephoneComponent,
    InfoComponent]
})
export class ClientsModule { }
