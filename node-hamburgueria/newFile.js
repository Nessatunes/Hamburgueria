const { app, port } = require('.');

// cria uma variavel port, quando precisa mudar não precisa procurar em todo o cod, muda só aqui
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
