import { Layout , Row, Col} from 'antd';
import {  HeartTwoTone } from '@ant-design/icons';
import { createStyles, css } from "antd-style";

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

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
const EmptyLayout
 = () => {
  

    return (
        <Layout style={{textAlign: 'center'}}>
      <Header>Wish To Washy</Header>
      <Layout>
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

export default EmptyLayout
;