    /**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     Los números que faltan en arr son [4,6]
*/
matriz = [7,2,5,3,5,3]
br = [7,2,5,4,6,3,5,3]

let faltantes=[];
for(let i=0;i<br.length;i++)
{
  if(!matriz.includes(br[i]))
  {
    faltantes.push(br[i]);
  }
  else{
    continue;
  }
}
console.log(faltantes);