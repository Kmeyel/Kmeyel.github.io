//获取输入框、按钮、validate
var text = document.querySelectorAll('input')[0];
var button = document.querySelectorAll('input')[1];
var validate = document.querySelector('.validate');
var validate = document.querySelector('.validate');
var txt = document.querySelector('.validate .text');

// console.log(text,button,validate);

button.onclick = function(){
    var val = text.value;
    validate.style.display = 'block';
    if(val == ''){
        txt.innerHTML = '请输入内容';
    }else if(isNaN(val)){
        txt.innerHTML = '请输入数字';
    }else if(val[0] === '0'){
        txt.innerHTML = '首字母不能为0';
    }else if(String(parseInt(val)) != val){
        txt.innerHTML = '不能输入小数';
    }else if(val.length < 5 || val.length > 10){
        txt.innerHTML = '请输入5~10数字';
    }else{
        txt.innerHTML = '验证通过!';
        // setTimeout(function(){
        //     validate.style.display = 'none';
        // },1000); 
    }
    setTimeout(function(){
        validate.style.display = 'none';
    },1000);
}