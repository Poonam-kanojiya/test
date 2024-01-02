let sum =0;
// let arr = [10,20,30,40,50];
let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.length);
let arrlen = arr.length
for (let i=0; i<=arr.length; i++){
   console.log(arr[i]);
   sum=sum+ arr[i];
   console.log(`inside loop ${sum}`);  
}

console.log(`Outside loop ${sum}`);