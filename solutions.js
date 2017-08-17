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
const array_diff = (a, b)=>{
  while(a.indexOf(b[0]) !== -1){
   a.splice(a.indexOf(b[0]), 1)
  }
  return a;
}
const  countAdjacentPairs = (searchString)=>{
  var arrLoverCase = searchString.toLowerCase()
  var arr = arrLoverCase.split(' ')
  let counter = 0;
  arr.filter(x=>{
    return x.indexOf(' ') == -1
  })
  for( let i = 0; i<arr.length; i++){
    if(arr[i] == arr[i +1]){
      counter++;
      i++;
      let word = arr[i]
      while(arr[i] == word){
        i++;
      }
    }
  }
  return counter
}
const titleCase =  (title, minorWords)=>{
  let = finded = false
  var arr = title.toLowerCase().split(' ')
  var minor = null
  if(minorWords !== undefined){
    minor  = minorWords.toLowerCase().split(' ')
  }
  for(var i = 0; i<arr.length; i++){
    finded = false
    if( minorWords !== undefined){
      for(el of minor){
        if(el == arr[i]){
            finded = true;
            break;
        }
      }
    }
    if(i == 0){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    if(finded){
      continue
    }
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ')
}

const zipObject = (keys, values)=>{
  let obj = {}
  if(keys == undefined){
  return {}
  }
 for( let i = 0; i< keys.length; i++){
    if(values == undefined && keys[0].length == 2){
      obj[keys[i][0]] = keys[i][1]
      continue
    }
    if(values == undefined){
      obj[keys[i]] = undefined
      continue
    }
    obj[keys[i]] = values[i]
  }
  return obj
}

const isIntArray = (arr)=>{ 
  if(Array.isArray(arr)) 
    return  arr.every(x=>{
      if(Number.isInteger(x)){
        return true
      }
      return false
    })

  return false
}
//better way
  return Array.isArray(arr) && arr.every(x=>{return Number.isInteger(x)} /// cv
}



// >2  zwraca 1  - mają sąsiadowac białe spacje nie mają znaczenia
//mze byc wiecej niz dwa jesli ze soba nie sasiaduja
 - jeden czy obok jest kolejny if no to idzie dalej
     daje 1 konczy -  jesli jest kolejny to pomija tak dluga jak znajdzie inne slowo

