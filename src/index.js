//modify your index.js file to generate a collection of 50 users (see faker.helpers.userCard() method)
const faker = require('faker');
//console.log(faker.helpers.userCard());


//fill array method 50
//let users = new Array(50).fill('').map((_) => faker.helpers.userCard());
let users = new Array(50).fill('').map((_) => faker.helpers.userCard());
console.log(users);


var element = document.getElementById("user-list");


const renderHTML = ()=> {
    const currentIdx =window.location.hash.slice(1)*1;



    const html = `${users.map((user, idx) => 
     `<li>
      <a href='#${idx}'> ${user.name} </a>
      ${
          currentIdx === idx ? `<div> Username: ${user.username} \n Email: ${user.email}</div>` : ''
      }
    </li>`
).join('') 
    }
`
element.innerHTML = html;    

};



(window.addEventListener('hashchange', ()=>{
     //currentIdx =window.location.hash.slice(1)*1;
    renderHTML();
}));

    renderHTML();


//reccommended to add window.addEventListener( 'hashchange', ()=> { renderHTML(); });
