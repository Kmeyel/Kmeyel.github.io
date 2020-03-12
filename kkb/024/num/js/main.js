var arr = [
    "100px",
    "abc" - 6,
    [],
    -98765,
    34,
    -2,
    0,
    "300",
    ,
    function() {
        alert(1);
    },
    null,
    document,
    [],
    true,
    "200px" - 30,
    "23.45元",
    5,
    Number("abc"),
    function() {
        alert(3);
    },
    "xyz" - 90
];
    // console.log(arr);

var num1 = [];
var num2 = [];
var maxNum = -Infinity;
var num3 = [];

//筛选所有的数字，筛选可转化为数字的，对比出最大值，记录NaN的位置。
for(var i=0;i<arr.length;i++){
    if(typeof(arr[i]) === 'number'&& !(isNaN(arr[i]))){
        // console.log('条件成立');
        num1.push(arr[i]);
        console.log(num1);
    }
    if(!(isNaN(parseFloat(arr[i])))){
        num2.push(arr[i]);

        if(arr[i]>maxNum){
            maxNum = arr[i];
        }
    }
    if(typeof(arr[i]) === 'number'&& isNaN(parseFloat(arr[i]))){
        num3.push(i);
    }
    
}



//将筛选结果写入html
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');
var p4 = document.querySelector('#p4');
var btn = document.querySelector('.btn');

var onOff = true; //开关
function fn(){
    p1.innerHTML = '所有的数字：';
    p2.innerHTML = '可以转成数字的：';
    p3.innerHTML = '最大值为：';
    p4.innerHTML = 'NaN的位置是：';
}
//输出结果
fn();

btn.onclick = function(){
    // console.log(p1)
    if (onOff) {
        p1.innerHTML += String(num1);
        p2.innerHTML += String(num2);
        p3.innerHTML += String(maxNum);
        p4.innerHTML += String(num3);
    }else{
        fn();
    }
    onOff = !onOff;
    
}