const Tweeter = function () {

    let postIdCounter = 2
    let commentIdCounter = 6

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = () => _posts

    const addPost = function (text) {

        postIdCounter = postIdCounter + 1
        _posts.push({ text: text, id: "p" + postIdCounter, comments: [] })
    }

    const addComment = function (text, postid) {
        commentIdCounter += 1
        for (let post of _posts) {
            if (post.id === postid) {
                post.comments.push({ id: "c" + commentIdCounter, text: text })
            }
        }
    }
    const removePost = function (postid) {
        for (let i = 0; i < _posts.length; i++) {

            if (_posts[i].id == postid) {
                _posts.splice(i, 1)
                postIdCounter = postIdCounter + 1
            }
        }
    }
    const removeComment = function (postid, cmid) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id == postid) {
                for (let j = 0; j < _posts[i].comments.length; j++) {
                    if (_posts[i].comments[j].id === cmid) {
                        _posts[i].comments.splice(j, 1)
                    }

                }


            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment,
    }
}

