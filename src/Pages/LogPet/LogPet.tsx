import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
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
  Card,
  DatePicker
} from 'antd';
import { IUser, User } from '../../Utils/AuthUtil';
import { useNavigate } from 'react-router-dom';
import { IPet } from 'src/providers/context';
import { usePetAction, usePetState } from '../../providers';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



type Props = {
  form: any; // from Form.create()
};

export const LogPet=(props) => {
  const { form } = props;

  const[fullName,setfullName] = useState('');
  const[dob, setDob] = useState<Dayjs>();
  const[description, setDescription] = useState('');
  const {isPending, isSuccess, isError} = usePetState();
  const {createPet} = usePetAction();
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDog :IPet = {
        name : fullName,
        date_of_birth : dob,
        description
    }

    try{
        createPet(newDog);
    navigate('/user/pets');
   
    }catch(error){
        console.log(error)
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

  if(isPending){
    return <h1> trying to add dog</h1>
  }

  if(isError){
    return <h1> Error adding dog</h1>
  }

  
  return (

  
  <Card style={{ width: '40%' }}>
    <Form {...formItemLayout} onSubmitCapture={handleSubmit}>
    Create Dog
        
      <Form.Item label={
          <span>
            Dog name&nbsp;
            <Tooltip title="What do you want others to call your dog?">             
            </Tooltip>
          </span>
        }>
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
          Date of birth&nbsp;
          <Tooltip title="Enter the pet's date of birth" />
        </span>
      }
    >
      <DatePicker
        value={dob} // expects Dayjs | null
        onChange={(date: Dayjs | null) => {
          setDob(date); // store Dayjs (or null)
        }}
      />
    </Form.Item>

      
         <Form.Item label="Description" hasFeedback>
        <Input.TextArea
    rows={4}               // height (number of text lines)
    placeholder="Write a paragraph..."
    maxLength={500}        // optional limit
    showCount 
 value={description} onChange={(e)=>{
          setDescription(e.target.value);
        }}/>  
      </Form.Item>


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </Card>
   
  );
};
