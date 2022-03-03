const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const Msg = require('./models/messages');
const showdown = require('showdown');
const mongoDB = 'mongodb+srv://felipe:felipe123@cluster0.npf7f.mongodb.net/messages-realtime?retryWrites=true&w=majority'

const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URI || mongoDB).then(() => {
    console.log('mongo conectado')
}).catch(err => console.log(err));


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html')
})
let msg = ''

io.on('connection', socket => {
    console.log('socket conectado')

    Msg.find().then(result => {
        let conveter = new showdown.Converter()
        if(result.length){
            msg = result[result.length - 1].msg
            let texto = {
                markdow: '',
                texto_normal: msg
            }
            texto.markdow = conveter.makeHtml(msg)
            socket.emit('output-messages', texto)
        }else{
            console.log('fora banco')
            socket.emit('output-messages', msg)
        }
    });


    socket.on('sendMessage', data => {
        let conveter = new showdown.Converter()
        msg = data.message
        let texto = {
            markdow: '',
            texto_normal: msg,
        }
        texto.markdow = conveter.makeHtml(msg)
        const message = new Msg({msg: data.message});
        message.save().then(() => {
            socket.broadcast.emit('receiveMessage', texto)
            msg = ''
        }).catch(err => console.log(err));
    });

});

server.listen(port, ()=>{
    console.log(`Aplicação reodando em http://localhost:${port}`)
});
