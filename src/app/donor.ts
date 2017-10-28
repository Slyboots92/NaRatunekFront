export class Donor {
    id: number
    name: string
    surname: string
    email: string
    donationSum: number
    profileUrl: string

    constructor(values: Object= {} ){
        Object.assign(this,values);

    }
}
