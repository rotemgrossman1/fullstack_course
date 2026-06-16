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
            if (queryType === "isbn") {
                const bookKey = `ISBN:${queryValue}`;

                if (data[bookKey]) {
                    const book = data[bookKey];
                    const title = book.title;
                    const author = book.authors[0].name;
                    console.log(`Book Found: "${title}" by ${author}`);
                } else {
                    console.log(`No book found for ISBN: ${queryValue}`);
                }

            } else if (queryType === "title") {
                if (data.docs && data.docs.length > 0) {
                    const book = data.docs[0];
                    const title = book.title;
                    const author = book.author_name ? book.author_name[0] : "Unknown Author";
                    console.log(`Book Found: "${title}" by ${author}`);
                } else {
                    console.log(`No book found for title: "${queryValue}"`);
                }
            }
        },
        error: function (xhr, text, error) {
            console.log("Error details:", text);
        }
    });
};
fetch("title", "The Wise Man's Fear");
fetch("isbn", 9789814561778);   // From Third World to First: The Singapore Story
fetch("title", "How to Win Friends and Influence People");

// Test Case 1: Searching by title
//fetch("title", "The Wise Man's Fears"); 

// Test Case 2: Searching by isbn
//fetch("isbn", 9789814561778); 

// Test Case 3: Searching another title
//fetch("title", "How to Win Friends and Influence People");