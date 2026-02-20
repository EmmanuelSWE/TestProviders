import { Layout , Menu, Flex, Image} from 'antd';
import {  HeartTwoTone } from '@ant-design/icons';
import { createStyles, css } from "antd-style";

import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useStyles } from './UserLayout';

//enum for the col span
export enum colSpan{
    fullSpan = 24,
    halfSpan = 12,
    quarterSpan = 6
}

//stylinh stuff making it here for now will seperate to file in stlye branch

const { Header, Footer, Sider, Content } = Layout;
const EmptyLayout
 = () => {
  
const {styles} = useStyles();
    return (
        <Layout style={{textAlign: 'center'}}>
      <Header>

    

         <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Image src='..\assets\logo.jpg' />
            <Menu.Item key="4"><Link to='/login'> Log in</Link></Menu.Item>
        <Menu.Item key="5"><Link to='/signup'> Sign up</Link></Menu.Item>
        </Menu>
      </Header>


      <Layout>
  
        <Content>
                   <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   height: "76vh",          // full screen height
  }}
>
           <Outlet/>
           </div>
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

export default EmptyLayout
;