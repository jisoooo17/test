import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const {id} = useParams();
  let [sales, setSales] = useState(true);
  let [count, setCount] = useState(0);
  let [input, setInput] = useState("");

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
    </div>
  );
};

export default Detail;