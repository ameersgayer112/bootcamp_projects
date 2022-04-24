
const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      let AddPost =
        `<div  class="post post-text" id=${post.id} >
             <h2 > ${post.text} </h2>
             <span id="ContrlerPost">
              <input type="text" placeholder="Comment" id="input">
              <button class="comments">Comment</button> 
              <span class="delete">Delete Post</span>
             </span>
           </div>`;
      $("#posts").append(AddPost);

      for (let i = 0; i < post.comments.length; i++) {
        let AddComment = `<div>
                                    <span  id=${post.comments[i].id}>  ${post.comments[i].text} </span>
                                    <span class="delete-comment">X</span>
                                </div>`;
        $(`#${post.id}`).append(AddComment);
      }
    }
  };
  return {
    renderPosts
  };
};