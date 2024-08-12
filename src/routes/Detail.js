import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav, Tab } from "react-bootstrap";

const Detail = (props) => {
  const {id} = useParams();
  let [sales, setSales] = useState(true);
  let [count, setCount] = useState(0);
  let [input, setInput] = useState("");
  let [tab, setTab] = useState(0);

  let dataId = props.shoes.find((data)=>{
    return data.id == id
  });

  useEffect(()=>{
    let timer = setTimeout(() => {
      setSales(false);
    }, 2000);
    console.log("다음에 실행222")


    return()=>{
      console.log("먼저 실행1111")
      clearTimeout(timer);
    }
  }, []);

  useEffect(()=>{
    if(isNaN(input) == true){
      alert("숫자만 입력");
      setInput("");
    }
  }, [input])

  
  return (
    <div className="detail-w">
      {
        sales == true ? <div className="alert alert-warning">2초 이내 구매 시 할인</div> : null
      }

      {count} <button onClick={()=>{setCount(count+=1)}}>button</button>

      <br/>

      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${dataId.id + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{dataId.title}</h4>
            <p>{dataId.price}원</p>
            <p>{dataId.content}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}/>
    </div>
  );
};

function TabContent({tab}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade("end")}, 100);

    return()=>{
      setFade("");
    }
  }, [tab])

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>
  )
}
export default Detail;