import React from 'react'
import { Button, Card, CardSubtitle, CardText } from 'react-bootstrap'
import { CartState } from '../context/Context'


const SingleProduct = ({prod}) => {

  const {state:{cart},dispatch,}=CartState();
  return (
    <div className='products'>
        <Card style={{width:"20rem"}}>
            <Card.Img className='photo' variant='top' src={prod.images} alt={prod.title}/>
            <Card.Body className='cardbody'>
                <Card.Title>{prod.title}</Card.Title>
                <CardSubtitle>${prod.price}</CardSubtitle>
                    <CardText>
                    <h6>Discription:{prod.description}</h6>
                    <h6>disc:{prod.discountPercentage}</h6>
                    <h6>Rating:{prod.rating}</h6>
                    <h5>Stock:{prod.stock}</h5>
                    <h4>Brand:{prod.brand}</h4>
                    <h6>Category:{prod.category}</h6>
                    </CardText>
                    {
                      cart.some(p=>p.id===prod.id)?(
                        <Button onClick={()=>{
                          dispatch({
                            type:'Remove_From_Cart',
                            payload:prod,
                          });
                        }} variant='danger'>Remove From cart</Button>
                      ):(
                        <Button onClick={()=>{
                          dispatch({
                            type:'Add_To_Cart',
                            payload:prod,
                          });
                        }}
                        disabled={!prod.stock}>
                          {!prod.stock ? "out of Stock" : "Add to Cart"}
                        </Button>
                      )
                    }
                
                
                
            </Card.Body>
        </Card>

    </div>
  )
}

export default SingleProduct