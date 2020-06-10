var postToDelete;
function prepareToDelete(id) {
    postToDelete = document.getElementById(id);
}

function deletePost() {
    postToDelete.remove();
    postToDelete = '';
}

