const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/iecho', (req, res) => {
    const { text } = req.query;

    try {
        const reverseText = text.split('').reverse().join('');
        
        if(text.toLowerCase().split(' ').join('') === reverseText.toLowerCase().split(' ').join('')) {
            res.status(200).json({"text": reverseText, "palindrome": true});
        } else {
            res.status(200).json({"text": reverseText});
        }
                
    }
    catch {
        res.status(400).json({"error": "no text"});
    }
})

app.listen('3001')