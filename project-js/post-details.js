function getUserIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}


async function fetchPostDetails(postId){
    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/'+ postId);
    const post = await response1.json();
    const response2 = await fetch('https://jsonplaceholder.typicode.com/comments?postId='+ postId);
    const comments = await response2.json();
    // console.log(post);
    // console.log(comments);
    showInfoPost(post);
    showInfoComments(comments);
}
function showInfoPost(post){
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText ='Information about post';
    h3.style.textAlign ='center';
    div.appendChild(h3);
    for (const key in post) {
        const p =  document.createElement('div');
            p.innerHTML= `
            <p><strong>${key} :</strong> ${post[key]}</p>`
        div.appendChild(p);
        document.body.appendChild(div);
    }
    div.style.border ='1px solid #ddd';
    div.style.background ='#f9f9f9';
    div.style.padding ='10px';

}
function showInfoComments(comments){
   let wrap = document.createElement('div');
   const h3 = document.createElement('h3');
   h3.innerText ='Comments';
   h3.style.textAlign ='center';
   wrap.appendChild(h3);
    for (const comment of comments) {
        const div =  document.createElement('div');
        for (const key in comment) {
            const p = document.createElement('div');
            p.innerHTML= `<p><strong>${key}  </strong> :  ${comment[key]}</p>`;
            div.appendChild(p);
        }
        div.style.border ='1px solid #ddd';
        div.style.background ='#f9f9f9';
        div.style.padding ='10px';
        div.style.marginBottom ='10px';


        wrap.appendChild(div);
        }

    document.body.appendChild(wrap);

}

const postId = getUserIdFromUrl();
fetchPostDetails(postId);