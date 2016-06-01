var new_arr = process.argv;
var sum = 0;  
	for(i=2; i<new_arr.length; i++){
		sum += +new_arr[i];
	}

console.log(sum);
