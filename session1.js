/*have a good day :Ownn:
 /HomeWork: Write a JavaScript program that  sorts the items of an array.
Array Input :
arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Output : 
-4,-3,1,2,3,5,6,7,8  */
var arr=[-3,8,7,6,5,-4,3,2,1];
//decroissant 
function sortitems(arr){
    var x;
    for(let i=0 ;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]<arr[j]){
                //permutation
                x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
            }
        }
    }
    return arr;
}
//croissant
function sortitems2(arr){
    var x;
    for(let i=0 ;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]>arr[j]){
                //permutation
                x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
            }
        }
    }
    return arr;
}

//display
console.log("l ordre decroissant de ce tableau est ");
arr=sortitems(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("l ordre croissant de ce tableau est ");
arr=sortitems2(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
