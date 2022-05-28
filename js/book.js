let basketStr = localStorage.getItem('basket')
let basket;


if(basketStr){
    basket= JSON.parse(basketStr)
}

else{
    basket = [];
}



basket.forEach(ele => {
    let list = document.querySelector('.list-add')
    let li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = `id:${ele.Id} title:${ele.Title}`

    list.appendChild(li)
    let deletes = document.createElement('span')
    deletes.style.cursor='pointer';
    deletes.style.margin= '15px'
    deletes.classList.add('del')
    deletes.innerText='X';
    li.appendChild(deletes)
    
    deletes.addEventListener('click',function(){
        li.remove();
        let eleId = basket.indexOf(ele.Id)
        basket.splice(eleId,1)
        localStorage.setItem('basket',JSON.stringify(basket))
    })
});

 