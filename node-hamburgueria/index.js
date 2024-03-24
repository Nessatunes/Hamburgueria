const express = require("express"); // importando o express
const uuid = require("uuid"); // bibiloteca de id
const cors = require('cors');

const app = express(); /*armazena o express em uma variavel, toda
 vez que precisar chamar o express chama app */
app.use(express.json()); /* padrao pra avisar o express que vai usar o 
json sempre tem que esta em cima das rotas*/
app.use(cors())//permissão para o front

// variavel para a porta que esta rodando
const port = 3001;

const newOrder = [];

/* middleware interceptador tem poder de parar ou alterar dados da requisição */
// Middleware para verificar se o ID existe
const checkIdExist = (request, response, next) => {
    const { id } = request.params;

    // Verificar se o ID existe 
    const foundOrder = newOrder.find(order => order.id === id);
    // Se o pedido não for encontrado, retorne um erro
    if (!foundOrder) {
        return response.status(404).json({ message: "Order not found" });
    }
    // Se o pedido for encontrado, permita que a requisição continue normalmente
    next();
};
// Aplicar o middleware em todas as rotas que recebem o parâmetro ID
app.use("/order/:id", checkIdExist);

const logRequest = (request, response, next) => {
    // Registra o método da requisição e a URL
    console.log(`Método: ${request.method}, URL: ${request.originalUrl}`);    
    // Chama a próxima função middleware na pilha
    next();
};
// Aplica o middleware em todas as requisições
app.use(logRequest);

app.post("/order", (request, response) => {
  const { order, clientName, price, status } = request.body;

  const addOrder = { id: uuid.v4(), order, clientName, price, status:"Em Preparação" };

  newOrder.push(addOrder);
  return response.status(201).json(addOrder);
});

app.get("/order", (request, response) => {
    return response.json(newOrder);
});

app.put("/order/:id",(request, response) => {
    const {id} = request.params
    const { 
        order, 
        clientName,
         price,
         status} = request.body;
    
    const updatedOrder = { id, order, clientName, price, status };

    const index = newOrder.findIndex(order => order.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "order not foud" })};

    newOrder[index] = updatedOrder;
  
    return response.json(updatedOrder);
});

app.delete("/order/:id", (request, response) => {
    const {id} = request.params
    const index = newOrder.findIndex(order => order.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "order not foud" })};

        newOrder.splice(index,1)

    return response.status(204).json();
});

app.get("/order/:id", (request, response) => {
    const { id } = request.params;

    // Encontre o pedido com o ID fornecido
    const foundOrder = newOrder.find(order => order.id === id);

    // Verifique se o pedido foi encontrado
    if (!foundOrder) {
        return response.status(404).json({ message: "Order not found" });
    }

    // Se o pedido foi encontrado, retorne-o
    return response.status(200).json(foundOrder);
});

app.patch("/order/:id",(request, response) => {
    const {id} = request.params
    const { order, clientName, price, status } = request.body;
    
    const updatedOrder = { id, order, clientName, price, status: "Pronto" };

    const index = newOrder.findIndex(order => order.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "order not foud" })};    

    newOrder[index] = updatedOrder;
  
    return response.status(200).json(updatedOrder);
});
  

/*app.listen(3001) porta que esta rodando*/
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
