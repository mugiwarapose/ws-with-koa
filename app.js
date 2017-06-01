const Koa = require('koa');

const ws = require('ws');

const url = require('url');

const Cookies = require('cookies')

const WebSocketServer =  ws.WebSocketServer;


const app = new Koa();

//log 
app.use(async(ctx,next)=>{

    console.log(`Process ${ctx.request.method} ${ctx.request.url} ..${ctx.request.path}....`);
    await next();

});



app.listen(3000);