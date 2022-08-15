const server = require('server');
const { get, post } = server.router;
const { render, redirect } = server.reply;

server(
  get('/', () => render('index.html')),
  post('/', ctx => {
    console.log(ctx.data);
    return redirect('/');
  })
);