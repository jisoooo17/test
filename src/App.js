import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import bg from "./img/bg.png";
import data from "./data.js";
import { useState } from 'react';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage: `url(${bg})`}}></div>
      {console.log(data)}

      <div className="container">
        <div className="row">
          {
            shoes.map((q, i)=>{
              return(
                <Card shoes={shoes[i]} key={i} i={i}/>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

function Card({shoes, i}){
  return(
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" alt="" />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}원</p>
      <p>{shoes.content}</p>
    </div>
  )
}

export default App;
