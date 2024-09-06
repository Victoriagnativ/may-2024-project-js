
// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання ,
// при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію
// про об'єкт на який клікнули
let container = document.createElement('div');
document.body.appendChild(container);
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    showInfoUsers(users);
}

function showInfoUsers(users) {
    for (const user of users) {
        let block = document.createElement('div');
        block.className = 'user';
        block.innerHTML = `
        <h3>id : ${user.id}</h3>
        <h3>name: ${user.name}</h3>
        <a href="user-details.html?id=${user.id}">Переглянути деталі</a>
        `
        container.appendChild(block);

    }
}
fetchUsers();
