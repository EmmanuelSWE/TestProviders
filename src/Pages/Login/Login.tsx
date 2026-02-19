import { Form, Input ,Button, Card } from 'antd';
import { useState } from 'react';
import { User } from '../../Utils/AuthUtil';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [userName, setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
    const handleSubmit = e => {
    e.preventDefault();
    const user : User = new User('','',userName,password);

    if(user.logIn()){
      navigate('/user')
    }
  
  };

     return (

 <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   height: "76vh",          // full screen height
  }}
>
  <Card style={{ width: 300 }}>

    <Form className="login-form" onSubmitCapture={handleSubmit}>

        Login
      <Form.Item>
        <Input placeholder="Username" value={userName} onChange={(e)=>{
          setUserName(e.target.value);
        }}/>
      </Form.Item>

      <Form.Item>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
      </Form.Item>

      <Form.Item >
   

        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div style={{padding: 10}}>
            Or <a href="">register now!</a>
        </div>
       
      </Form.Item>
    </Form>
  </Card>
</div>
     
    );
}
