export class AddressBook {
    firstname: String = "";
    lastname: String = "";
    email: String = "";
    phonenumber: String = "";
    address: String = "";
    city: String = "";
    state: String = "";
    pincode: Number = 0;

    constructor(firstname: String, lastname: String, email: String, phonenumber: String, address: String, city: String, state: String, pincode: Number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
}