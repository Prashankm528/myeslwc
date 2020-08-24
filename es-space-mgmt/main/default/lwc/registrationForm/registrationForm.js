import { LightningElement, track } from 'lwc';

export default class RegistrationForm extends LightningElement {

    Firstname;
    Lastname;
    email;
    @track details =[]

    @track factors = {"FirstName": "", "LastName":"",
    "Email":""};

    ChangeHandler(event){
        if(event.target.name == "fName"){
            this.Firstname = event.target.value;
            this.factors["FirstName"] = this.Firstname;
        }
        if(event.target.name == "LName"){
            this.Lastname = event.target.value;
            this.factors["LastName"] = this.Lastname;
        }
        if(event.target.name == "email"){
            this.email = event.target.value;
            this.factors["Email"] =  this.email;
            
        }
        console.log(this.factors);
        this.details.push(this.factors);
        console.log(this.details);
    }
}