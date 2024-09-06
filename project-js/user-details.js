function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

let container = document.createElement('div');
let buttonTitle = document.createElement('button');
let containerBtn = document.createElement('div');

buttonTitle.className = 'btn';
container.className = 'div-btn';
buttonTitle.innerText= 'post of current user';
buttonTitle.style.marginLeft= '450px';

document.body.appendChild(container);
document.body.appendChild(containerBtn);
containerBtn.appendChild(buttonTitle);
async function fetchUserDetails(userId){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+ userId);
    const user = await response.json();
    console.log(user);
    showInfoUsers(user);

}
function showInfoUsers(user) {
    for (const userElem in user) {
        const p =  document.createElement('p');
        p.innerText = userElem + ': ';
        if( typeof user[userElem]=== 'object' && user[userElem] !== null){
            const ul =  document.createElement('ul');
            ul.className = 'user';
            for (const item in user[userElem]) {
                const p1 =  document.createElement('p');
                p1.innerText = item  + ': ';
                const li =  document.createElement('li');
                if(typeof user[userElem][item]=== 'object' && user[userElem][item] !== null){
                    const  ul1 =  document.createElement('ul');
                    for (const key in user[userElem][item]) {
                        // console.log(key);
                        const li1 =  document.createElement('li');
                        li1.innerText = `
                       ${key }:  ${user[userElem][item][key]}`;
                        ul1.appendChild(li1);
                        ul.appendChild(p1);
                        ul.appendChild(ul1);


                    }
                }else{

                li.innerText = `
                ${item}:${user[userElem][item]}`;
                ul.appendChild(li);
                container.appendChild(p);
                container.appendChild(ul);}
            }
         }else{
            let block = document.createElement('div');
             block.innerText = `
             ${userElem}:${user[userElem]}`
             container.appendChild(block);
    }

    }

}
const userId = getUserIdFromUrl();

fetchUserDetails(userId);

buttonTitle.addEventListener('click', function () {
    fetchPostTitle(userId);
    console.log('click',userId);

});
async function fetchPostTitle(userId){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+ userId);
    const user = await response.json();
    console.log(user);
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+ user.id);
    const posts = await response2.json();
    console.log(posts);
    showTitle(posts);
}


function showTitle(posts){
const div = document.createElement('div');
    // ol.innerHTML = '';
    for (const post of posts) {
        console.log(post);
        const p =  document.createElement('div');
        for (const key in post) {
            console.log(post.id);
            p.innerHTML= `
            <p><strong>Title:</strong> ${post.title}</p>
            <button onclick="window.location.href='post-details.html?id=${post.id}'" >View Post Details</button>`

        }

        div.appendChild(p);
        div.style.display= 'flex';

        div.style.justifyContent= 'center';
        div.style.flexWrap= 'wrap';
        p.style.width= '220px';
        p.style.height= '120px';
        p.style.border= '1px solid grey';
        p.style.display= 'flex';
        p.style.flexDirection= 'column';
        p.style.justifyContent= 'end';
        p.style.alignItems= 'center';

        document.body.appendChild(div);
    }

}
