import { useEffect, useState } from "react"
import { getUser } from "../../Utils/helpers";
import React from 'react';
import { EditOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Flex, Row } from 'antd';
import type { CardMetaProps, CardProps } from 'antd';
import { createStyles } from 'antd-style';

const { Meta } = Card;

export const Home = () =>{
    const [name,setName]  = useState<string | null>(null);

    useEffect(()=>{
        const tempName = getUser();

        setName(tempName) 
    },[]);

    return ( 
       <div style={{flexDirection : 'column'}}>
         { name != null ?
        <h1> hello {name}</h1> : null 
        }


        <Row>
                   <Card style={{ width: '400px' }}>
    <p>ViewDog is a simple and fun web app that lets dog lovers explore different dogs and manage their own pet profiles. Whether you want to browse through adorable dogs or update details about your own furry friend, ViewDog makes it easy. You can view your dogs, edit their descriptions, and keep their information up to date—all in one place. It’s a lightweight, user‑friendly space built for anyone who loves dogs and wants a quick way to organize their pets online.</p>
   
  </Card>
        </Row>

        <Row>

        </Row>

       </div>
   
    );
}