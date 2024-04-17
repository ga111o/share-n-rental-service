import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants.js";
import { Carousel } from "antd";

dayjs.extend(relativeTime);

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });

    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banner, index) => {
          return (
            <Link to={banner.href}>
              <div id="banner">
                <img src={`${API_URL}/${banner.imageUrl}`} />
              </div>
            </Link>
          );
        })}
      </Carousel>
      <h1 id="product-headline">대여 가능 상품</h1>
      <br></br>
      <a class="button333" href="">
        전체
      </a>
      <a class="button222" href="">
        대여
      </a>
      <a
        class="button222"
        href="C:\Users\sando\OneDrive\문서\1. programing\vscode\제주제일고등학교 대여 서비스\web\src\other\main1.html"
      >
        기부
      </a>
      <a
        class="button222"
        href="C:\Users\sando\OneDrive\문서\1. programing\vscode\제주제일고등학교 대여 서비스\web\src\other\main1.html"
      >
        분실물
      </a>

      {/* <button
        class="button222"
        onClick={function () {
          history.push("/login");
        }}
      >
        로그인
      </button> */}
      <br></br>
      <br></br>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div>
                  <img
                    className="product-img"
                    src={`${API_URL}/${product.imageUrl}`}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-price">{product.name}</span>
                  <span className="product-name">
                    남은 수량: {product.price} 개
                  </span>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/ilgo.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span className="product-date">
                      {dayjs(product.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
