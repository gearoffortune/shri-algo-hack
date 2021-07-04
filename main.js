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
    let max = arr[0];

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

insertionArray = [3, 8, 5, 7, 0, 2]
function insertionSort(arr) {

  function insert(arr, pos, val) {
    arr[pos] = val;
  }


  for(let i = 1; i < arr.length; i++){
    const k = arr[i];

    for(let j = i - 1; j >= 0; j--){
      if(k > arr[j]){
        insert(arr, j + 1, k);
        break;
      }
      if(j === 0) {
        insert(arr, 0, k)
        break;
      }
      insert(arr, j + 1, arr[j])
    }
  }
  return arr;
}

console.log(insertionSort(insertionArray))

const depthTree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 3,
          children: null
        },
        {
          val: 4,
          children: null
        },
        {
          val: 5,
          children: null
        }
      ]
    },
    {
      val: 6,
      children: [
        {
          val: 7,
          children: null
        }
      ]
    }
  ]
}

function depthTraversal(tree) {
  let res = [];
  let stack = [];
  stack.push(tree);
  while(stack.length !== 0){
    const currTree = stack.shift();
    res.push(currTree.val);
    if(currTree.children){
      stack.unshift(...currTree.children);
    }
  }
  return res;
}

console.log(depthTraversal(depthTree))

function breadthTraversal(tree) {
  let res = [];
  let queue = [];
  queue.push(tree);
  while(queue.length !== 0){
    const currTree = queue.shift();
    res.push(currTree.val);
    if(currTree.children){
      queue.push(...currTree.children);
    }
  }
  return res;
}

console.log(breadthTraversal(depthTree))

const braces = '([{}])'

function bracesValidator(str) {
  const openingBraces = new Set(['(', '{', '['])
  const closingBraces = new Set([')', '}', ']'])
  const braces = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const arr = str.split('')
  const currentBraceStack = [];
  for (const brace of arr) {
    if(openingBraces.has(brace)){
      currentBraceStack.push(brace)
    }
    if(closingBraces.has(brace)){
      lastBrace = currentBraceStack.pop();
      if(braces[lastBrace]!==brace){
        return false;
      }
    }
  }
  return currentBraceStack.length === 0;
}
console.log(bracesValidator(braces));
console.log(bracesValidator(braces + '()'))
console.log(bracesValidator(braces + '('))
console.log(bracesValidator(braces + ')'))

function primesBeforeN(n) {

  const res = [];

    const isPrime = (num) => {
      for(prime of res){
        if(num % prime === 0) return false;
      }
      return true;
    }



  for(let i = 2; i < n; i++){
    if(isPrime(i)) res.push(i)
  }

  return res;

}
console.log(primesBeforeN(1000))