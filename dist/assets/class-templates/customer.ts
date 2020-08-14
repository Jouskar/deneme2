export class Customer {
    name: string;
    lastname: string;
    title: string;
    address: string;
    district: string;
    city: string;
    countryCode: string; // country iso code diye aratabilirsin burda selectte isim gosterip sectiginde iso code set eden bir selectbox yapalim
    country: string; //Ulke secilince ulke kodu alanina kod buraya ise ismi gelebilir
    tel: number;
    telOpt: number;
    email: string; // e-posta valid mi diye kontrol koyabiliriz en son
    taxDepartmentNumber: string;
    identityNumber: number;
    constructor() {
        this.name = "";
        this.lastname = "";
        this.title = "";
        this.address = "";
        this.district = "";
        this.city = "";
        this.countryCode = "";
        this.country = "";
        this.tel = undefined;
        this.telOpt = undefined;
        this.email = "";
        this.taxDepartmentNumber = "";
        this.identityNumber = undefined;
    } 
}