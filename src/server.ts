import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello world' });
});
app.listen(5500, () => console.log('Server Running'));
