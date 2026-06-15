let posts =[{
    name: 'yossi hahomo',
    text: 'i am so fucking gay i came out of the closet'
},
{
    name: 'mike',
    text: 'thats ok yossi we love you, but are you sure you are just gay?'
}]

const render = function(){
     container.innerHTML =""
    for(let post of posts){
       
        let postElement = document.createElement("div")
        let postName = document.createElement("h3")
        let postContent = document.createElement("div")
        postName.innerHTML = `${post.name}`
        postContent.innerHTML = `${post.text}`
        postElement.appendChild(postName)
        postElement.appendChild(postContent)
        const container = document.getElementById("container");
        container.appendChild(postElement)
    }
}

const pressSubmit = function(){
    const name = document.getElementById('input-name').value
    const text = document.getElementById('input-text').value
    const post = {name, text}
    posts.push(post)
    render()
}