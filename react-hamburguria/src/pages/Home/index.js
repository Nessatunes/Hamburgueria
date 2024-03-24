import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ContainerItens} from "./styles";
import Burguer1 from "../../assets/burger1.svg";

import {
  Container,
   H1,
  Image,
  Label,
  Input,
  Button,
 
} from "./styles";

function App() {

  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputClientName = useRef();
 

  async function addNewOrder() {
    const{data: newOrder} = await axios.post("http://localhost:3001/order",
     {order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });
    setOrder([...order, newOrder]); 
    navigate('./Order');
  }

  return (
    <Container>
      <Image alt="img burguer" src={Burguer1} />
      <ContainerItens>
        <H1>Faça seu Pedido!</H1>
        <Label>Pedido</Label>
        <Input ref={inputOrder} placeholder="Pedido" />

        <Label>Nome do Cliente</Label>
        <Input ref={inputClientName} placeholder="Nome do Cliente" />

        <Button onClick={addNewOrder}>Enviar Pedido</Button>
        </ContainerItens>
    </Container>
  );
}

export default App;
