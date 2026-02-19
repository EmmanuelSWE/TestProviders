import React, { useEffect } from 'react';
import { Card, Typography } from 'antd';
import { usePetAction, usePetState } from '../../providers';
import { useParams } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

export type PetProps = {
  name: string;
  date_of_birth: any;   // no formatting → accept raw value
  description: string;
};

export const Pet= () => {
const { id } = useParams<{ id: string }>();
  const {pet,isPending, isError, isSuccess} = usePetState();
  const { getOnePet} = usePetAction();


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
    <Card style={{ width: 420 }}>
     {pet != undefined ?  <>
     <Title level={4} style={{ marginBottom: 8 }}>
        {pet.name}
      </Title>

      <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
        Date of birth: {pet.date_of_birth.toString()}
      </Text>

      <Paragraph style={{ margin: 0 }}>
        {pet.description}
      </Paragraph></> : null}
    </Card>
  );
};