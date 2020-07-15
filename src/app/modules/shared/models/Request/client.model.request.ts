import { ClientAddressModel } from './clientAddress.model.request';
import { ClientEmailModel } from './clientEmail.model.request';
import { ClientTelephoneModel } from './clientTelephone.model.request';

export class ClientModel{
    NAME:string;
    FLASTNAME:string;
    MLASTNAME:string;
    GENDER:string;
    BIRTHDAY:string;
    ADDRESS: ClientAddressModel;
    EMAIL: ClientEmailModel[];
    TELEPHONE: ClientTelephoneModel[];
}