function greet(name, callback){
    const greeting = "Hello "+ name
    callback(greeting)

}

function displayGreeting(message){
    console.log(message)
}

greet("Vishwa", displayGreeting)

/**
 * Callback hell | Pyramid of doom
 */


getUser(function(user){
    getPosts(user.id, function(post){
        displayUserInfoAndPost(user, posts, function(){
             console.log("User info and posts successfully displayed")
        })
    })
})
