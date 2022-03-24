export class User {
  _id: string;
  email: string = '';
  name: string = '';
  lastname: string = '';
  store: string;
  data: any = {};
  phone: string = '';
  addresses: any[] = [];
  defaultShippingAddress: any = {};
  defaultInvoiceAddress: any = {};
  dateCreated: string = '';
}
