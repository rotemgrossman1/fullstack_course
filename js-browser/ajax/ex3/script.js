const fetch = function (queryType, queryValue) {
    let url =""
    
    if(queryType==="isbn"){
        url = `https://openlibrary.org/api/books?bibkeys=ISBN:${queryValue}&format=json&jscmd=data`;
    }else if(queryType==="title"){
        url = `https://openlibrary.org/search.json?title=${encodeURIComponent(queryValue)}`;
    }

    $.ajax({
        method: "GET",
        url: url,
         success: function (data) {
            if(!data.items||data.items.length===0){
                console.log(`data.items for ${queryType}: "${queryValue}" is: ${data.items}`);
                console.log(`No books found for ${queryType}: "${queryValue}"`);
                return
            }
            data.items.forEach(function (item) {
                const info = item.volumeInfo;

                const title = info.title || "No title available";
                const author = info.authors ? info.authors[0] : "Unknown Author";
                const isbn = info.industryIdentifiers
                    ? info.industryIdentifiers.find(id => id.type === "ISBN_13")?.identifier || "No ISBN found"
                    : "No ISBN found";

                console.log(`Title: "${title}" | Author: ${author} | ISBN: ${isbn}`);
            });
        },
        error: function (xhr, text, error) {
            console.log("Error details:", text);
        }
    });
};
fetch("title", "The Wise Man's Fear");
fetch("isbn", 9789814561778);   // From Third World to First: The Singapore Story
fetch("title", "How to Win Friends and Influence People");
