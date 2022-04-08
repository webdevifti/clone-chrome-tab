function showItems(){
    var dropdown_item = document.getElementById('menuItems');
    if(dropdown_item.style.visibility == 'visible'){
        dropdown_item.style.visibility = 'hidden';
    }else{
        dropdown_item.style.visibility = 'visible';
    }
}