import styled from 'styled-components';
import background from '../../assets/bg.svg';


export const Container = styled.div`
background: url("${background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

`;
export const ContainerItens = styled.div`
border-radius: 61px 61px 0px 0px;
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 10px;

`;

export const Image = styled.img`
width: 342px;
margin-top: 20px;
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
export const Label = styled.p`
color: #eeeeee;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px;
margin-left: 25px


`;
export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;
width: 342px;
height: 58px;
padding-left: 25px;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #ffffff;



`;
export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
background: #D93856;
color: #ffffff;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 20px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

`;
