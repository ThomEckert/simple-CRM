export class User {

    userId: string;
    firstName: string;
    lastName: string;
    eMail: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.userId = obj ? obj.userId : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.eMail = obj ? obj.eMail : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            eMail: this.eMail,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        }
    }
}