import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Card
} from 'antd';
import { IUser, User } from '../../Utils/AuthUtil';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



type Props = {
  form: any; // from Form.create()
};

export const Signup=(props) => {
  const { form } = props;

  const[fullName,setfullName] = useState('');
  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    //get the info
    const user : User = new User('0',fullName,userName,password);

    if(user.signUp()){
      console.log('yo you logged in')
      navigate('login');
    }
  };

 
  /*
  const compareToFirstPassword = (_rule: any, value: string, callback: (msg?: string) => void) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };*/

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
  };


  return (


  <Card style={{ width: '40%' }}>
    <Form {...formItemLayout} onSubmitCapture={handleSubmit}>
    signup
        
      <Form.Item label="Name">
        <Input value={fullName} onChange={(e)=>{
          setfullName(e.target.value);
        }} />
      </Form.Item>

  

     { /*<Form.Item label="Confirm Password" hasFeedback>
        <Input.Password onBlur={handleConfirmBlur} />
      </Form.Item>
*/}
      <Form.Item
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">             
            </Tooltip>
          </span>
        }
      >
        <Input  value={userName} onChange={(e)=>{
          setUserName(e.target.value);
        }}/>
       
      </Form.Item>

         <Form.Item label="Password" hasFeedback>
        <Input.Password value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}/>  
      </Form.Item>


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>

         <div style={{padding: 10}}>
         <Link to='/login'>   Or log in now!</Link>
        </div>
      </Form.Item>
    </Form>
    </Card>
   
  );
};


