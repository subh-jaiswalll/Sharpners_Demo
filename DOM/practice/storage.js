


//  class first



// function handleFormSubmit(event){
//     event.preventDefault();

//     const username = event.target.username.value;
//     const email = event.target.email.value;
//     const phone = event.target.phone.value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phone', phone);
//     console.log(username)


// }



// function handleFormSubmit(event) {
//     event.preventDefault();

//     const username = event.target.username.value;

//     const email = event.target.email.value;

//     const phone = event.target.phone.value;

//     localStorage.setItem(email, `${username} - ${email} - ${phone}`);

//     const ul = document.querySelector('ul');

//     const li = document.createElement('li');

//     li.textContent = `${username} - ${email} - ${phone}`;

//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'Delete';

//     deleteBtn.className = 'delete-btn';

//     deleteBtn.onclick = function () {
//         localStorage.removeItem(email);

//         ul.removeChild(li);
//     };

//     li.appendChild(deleteBtn);

//     ul.appendChild(li);
//     username.value = '';

// }

// window.handleFormSubmit = handleFormSubmit;


// Day 3


function handleFormSubmit(event){
    event.preventDefault();

    const username = event.target.username.value;

    const email = event.target.email.value;

    const phone = event.target.phone.value;

    const obj = {
        username,
        email,
        phone
    }

    const objString = JSON.stringify(obj);

    localStorage.setItem(email, objString);

    displayUser(obj);
}

function displayUser(obj){

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;

    ul.appendChild(li);
}

function name(params) {
    params.preventDefault();

    let value = "Th"
}