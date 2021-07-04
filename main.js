const array = [5, 3, 1, 8, 7]

function swap(array, pos1, pos2){
  const t = array[pos1];
  array[pos1] = array[pos2]
  array[pos2] = t;
}

function bubbleSort(array){

  
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[j - 1] > array[j]) swap(array, j - 1, j);
    }
  }
  return array;
}

console.log(bubbleSort(array));

const selectionArray = [5, 3, 1, 8, 7, 0, 2]

function selectionSort(arr) {
  for(let i = arr.length - 1; i !== 0; i--){

    let maxIndex = 0;
    let max = -Infinity;

    for(let j = 0; j <= i; j++){
      if(max < arr[j]){
        max = arr[j];
        maxIndex = j;
      }
    }
    
    swap(arr, i, maxIndex);
  }
  return arr;
}

console.log(selectionSort(selectionArray))