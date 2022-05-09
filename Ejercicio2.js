/*
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/


//A ESTE NO  LE ENTENDÍ PERO LO HICE COMO EL QUE PRESENTARON EN LA CLASE :C
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

function conc(arr){
    let conc1=[]
    const ayb=arr.map((par)=> par.a+par.b)
    const names=arr.map((param)=> param.name)
    for(let i=0; i<ayb.length; i++)
    {
        conc1.push(ayb[i]+" "+names[i] +" ---- ")
    }
    conc1=conc1.reduce((prev, curr)=>prev+curr);
    return conc1;
}
console.log(conc(coleccion))