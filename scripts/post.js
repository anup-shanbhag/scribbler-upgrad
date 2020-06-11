var likesCount = 0;
var commentsCount = 0;
document.getElementById('owner').innerText = sessionStorage.getItem('owner');
document.getElementById('title').innerText = sessionStorage.getItem('title');
document.getElementById('content').innerText = sessionStorage.getItem('content');
updateLikesOnPage();

function updateLikesOnPage() {
    if (likesCount === 0) {
        document.getElementById('likes').innerText = 'Be the first one to like this!'
    }
    else {
        document.getElementById('likes').innerText = likesCount + ' people like this!'
    }

}

function likePost() {
    likesCount++;
    document.getElementById('btn-like').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked</i>';
    updateLikesOnPage();
}

function addComment(text) {
    if (text.value.trim()) {
        commentsCount++;
        if (commentsCount === 0) {
            document.getElementById('comments').style.display = 'none';
        }
        else {
            document.getElementById('comments').style.display = 'block';
        }
        var comment = '<p class="comment text-justify" id="' + commentsCount + '">' + text.value + '</p>';
        document.getElementById('comments').innerHTML = comment + document.getElementById('comments').innerHTML;
    }
    text.value = '';
}
function editPost() {
    document.getElementById('btn-edit').style.display = 'none';
    document.getElementById('btn-save').style.display = 'block';
    var title = document.getElementById('title'), content = document.getElementById('content');
    title.contentEditable = true;
    content.contentEditable = true;
    title.classList.add('editable');
    content.classList.add('editable');
}

function savePost() {
    document.getElementById('btn-edit').style.display = 'block';
    document.getElementById('btn-save').style.display = 'none';
    var title = document.getElementById('title'), content = document.getElementById('content');
    title.contentEditable = false;
    content.contentEditable = false;
    title.classList.remove('editable');
    content.classList.remove('editable');
}