// Your code here
function mapToNegativize(array){return array.map(x => x * (-1));}
function mapToNoChange(array){return array.map(x => x );}
function mapToDouble(array){return array.map(x => x * 2);}
function mapToSquare(array){return array.map(x => x*x);}

let array=[1,2,3,-9];
console.log(mapToNegativize(array));
console.log(mapToNoChange(array));
console.log(mapToDouble(array));
console.log(mapToSquare(array));

//const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reduceToTotal(sourceArray, startingPoint=0){
  let val;
  val=sourceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  return val+startingPoint;
}
reduceToTotal([1,2,3]);
reduceToTotal([1,2,3],100);

function reduceToAllTrue(sourceArray){
return sourceArray.reduce((a, c) => Boolean(c));
}
reduceToAllTrue([1, 2, true, "razmatazz"]);
reduceToAllTrue([1, 2, true, "razmatazz", false]);


function reduceToAnyTrue(sourceArray){
//  let nBoolean= new Boolean('false');
   let t= sourceArray.reduce((a, c) => a+Boolean(c));
   if(t==1){return true;}
   else return false;

  }
reduceToAnyTrue([ false, null, null, null, true]);
reduceToAnyTrue([ false, null, null, null]);
