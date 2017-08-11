const reverseWords = str=>{
    return str.split(' ').reverse().join(' ')
}
const solution= (str)=>{
    let arr  =[]
            let it =0;
            let iti = 2;
    for(let i = 0; i<str.length/2; i++){
        arr.push(str.slice(it, iti));
        it+=2;
        iti+=2;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length == 1){
          arr[i]+='_'
        }
    }
    return arr
}
const solution = (str)=>{
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
const arraysSimilar = (arr1, arr2)=>{
 if(isEqArrays(arr1, arr2)){
    var ar1 = arr1.reduce(function getSum(total, num) {
    return total + num;
    })
    var ar2 = arr2.reduce(function getSum(total, num) {
    return total + num;
    })
    if(ar1 == ar2){
      return true
    } 
}
return false
}
const inArray = (array, el)=>{
  for ( var i = array.length; i--; ) {
    if ( array[i] === el ) return true;
  }
  return false;
}
const isEqArrays = (arr1, arr2)=>{
  if ( arr1.length !== arr2.length ) {
    return false;
  }
  for ( var i = arr1.length; i--; ) {
    if ( !inArray( arr2, arr1[i] ) ) {
      return false;
    }
  }
  return true;
}

const sortme = ( names )=>{
    
}
//Duplicate arguments
function solution(){
  let arr = Array.from(arguments)
  let duplicates = []
  for(el of arr){
    if(duplicates.indexOf(el) == -1){
      duplicates.push(el)
    }
    else{
      return true
    }
  }
  return false
}
