var postToDelete;

// Set post id to be deleted after user's confirmation
function prepareToDelete(id) {
    postToDelete = document.getElementById(id);
}

// Delete post from available posts
function deletePost() {
    postToDelete.remove();
    postToDelete = '';
}

// Fetch post details, add it to session storage and redirect to post details page
function getPost(id) {
    sessionStorage.setItem("owner", document.getElementById(id).querySelector('.post-owner > p').innerText);
    sessionStorage.setItem('title', document.getElementById(id).querySelector('.title-text').innerText);
    sessionStorage.setItem('content', document.getElementById(id).querySelector('.card-text').innerText);
    window.location.href = './post.html';
}