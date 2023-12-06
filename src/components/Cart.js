import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, Col, FormControl, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai';

const Cart = () => {

  const {state:{cart},dispatch,}=CartState();

  const [total,setTotal]=useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price)*curr.qty,0))
  },[cart]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map(prod=>(
              <ListGroupItem key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.images} alt={prod.title} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.title}</span>
                  </Col>
                  <Col md={2}>${prod.price}</Col>
                  <Col md={2}>Rating{prod.rating}</Col>
                  <Col md={2}>
                    <FormControl as="select" value={prod.qty}
                    onClick={(e)=>
                    dispatch({
                      type:"Change_Cart_Qut",
                      payload:{
                        id:prod.id,
                        qty:e.target.value,
                      }
                    })}>{[...Array(prod.inStock).keys()].map((x)=>(
                      <option key={x+1}>{x+1}</option>
                    ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                  <Button 
                  type='button'
                  variant='light' 
                  onClick={()=>
                          dispatch({
                            type:'Remove_From_Cart',
                            payload:prod,
                          })
                        }
                        >
                          <AiFillDelete fontSize="20px"/>
                        </Button>
                  </Col >
                </Row>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='tittle'>Subtotal({cart.length}) items</span>
        <span style={{fontWeight: 700,fontSize: 20}}>Total: ${total}</span>
        <Button type='button' disabled={cart.length===0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart