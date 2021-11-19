export interface UserModel{
    id:number;
    name:string;
    username:string;
    email:string;
    address:AdrressModel;
    phone:string;
    website:string;
    company:CompanyModel
}

export interface AdrressModel{
    street:number;
    suit:string;
    city:string;
    zipcode:string;
    geo:GeoModel
}

export interface GeoModel{
    lat:string;
    long:string;
}

export interface CompanyModel{
    catchPhrase:number;
    name:string;
    bs:string;
}