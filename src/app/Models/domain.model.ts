const   DOLLAR_TO_DINARD = 3.05
export interface DomainAvailable {
  available: boolean;
  currency: string,
  definitive: boolean,
  domain: string,
  period: number,
  price: number
}
export interface DomainPurchace{
  //tout les champs sont obligatoire ici
    consent: {
      agreedAt: string,
      agreedBy: string,
      agreementKeys: [
        string
      ]
    },
    contactAdmin: {
      addressMailing: {
        address1: string,
        address2: string, /*le champs n'est pas obligatoire */
        city: string,
        country: "US",
        postalCode: string
        state: string
      },
      email: "user@example.com",
      fax: string, /*le champs n'est pas obligatoire */
      jobTitle: string, /*le champs n'est pas obligatoire */
      nameFirst: string,
      nameLast: string,
      nameMiddle: string, /*le champs n'est pas obligatoire */
      organization: string, /*le champs n'est pas obligatoire */
      phone: string
    },
    contactBilling: {
      addressMailing: {
        address1: string,
        address2: string, /*le champs n'est pas obligatoire */
        city: string,
        country: "US",
        postalCode: string
        state: string
      },
      email: "user@example.com",
      fax: string, /*le champs n'est pas obligatoire */
      jobTitle: string,
      nameFirst: string,
      nameLast: string,
      nameMiddle: string, /*le champs n'est pas obligatoire */
      organization: string, /*le champs n'est pas obligatoire */
      phone: string
    },
    contactRegistrant: {
      addressMailing: {
        address1: string,
        address2: string, /*le champs n'est pas obligatoire */
        city: string,
        country: "US",
        postalCode: string
        state: string
      },
      email: "user@example.com",
      fax: string, /*le champs n'est pas obligatoire */
      jobTitle: string,
      nameFirst: string,
      nameLast: string,
      nameMiddle: string, /*le champs n'est pas obligatoire */
      organization: string, /*le champs n'est pas obligatoire */
      phone: string
    },
    contactTech: {
      addressMailing: {
        address1: string,
        address2: string, /*le champs n'est pas obligatoire */
        city: string,
        country: "US",
        postalCode: string
        state: string
      },
      email: "user@example.com",
      fax: string,
      jobTitle: string,
      nameFirst: string,
      nameLast: string,
      nameMiddle: string, /*le champs n'est pas obligatoire */
      organization: string, /*le champs n'est pas obligatoire */
      phone: string
    },
    domain: string,
    nameServers: [ /*le champs n'est pas obligatoire */
      string 
    ],
    period: 1, /*le champs n'est pas obligatoire */
    privacy: false, /*le champs n'est pas obligatoire */
    renewAuto: true /*le champs n'est pas obligatoire */
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
