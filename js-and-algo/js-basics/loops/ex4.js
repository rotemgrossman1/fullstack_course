const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

const givenPost = 2;
const givenComment = 3;
for(let post of posts){
    if(post['id'] === givenPost){
        for(let comment of post.comments){
            if(comment['id'] == givenComment){
                post.comments.splice(comment['id']-1,1);
            }
        }
    }
}
