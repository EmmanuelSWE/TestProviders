import {Row, Col, Button} from 'antd';

import { createStyles, css } from "antd-style";
import { usePetAction, usePetState } from '../../providers/index';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const Pets = () => {

    const {styles , cx} = useStyles();
    const {pets, isPending, isError} = usePetState();
    const {getPets, deletePet} = usePetAction();
    const navigate = useNavigate();

    useEffect(()=>{
        getPets();
    },[])

    if(isPending){
        return <p> it is pending bruh</p>
    }

    if(isError){
        return <p> there is an error bro</p>
    }

    return (
    <>
      {/* row collumn for the heading*/}
           <div className='gridContainer' style={{ padding: 30}}>
             <Row className={cx(styles.row, styles.headingRow)}> 
                <Col span={colSpan.fullSpan}>
                    Heading
                </Col>
            </Row>

             <Row className={cx(styles.row, styles.firstItemRow)}> 
                <Col span={colSpan.quarterSpan}>
                    User
                </Col>
                 <Col span={colSpan.halfSpan}>
                    Time
                </Col>
                 <Col span={colSpan.quarterSpan}>
                    approved?
                </Col>
            </Row>

           {pets && pets.length > 0 ? pets.map( pet => (
              <Row className={cx(styles.row, styles.itemRow)} key={pet.id}> 
                <Col span={colSpan.quarterSpan}>
                   <Link to={`/user/pet/${pet.id}`}> {pet.name}</Link>
                </Col>
                
                 <Col span={colSpan.quarterSpan}>
                    {pet.date_of_birth.toString()}
                </Col>
                 <Col span={colSpan.halfSpan}>
                   <Button onClick={()=>{
                    deletePet(pet.id);
                   
                   }} danger> Delete</Button>
                </Col>

                 <Col span={colSpan.halfSpan}>
                   <Button onClick={()=>{
                    navigate(`/user/edit/${pet.id}`);
                    
                   }} > edit</Button>
                </Col>
            </Row>
           )) : null}


             <Row className={cx(styles.row, styles.lastItemRow)}> 
                <Col span={colSpan.quarterSpan}>
                    User
                </Col>
                 <Col span={colSpan.halfSpan}>
                    Time
                </Col>
                 <Col span={colSpan.quarterSpan}>
                    approved?
                </Col>
            </Row>

           </div>
    </>
       
      
        
    )

}

export default Pets;