import { Layout , Row, Col, Menu} from 'antd';
import {  HeartTwoTone } from '@ant-design/icons';
import { createStyles, css } from "antd-style";

import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

//enum for the col span
export enum colSpan{
    fullSpan = 24,
    halfSpan = 12,
    quarterSpan = 6
}

//stylinh stuff making it here for now will seperate to file in stlye branch
export const useStyles = createStyles({
    row : css`
        padding-bottom :  20px;
        Padding-top: 20px;
    `,
    itemRow : css `
    border-Top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    
    `,
    headingRow: css `
    border: 1px solid black;
    border-radius: 5px 5px 0px 0px; 
    `,
    lastItemRow :css `
    border: 1px solid black;
    border-radius:0px 0px 5px 5px ;   
    `,
    firstItemRow :css `
    border-left: 1px solid black;
    border-right: 1px solid black;  
    `
})
const { Header, Footer, Sider, Content } = Layout;
const UserLayout = () => {
  

    return (
        <Layout style={{textAlign: 'center'}}>
      <Header> <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to='log'> Log Pet</Link></Menu.Item>
        <Menu.Item key="2"><Link to='pets'> see pets</Link></Menu.Item>
        <Menu.Item key="3"><Link to='home'> home</Link></Menu.Item>
      </Menu></Header>
      <Layout>
        
        <Sider style={{backgroundColor: 'pink'}}>
            {/* nav items*/}
            <Row justify={'center'} style={{padding: 10}}> <HeartTwoTone /></Row>
            <Row justify={'center'}  style={{padding: 10}}> Houses</Row>
            <Row justify={'center'} style={{padding: 10}}> <HeartTwoTone /></Row>
        </Sider>
        <Content>
            
           <Outlet/>
        </Content>
      </Layout>
      <Footer>
        <div className='creators'>
            <h3>
            made By
        </h3>
        <ul>
              <li><a href='https://github.com/EmmanuelSWE'><HeartTwoTone /> Emmanuel</a></li>
        </ul>
        <h3> project repo</h3>

        </div>
      </Footer>
    </Layout>
        
    )

}

export default UserLayout;