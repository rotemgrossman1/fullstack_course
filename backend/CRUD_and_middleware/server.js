const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body data
app.use(express.json());

// Exercise 1: Sanity Route
app.get('/sanity', (req, res) => {
    res.send('Server is up and running');
});
// Global in-memory storage for word counts
const wordCounter = {};

// Exercise 2: GET route to check count of a specific word
app.get('/word/:word', (req, res) => {
    const word = req.params.word;
    
    // Check if the word exists as a key in wordCounter
    if (wordCounter[word] !== undefined) {
        res.send({ count: wordCounter[word] });
    } else {
        res.send({ count: 0 });
    }
});

// Exercise 3: POST route to add or increment a single word
app.post('/word', (req, res) => {
    const { word } = req.body;

    if (!word) {
        return res.status(400).send({ error: 'Word is required in body' });
    }

    // If word exists, increment count; otherwise initialize to 1
    if (wordCounter[word]) {
        wordCounter[word]++;
    } else {
        wordCounter[word] = 1;
    }

    res.send({
        text: `Added ${word}`,
        currentCount: wordCounter[word]
    });
});
// Exercise 4: POST route to process a sentence
app.post('/sentence', (req, res) => {
    const { sentence } = req.body;

    if (!sentence) {
        return res.status(400).send({ error: 'Sentence is required in body' });
    }

    // Split sentence into words by space
    const words = sentence.split(' ');
    let numNewWords = 0;
    let numOldWords = 0;

    words.forEach(word => {
        if (wordCounter[word]) {
            // Already seen this word
            wordCounter[word]++;
            numOldWords++;
        } else {
            // New word
            wordCounter[word] = 1;
            numNewWords++;
        }
    });

    res.send({
        text: `Added ${numNewWords} words, ${numOldWords} already existed`,
        currentCount: -1
    });
});
// Exercise 5: DELETE route to remove a word
app.delete('/word/:word', (req, res) => {
    const { word } = req.params;

    // Check if word exists in our object
    if (wordCounter[word] !== undefined) {
        delete wordCounter[word];
        res.status(200).send({
            message: `Successfully deleted '${word}' from word counter`
        });
    } else {
        // Return 404 Not Found if word isn't in memory
        res.status(404).send({
            error: `Cannot delete '${word}' because it does not exist`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});