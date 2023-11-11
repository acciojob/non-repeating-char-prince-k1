function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = str.split('');
let result = null;

for(let i = 1; i < arr.length-1; i++){
    if(arr[i] != arr[i+1] && arr[i] != arr[i-1]){
      result = arr[i];
      return arr[i];
    }
}
	if(arr[arr.length-1] != arr[arr.length-2]){
		return arr[arr.length-1];
	}
	return result;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
