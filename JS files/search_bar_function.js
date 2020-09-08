var input = document.querySelector('input');
var flag = 0;
input.onfocus = function(){
    if(this.value === 'Alabama'){
        this.value ='';
    }
    this.style.color='#333';
}

input.onblur = function(){
    if(this.value === ''){
        this.value ='Alabama'
    }
    this.style.color = '#999';
}

