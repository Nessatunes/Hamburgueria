import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Burguer2 from "../../assets/burger2.svg";
import Trash from "../../assets/trash.svg";
import {
  Container,
  ContainerItens,
  H1,
  Image, 
  Button,
  AddOrder,
  ContaineList
} from "./styles";

function App() {
 
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    async function fetchOrder(){
      const{data: newOrder} = await axios.get("http://localhost:3001/order")

    setOrder(newOrder); 
    }
    fetchOrder()  
    
  }, [])
   

  async function deletePedido(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrder = order.filter((order) => order.id !== orderId);
    setOrder(newOrder);
  }
  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="img burguer" src={Burguer2} />
      <ContainerItens>
        <H1>Pedidos!</H1>

        <ul>
          {order.map((user) => (
            <AddOrder key={user.id}>
            <ContaineList>
              <p>{user.order} </p>
              <p>{user.clientName}</p> 
              <p>{user.status}</p> 
             </ContaineList>             
              <button onClick={() => deletePedido(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </AddOrder>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}
export default App;
