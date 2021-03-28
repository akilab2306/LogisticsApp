import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
    import QUANTITY__C_FIELD from '@salesforce/schema/Product2.Quantity__c';
    import PRICE__C_FIELD from '@salesforce/schema/Product2.Price__c';
    import TOTAL_PRICE__C_FIELD from '@salesforce/schema/Product2.Total_price__c';
    import DRIVER_NAME__C_FIELD from '@salesforce/schema/Product2.Driver_name__c';
    import DRIVER_PHNNO__C_FIELD from '@salesforce/schema/Product2.Driver_Phnno__c';
    import PRODUCT2_OBJECT from '@salesforce/schema/Product2';

export default class DeliveryDetails extends LightningElement {
    
            objectName = PRODUCT2_OBJECT ;
           
        fields = [NAME_FIELD, QUANTITY__C_FIELD, PRICE__C_FIELD,TOTAL_PRICE__C_FIELD ,DRIVER_NAME__C_FIELD,DRIVER_PHNNO__C_FIELD];
        handleLoad(event) {
       console.log(NAME_FIELD);
       console.log(PRODUCT2_OBJECT );
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

   get name() {
    return this.product2.data.fields.Name.value;
}

get quantity() {
    return this.product2.data.fields.Quantity.value;
}

get price() {
    return this.product2.data.fields.Price.value;


}
get total_price() {
    return this.product2.data.fields.Total_price.value;
}


get driver_name() {
    return this.product2.data.fields.Driver_name.value;
}

get driver_Phnno() {
    return this.product2.data.fields.Driver_Phnno.value;
}


}

