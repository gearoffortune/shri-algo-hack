const array = [5, 3, 1, 8, 7]
function bubbleSort(array){

  function swap(array, pos1, pos2){
    const t = array[pos1];
    array[pos1] = array[pos2]
    array[pos2] = t;
  }
  
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[j - 1] > array[j]) swap(array, j - 1, j);
    }
  }
  return array;
}

console.log(bubbleSort(array));