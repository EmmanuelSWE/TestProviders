import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { usePetAction, usePetState } from '../../providers';

const { TextArea } = Input;

export const EditPet = () => {
  const [form] = Form.useForm();
  const {pet,isPending, isError, isSuccess} = usePetState();
  const [description,setDescription] = useState('')
    const { getOnePet, updatePet} = usePetAction();
     const navigate = useNavigate();
const { id } = useParams<{ id: string }>();
  const handleSubmit = (e) => {
    // TODO: wire to your updatePet action
  e.preventDefault();

     updatePet(pet.id, description);
          navigate(`/user/pet/${pet.id}`)
  };


  useEffect(()=>{
      if(id){
        getOnePet(id);
      }
    },[])



     if(isPending){
        return <p> it is pending bruh</p>
    }

    if(isError){
        return <p> there is an error bro</p>
    }

  return (
  
      <Card title={`Edit Details for`} style={{ width: 420 }}>
       {pet != undefined ? <Form
          layout="vertical"
          form={form}
          onSubmitCapture={handleSubmit}
          initialValues={{ name: '', description: '' }}
        >
          
          <h2> {pet.name}</h2>
          <Form.Item
            label="Description"
            name="description"
            
            rules={[{ required: true, message: 'Please enter a description' }]}
          >
            <Input.TextArea onChange={(e)=>{
          setDescription(e.target.value);
        }}  value={pet.description} rows={4} placeholder="Write a short description..." showCount maxLength={500} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" block>
              Save
            </Button>
          </Form.Item>
        </Form> : null}
      </Card>
  
  );
};