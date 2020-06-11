var postToDelete;
function prepareToDelete(id) {
    postToDelete = document.getElementById(id);
}

function deletePost() {
    postToDelete.remove();
    postToDelete = '';
}

function getPost(id) {
    sessionStorage.setItem("owner", document.getElementById(id).querySelector('.post-owner > p').innerText);
    sessionStorage.setItem('title', document.getElementById(id).querySelector('.title-text').innerText);
    sessionStorage.setItem('content', document.getElementById(id).querySelector('.card-text').innerText);
    window.location.href = './post.html';
}