var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var item = document.querySelectorAll('.item');

for(var i =0; i< lis.length; i++){
    lis[i].setAttribute('index',i);
    lis[i].onclick = function(){
        for (var i = 0; i<lis.length; i++){
            lis[i].className = '';
        }
        this.className='current';
        var index = this.getAttribute('index');
        console.log(index)
        for(var i =0 ; i<item.length; i++){
            item[i].style.display = 'none';
        }
        item[index].style.display = 'block';
        
    }
}