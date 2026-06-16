const button = document.querySelector("#generateGif")


const embededUrl = button.addEventListener("click",()=>{
     const prompt = document.querySelector("#gifInput").value
    $.ajax({
        method: "GET",
            url: `https://api.giphy.com/v1/gifs/search?api_key=1VKQiitcekQDrJVlbFZUa3TXPuUa5aF7&q=${prompt}&limit=1`,
            success: function (data) {
                const embedeUrl = data.data[0].embed_url
                return embedeUrl
            },
            error: function (xhr, text, error) {
                console.log("Error details:", text);
            }
    })
})


button.addEventListener("click",()=>{
const prompt = document.querySelector("#gifInput").value
$.ajax({
    method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=1VKQiitcekQDrJVlbFZUa3TXPuUa5aF7&q=${prompt}&limit=1`,
        success: function (data) {
            const embedeUrl = data.data[0].embed_url
            const iframe = document.querySelector("#iframe_placement")
            iframe.src = embedeUrl
        },
        error: function (xhr, text, error) {
            console.log("Error details:", text);
            
        }
    })
})

