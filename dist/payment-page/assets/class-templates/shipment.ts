export class Shipment {
    title: string;
    address: string;
    district: string;
    city: string;
    countryCode: string;
    country: string;
    tel: number;
    telOpt: number;
    email: string;

    constructor() {
        this.title = "";
        this.address = "";
        this.district = "";
        this.city = "";
        this.countryCode = "TR";
        this.country = "Türkiye";
        this.tel = undefined;
        this.telOpt = undefined;
        this.email = "";
    }
}