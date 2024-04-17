import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import LoginForm from "./login";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <div>
            <button
              type="button"
              onClick={function () {
                history.push("/upload");
              }}
              icon={<DownloadOutlined />}
            >
              물품 업로드
            </button>
            <button
              type="button"
              onClick={function () {
                history.push("/login");
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>

      <div id="cardSet">
        <div id="bannerSet">
          <img src="/images/banner/배너900300.png"></img>
        </div>
        <div id="body">
          <Switch>
            <Route exact={true} path="/">
              <MainPageComponent />
            </Route>
            <Route exact={true} path="/products/:id">
              <ProductPage />
            </Route>
            <Route exact={true} path="/upload">
              <UploadPage />
            </Route>
            <Route exact={true} path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
