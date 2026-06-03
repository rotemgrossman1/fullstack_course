function SongsManager(){
    let songs=[]
    const startLink = 'https://www.youtube.com/watch?v='
    function add(name, link){ 
        const endLink = link.slice(startLink.length)  
        let song = {
            name: name,
            endLink: endLink
        }
        songs.push(song)
    }
    function get(name){
        return startLink + songs.find(song=>song.name === name).endLink //chaining the startLink with the endLink to get the full link of the song, and using find to get the song object from the songs array by its name
    }
    return{
        addSong: function(name, link){
            add(name, link)
        },
        getSong: function(name){
            return get(name)
        }
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
