import { Customer } from "./customer";
import { Products } from "./products";
import { Shipment } from "./shipment";

export class Invoice {    
    id: string;
    merchantUrl: string;
    shipmentCode: string;
    paymentMethod: string;
    paymentDate: Date;
    currency: string;
    customerInfo: Customer;
    products: Products[];
    fileUrl: string;
    dispatchNoteFile: string;
    status: number;
    shipmentInfo: Shipment;
    discounts: number[];

    constructor() {
        this.id = "";
        this.merchantUrl = "";
        this.shipmentCode = "EKOL";
        this.paymentMethod = "KrediKarti_BankaKarti";
        this.paymentDate = null;
        this.currency = "";
        this.customerInfo = new Customer();
        this.products = [new Products()];
        this.discounts = [];
        this.fileUrl = "";
        this.dispatchNoteFile = "";
        this.status = undefined;
        this.shipmentInfo = new Shipment();
    }
}