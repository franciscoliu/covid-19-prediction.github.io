// var trs = document.querySelector('tbody').querySelectorAll('tr');
var trs = document.getElementById('j_tb').querySelectorAll('tr');
for(var i =0; i<=trs.length; i++){
    trs[i].onmouseover = function(){
        this.className='bg';
    }
    trs[i].onmouseout = function(){
        this.className ='';
    }
}