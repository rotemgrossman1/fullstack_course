const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
        success: function (data) {
            // 1. Create the dynamic key string (e.g., "ISBN:9780575087057")
            const bookKey = `ISBN:${isbn}`;
            
            // 2. Check if the API actually found a book for this ISBN
            if (data[bookKey]) {
                const book = data[bookKey]; // This targets the inner book object
                
                // 3. Grab the title and the primary author's name
                const title = book.title;
                const author = book.authors[0].name; 
                
                console.log(`Book Found: "${title}" by ${author}`);
            } else {
                console.log(`No book details found for ISBN: ${isbn}`);
            }
        },
        error: function (xhr, text, error) {
            console.log("Error details:", text);
        }
    });
};

// Exercise 1 Test Cases

fetch(9780575087057); // Expected: Name of the Wind (The best book!)
fetch(9782806269171); // Expected: The Little Prince: Book Analysis
fetch(1440633908);   // Expected: Of Mice and Men by John Steinbeck
fetch(9781945048470); // Expected: The Alchemist by Paulo Coelho
fetch(9780307417138); // Expected: Hitchhiker's Guide to the Galaxy