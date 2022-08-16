const express = require('express')
const path = require('path');
const app = express()
const port = 3000
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/study', (req,res) =>{
    res.render('study.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})