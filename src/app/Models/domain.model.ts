const   DOLLAR_TO_DINARD = 3.05
export interface DomainAvailable {
  available: boolean;
  currency: string,
  definitive: boolean,
  domain: string,
  period: number,
  price: number
}

export class Domain implements DomainAvailable {
  constructor(
    public available: boolean,
    public currency: string,
    public definitive: boolean,
    public domain: string,
    public period: number,
    public price: number
  ) {
  }

   convertPrice() {
    return Math.floor((this.price / 1000000) * DOLLAR_TO_DINARD);
  }
}
