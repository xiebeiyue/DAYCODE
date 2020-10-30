var arr = ['a','b','c','d','e','f'];
for(let i = 0;i<arr.length;i++){
	console.log(i+":"+arr[i]);
}
console.log("-------------------");
for( let i in arr){
	console.log(i + ":" + arr[i]);
}
console.log('---------------------');
let index = 0;
for(let item of arr){
	console.log(index++ + ":"+ item);
}
console.log('-------------------');
arr.forEach((v,k)=>{console.log(k + ":" + v)})

let ary = [12,34,56,78,9,1];
let res  = ary.map((item,index,input)=>{return item * 10});
console.log(res);



var m  = new Map();
var s = new Set();
alert('浏览器支持Map和Set');