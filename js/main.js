
let button = document.querySelector('#close');
let AddCard =document.querySelector('#add .row');
let buttonAdd = document.querySelector('.btn-add')
let sideBar = document.querySelector('.sidebar');
button.addEventListener('click',function(){
    sideBar.classList.toggle('width');
})

function product(id,title,count) {
    this.Id = id;
    this.Title = title;
    this.Count = count;
}


let userId=1;
loadUser(userId);

buttonAdd.addEventListener('click',function(){
    userId ++;
    loadUser(userId);
})

function loadUser(userId){
    
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response=>response.json())
        
        .then(data=>{
            data.forEach(ele => {
                
                
                let cards = `
                        <div class="col-md-4">
                        <div class="card" style="width: 18rem;" data-id="${ele.id}">
                        <div class="card-body">
                        <h5 class="card-title">${ele.userId}</h5>
                        <p class="card-text">${ele.id}</p>
                        <p class="card-text text-title">${ele.title}</p>
                        <a href="#" class="btn btn-primary btnPro" data-id="${ele.id}">AddBasket</a>
                        </div>
                        </div>
                        </div>
                        `
                AddCard.innerHTML+=cards

                
            });
            
        })
        .then(()=>{
            let btn = document.querySelectorAll('.btnPro')
            btn.forEach(ele => {
                ele.addEventListener('click',function(e){
                    e.preventDefault();
                let btnId = ele.getAttribute('data-id')
             
                ele.parentNode.childNodes.forEach(x=>{
                    if(x.classList == 'card-text text-title'){
                        

                        let basketStr = localStorage.getItem('basket')
                        let basket;
        
                        if(basketStr){
                            basket= JSON.parse(basketStr)
                        }
        
                        else{
                            basket = [];
                        }
        
                        let check = basket.find(x=>x.Id==btnId)
                        
                        if(check){
                            check.Count++;
                        }
                        else{
                            check = new product(btnId,x.innerText,1)
                            basket.push(check)

                        }
                       
                        localStorage.setItem('basket',JSON.stringify(basket))
                        
                        let bookCount = document.querySelector('.count')
                        bookCount.innerText = basket.length
                        // let li = document.createElement('li')
                        // li.classList.add('list-group-item')
                        // li.innerText =`id:${btnId} txt:${x.innerText}`

                        // document.querySelector('.list-add').appendChild(li)
                        // let deletes = document.createElement('span')
                        // deletes.style.cursor='pointer';
                        // deletes.classList.add('del')
                        // deletes.innerText='X';
                        // li.appendChild(deletes)

                        // deletes.addEventListener('click',function() {
                        //    li.remove();
                        //    let eleId = basket.indexOf(check)
                        //    basket.splice(eleId,1)
                        //    localStorage.setItem('basket',JSON.stringify(basket))
                            
                        // })
                    }
                    
                })

               
                })
            });
        })
        
        
    
        
 
}


// function className(){
//     let cards = document.getElementsByClassName('card')
//     cards.forEach(card => {
//         console.log(card)
//     });
// }
// loadUser().then(x=>className())    

let cards = document.getElementsByClassName('card')







