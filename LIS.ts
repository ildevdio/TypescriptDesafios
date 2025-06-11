function LongestIncreasingSequence(arr: number[]):number { 
  if(arr.length === 0) return 0;

  const numbers: number = arr.length;
  const dp : number[] = new

  Array(numbers).fill(1); 
    for(let i: number = 1; i < numbers; i++){

      for(let j: number=0; j < i; j++){

        if(arr[i] > arr[j]){
          dp[i] = Math.max(dp[i], dp[j]+1);

        }
      }
    }



  return Math.max(...dp);
}

const inputArray: number[] = [4, 3, 5, 1, 6]
console.log(LongestIncreasingSequence(inputArray));