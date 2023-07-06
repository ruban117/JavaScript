const brainstromers=["Ruban",117,"Soumita",96,"Altab",88,"Shobhan",85,"Samarpita",150,"Souvik",108,"Sushmita",109]
console.log(brainstromers)
console.log(brainstromers.length)
brainstromers[14]="Shubhadeep"
brainstromers[15]=50
console.log(brainstromers)
console.log(brainstromers.length)
console.log(typeof brainstromers)

/*array using for loop*/

n=prompt("Enter The Length Of An Array:- ")
n=Number.parseInt(n)
arr=[]
for(let i=0;i<n;i++){
    let x=prompt(`Enter arr[${i+1}]:- `)
    x=Number.parseInt(x)
    arr[i]=x
}

for(let i=0;i<n;i++){
    console.log(arr[i]+",")
}