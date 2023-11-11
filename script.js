function firstNonRepeatedChar(str) {
 // Write your code here
let arr = str.split('');
      
   
        for(let i = 0; i < arr.length; i++){
            let sum = 0;
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] == arr[j]){
                    sum++;
                }
            }
            if(sum == 0){
                return arr[i];
            }
        }
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
