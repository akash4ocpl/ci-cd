const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
    const data = {
        id: 1,
        name: 'Sample Data',
        description: 'This is a sample data from the API'
    };
    res.json(data);
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
    res.json(users);
});
app.get('/api/new/data',(req,res)=>{
    res.json({"message":"working"});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
