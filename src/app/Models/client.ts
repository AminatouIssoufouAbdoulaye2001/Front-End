export class  Client{
    constructor(
        public cname:string,
        public pname:string,
        public login:string,
        public owner_login:string,
        public passwd:string,
        public status:string,
        public phone:string,
        public fax:string,
        public email:string,
        public address:string,
        public city  :string,
        public locale:string,
        public state:string,
        public pcode:string,
        public country:string,
        public type:string,
        public description:string
         ){

    }
}

/*
description:
The client entity
name*	string
example: John Smith
Client’s personal name (1 to 60 characters long).

company	string
example: Plesk
The company name (0 to 60 characters long).

login*	string
example: john-unit-test
The login name of the client account (1 to 60 characters long).

status	integer
example: 0
The current status of the client account. Allowed values: 0 (active) | 16 (disabled by admin) | 4 (under backup/restore) | 256 (expired).

email*	string
example: john_smith@msn.com
The email address of the client account owner (0 to 255 characters long).

locale	string
example: en-US
The locale used on the client account. Default value: en-US.

owner_login	string
example: admin
The login name of a client account owner. If the client account owner is Plesk Administrator, specify the admin login name.

external_id	string
example: link:12345
The client GUID in the Plesk components (for example, Business Manager).

description	string
example: Nice guy
The description for the client account.
password*	string
example: changeme1Q**
The password of the client account (5 to 14 characters long).

type*	string
example: reseller
The type of the client account. Allowed values: reseller | customer | admin.

Enum:
[ reseller, customer, admin ]

*/

