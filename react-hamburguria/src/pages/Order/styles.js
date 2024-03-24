import styled from 'styled-components';
import background from '../../assets/bg.svg';


export const Container = styled.div`
background: url("${background}") center;
background-size: cover;
display: flex;
align-items: center;
width: 100vw;
justify-content: center;
align-items: center;
overflow-x: hidden;
flex-direction: column;
height: 100vh;


`;
export const ContainerItens = styled.div`
border-radius: 31px ;
margin-top: 10px;
display: flex;
flex-direction: column;
gap: 10px;

`;

export const Image = styled.img`
width: 342px;
margin: 20px auto;
height: 160px;
`;
export const H1 = styled.h1`
margin-bottom: 30px;
color: #ffffff;
text-align: center;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const Button = styled.button`
width: 308px;
height: 74px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.14);
color: #ffffff;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

`;
export const AddOrder = styled.li`
 display: flex;
 justify-content: space-around;
 align-items: center;
 border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
border: none;
outline: none;
width: 308px;
height: 100px;
align-items: center;
padding: 5px;
margin-bottom: 15px;


p{
font-size: 16px;
font-style: normal;
font-weight: normal;
line-height: normal;
color: #ffffff;
}
button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 10%;
    
}
`;

export const ContaineList = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;

`