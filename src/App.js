import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import bg from "./img/bg.png";
import data from "./data.js";
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './routes/Detail.js';
import axios from "axios";
import Cart from './routes/Cart.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clkCnt, setClkCnt] = useState(1);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/cart")}}>Cart</Nav.Link>
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

            {
              clkCnt < 3 ? 
                <button onClick={()=>{
                  axios.get(clkCnt == 1 ? "https://codingapple1.github.io/shop/data2.json" : "https://codingapple1.github.io/shop/data3.json") 
                  .then((res)=>{
                    let newShoes = [...shoes, ...res.data];
                    setShoes(newShoes);
                    setClkCnt(clkCnt+=1);
                    console.log(clkCnt)
                  })
                  .catch((err)=>{
                    console.log(err)
                  })
                }}>더보기</button> : (
                  <div>상품이 없습니다.</div>
                )
            }
          </div>
        }></Route>


        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

function Card({shoes, i}){
  let navigate = useNavigate();

  return(
    <div className="col-md-4" onClick={()=>{navigate(`/detail/${i}`)}}>
      <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" alt="" />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}원</p>
      <p>{shoes.content}</p>
    </div>
  )
}

function About(){
  return (
    <div className='tab-cont start end'>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
