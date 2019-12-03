export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    gender: string;

    constructor(id: number = 0, firstName: string = "", lastName: string = "",
        birthdate: Date = new Date(), gender: string = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.gender = gender;
    }
}
