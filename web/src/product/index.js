import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants";
import dayjs from "dayjs";

const url = "";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>정보 로딩 중..</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/ilgo.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">수량: {product.price} </div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <pre id="description">{product.description} </pre>
      </div>
      {/* <div onClick={alert("이메일 주소에 @를 입력해주세요")}>
        <a class="abutton" href="/">
          대여하기
        </a>
      </div> */}

      <button
        class="abutton"
        id="loginAlert"
        onClick={() => alert("대여하시겠습니까?")}
      >
        대여하기
        <a href="/">대여하기</a>
      </button>

      {/* <a
        class="abutton"
        href="/"
        id="loginAlert"
        onClick={() => alert("이메일 주소에 @를 입력해주세요")}
      >
        대여하기
      </a> */}

      {/* 
      <button
        onClick={() => {
          window.open(url);
        }}
      ></button> */}
    </div>
  );
}

export default ProductPage;
