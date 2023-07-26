class RailwayForm{
   submit(){
        alert("Form Submitted With the name of:- "+this.name+" Also Train Number Is:- "+this.tno)
   }
   cancel(){
        alert("Form Cancelled With the name of:- "+this.name+" Also Train Number Is:- "+this.tno)
   }

   fill(name,tno){
        this.name=name
        this.tno=tno
   }
}

let r=new RailwayForm()
let s=new RailwayForm()
r.fill("Ruban Pathak",541204789)
s.fill("Soumita Das",478965412)

r.submit()
s.submit()

r.cancel()