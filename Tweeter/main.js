const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function () {
    let inputValue = $("#input").val();
    tweeter.addPost(inputValue);
    renderer.renderPosts(tweeter.getPosts());
    $("#input").val() = "";
};


$('#posts').on('click', '.comments', function () {
    let postid = $(this).closest('.post').attr('id')
    let inputValue = $(this).closest(".post").find("#input").val()
    tweeter.addComment(inputValue, postid)
    renderer.renderPosts(tweeter.getPosts());
    $(this).closest(".post").find("#input").val() = "";
})


$('#posts').on('click', '.delete', function () {
    let postid = $(this).closest('.post').attr('id')
    tweeter.removePost(postid)
    renderer.renderPosts(tweeter.getPosts());
}
);

$('#posts').on('click', '.delete-comment', function () {
    let postid = $(this).closest('.post').attr('id')
    let cmid = $(this).closest('div').find('span').attr('id')
    tweeter.removeComment(postid, cmid)
    renderer.renderPosts(tweeter.getPosts());

})



