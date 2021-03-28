import { LightningElement } from 'lwc';
import  NAME_FIELD from '@salesforce/schema/Contact.Name';
import 	PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import 	EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import 	BILLING_ADDRESS__C_FIELD from '@salesforce/schema/Contact.Billing_Address__c';
import  SHIPPING_ADDRESS__C_FIELD from '@salesforce/schema/Contact.Shipping_Address__c';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class Customer extends LightningElement {
   
     objectName = CONTACT_OBJECT;

     objectFields = [NAME_FIELD,PHONE_FIELD,EMAIL_FIELD,	BILLING_ADDRESS__C_FIELD , SHIPPING_ADDRESS__C_FIELD];

     handleLoad(event) {
        console.log(NAME_FIELD);
        console.log(CONTACT_OBJECT);
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }

    handleCancel(event) {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }

    handleSubmit(event) {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
 
     handleSuccess(event) {
         console.log(event.type);
         console.log(JSON.stringify(event.detail));
     }
   
     handleError(event) {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
}
