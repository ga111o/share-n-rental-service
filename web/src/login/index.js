import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import "./index.css";
import { ForkOutlined } from "@ant-design/icons";
import { API_URL } from "../config/constants";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./index.css";

function LoginForm() {
  const history = useHistory();

  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/`, {
        id: values.ID,
      })
      .then((LoginComplete) => {
        console.log(LoginComplete);
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다. ${error.message}`);
      });
  };

  return (
    <div id="upload-container">
      <Form name="로그인" onFinish={onSubmit}>
        <Form.Item
          label={<div className="upload-label">ID</div>}
          name="seller"
          rules={[{ required: true, message: "ID를 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="ID를 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item>
          <a class="abutton2" href="/">
            로그인
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
