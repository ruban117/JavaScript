class RailwayForm {
    constructor(name, tno, address, pin) {
        this.name = name
        this.tno = tno
        this.address = address
        this.pin = pin
    }
    preview(){
            alert("Form Submitted With the name of:- " + this.name + " Also Train Number Is:- " + this.tno + " Address Is:- " + this.address + " Pin No Is:- " + this.pin)
    }
    submit() {
        alert("Form Submitted With the name of:- " + this.name + " Also Train Number Is:- " + this.tno)
    }
    cancel() {
        alert("Form Cancelled With the name of:- " + this.name + " Also Train Number Is:- " + this.tno)
        this.tno=0
    }
}

let r = new RailwayForm("Ruban Pathak", 541204789,"Naihati West Bengal India",743166)
let s = new RailwayForm("Soumita Das", 478965412,"Bhadreswar West Bengal India",746451)
//r.fill("Ruban Pathak", 541204789)
//s.fill("Soumita Das", 478965412)

r.preview()
r.submit()
s.submit()

r.cancel()
r.cancel()