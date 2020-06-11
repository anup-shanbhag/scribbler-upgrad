var likesCount = 0;
var commentsCount = 0;

// On page load, fetch post details from session storage and display it
document.getElementById('owner').innerText = sessionStorage.getItem('owner');
document.getElementById('title').innerText = sessionStorage.getItem('title');
document.getElementById('content').innerText = sessionStorage.getItem('content');
updateLikesOnPage();
updateCommentsOnPage()

// Display text in likes section based on the likes count
function updateLikesOnPage() {
    if (likesCount === 0) {
        document.getElementById('likes').innerText = 'Be the first one to like this!'
    }
    else {
        document.getElementById('likes').innerText = likesCount + ' people like this!'
    }

}

// Display comments on the page if available
function updateCommentsOnPage() {
    if (commentsCount === 0) {
        document.getElementById('comments').style.display = 'none';
    }
    else {
        document.getElementById('comments').style.display = 'block';
    }
}

// Update likes count on click on likes button
function likePost() {
    likesCount++;
    document.getElementById('btn-like').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked</i>';
    updateLikesOnPage();
}

// Add new comment to top, update comments count and display comments on page if available
function addComment(text) {
    if (text.value.trim()) {
        commentsCount++;
        updateCommentsOnPage();
        var comment = '<p class="comment text-justify" id="' + commentsCount + '">' + text.value + '</p>';
        document.getElementById('comments').innerHTML = comment + document.getElementById('comments').innerHTML;
    }
    text.value = '';
}

// Hide Edit button, display Save button and make post title & content editable
function editPost() {
    document.getElementById('btn-edit').style.display = 'none';
    document.getElementById('btn-save').style.display = 'block';
    var title = document.getElementById('title'), content = document.getElementById('content');
    title.contentEditable = true;
    content.contentEditable = true;
    title.classList.add('editable');
    content.classList.add('editable');
}

// Hide Save button, display Edit button and make post title & content read-only
function savePost() {
    document.getElementById('btn-edit').style.display = 'block';
    document.getElementById('btn-save').style.display = 'none';
    var title = document.getElementById('title'), content = document.getElementById('content');
    title.contentEditable = false;
    content.contentEditable = false;
    title.classList.remove('editable');
    content.classList.remove('editable');
}