import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const {id} = useParams();

  let dataId = props.shoes.find((data)=>{
    return data.id == id
  })
  console.log(dataId)

  return (
    <div className="detail-w">
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