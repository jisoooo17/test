import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import bg from "./img/bg.png";
import data from "./data.js";
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './routes/Detail.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg" style={{backgroundImage: `url(${bg})`}}></div>

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
        }></Route>


        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        
      </Routes>
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

function About(){
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
