/*there are 5 types of loops in JS
FOR LOOP
FOR IN LOOP
FOR OF LOOP
WHILE LOOP
DO-WHILE LOOP*/

/*Sample program of FOR LOOP*/

sum=0
for(var i=1;i<=3;i++){
    sum+=i
}
console.log(sum)

/*sample program of FOR IN LOOP*/

obj={
    Ruban:117,
    Soumita:96,
    Altab:88,
    Shobhan:84
}

for(var i in obj){
    console.log("The Roll Of "+i+" Is :- "+obj[i])
}

/*sample program of FOR OF LOOP*/

for(var i of "Ruban Pathak"){
    console.log(i+" ")
}

/*sample program of WHILE LOOP*/

let i=1
while(i<=10){
    console.log(i+" ")
    i++;
}

/*sample program of DO-WHILE loop*/

let j=10
do{
    console.log(j+" ")
    j++
}while(j<1);
