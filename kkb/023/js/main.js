var wrap = document.querySelector('.wrap');

//创建主体
row = 0; //记录 行
col = 0; //记录 列
Html = '';//wrap内容

//使用循环语句创建100个div
for (var i = 0; i < 100; i++) {
    row = parseInt(i/10); 
    col = i%10; 

    Html += '<div  class="con" style="top:'+ row*60 +'px;left:'+ col*60 +'px;background-position:-'+ col*50 +'px -'+ row*50 +'px;"><div class="mask"></div></div>';
}

//将内容信息写入wrap中
wrap.innerHTML = Html;  

//鼠标移入改变遮罩颜色
var arr = document.querySelectorAll('.wrap .con')
var mask = document.querySelectorAll('.mask')
for (let i = 0; i < arr.length; i++) {
    arr[i].index = i; 
    arr[i].onmouseover = function(){
        
        mask[this.index].style.backgroundColor = 'rgba(98, 133, 95,0.0)';
    }
    
}
