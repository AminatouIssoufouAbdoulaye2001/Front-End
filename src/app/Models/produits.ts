export class Product {
  id: number;
  name: string;
  bandwidth: string;
  domain: string;
  price: number;
  nbCore: number;
  nbEmail: number;
  ram: string;
  nbDatabase: string;
  memorySpace: string;
}

export class subscribedProduct {
  id: number;
  name: string;
  bandwidth: string;
  domain: string;
  price: number;
  nbCore: number;
  nbEmail: number;
  ram: string;
  nbDatabase: string;
  memorySpace: string;
  dateDebut: number;
  dateFin: number;

  constructor(product: any) {
    Object.assign(this, product)
  }

  getDateFromTimestamp(timestamp: number) {
    let date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}
