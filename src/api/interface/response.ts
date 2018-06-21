export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  website: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}