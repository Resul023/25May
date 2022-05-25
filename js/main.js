
let button = document.querySelector('#close');
let AddCard =document.querySelector('#add .row');
let buttonAdd = document.querySelector('.btn-add')
let sideBar = document.querySelector('.sidebar');
button.addEventListener('click',function(){
    console.log('salam');
    sideBar.classList.toggle('width');
})

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
                        
                        <a href="#" class="btn btn-primary">AddBasket</a>
                        </div>
                        </div>
                        </div>
                        `
                AddCard.innerHTML+=cards
                
                
                
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







