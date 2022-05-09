/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajo y segundo más alto, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
 const arr = [3,4,6,1,5,2,9,10,23,12]

    arr.sort(function(a, b) {
        return a - b;
    });
    var numor=arr;
    console.log("El segundo número menor es:" + numor[1])
    console.log("El segundo número mayor es:" + numor[numor.length-2])
    
