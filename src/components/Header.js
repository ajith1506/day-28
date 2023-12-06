import {Navbar,Container, NavbarText, FormControl, Nav,Dropdown, Badge, Button} from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai'
import {FaAlignRight, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const {state:{cart},
  dispatch
}=CartState();
  return ( 
  <Navbar bg='dark' variant='dark' style={{height:100}}>
    <Container>
     <Navbar.Brand >
       <Link to='/'>Shoping Cart</Link>
     </Navbar.Brand>
     <NavbarText className='search'>
        <FormControl
        style={{width:500}}
        placeholder='Search a product'
        className='m-auto'
        />
        </NavbarText>
        <Nav>
        <Dropdown align={FaAlignRight}>
      <Dropdown.Toggle variant="success">
        <FaShoppingCart color="white" fontSize="25px"/>
        <Badge>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth: 250}}>

        {cart.length>0 ? (
          <>
          {
            cart.map((prod)=>(
              <span className='cartitem' key={prod.id}>
                <img
                src={prod.images}
                className='cartItemImg'
                alt={prod.title}/>
                <div className='cartItemDetail'>
                  <span>{prod.title}</span>
                  <span>${prod.price}</span>
                </div>
                <AiFillDelete
                fontSize="20px"
                style={{cursor:"pointer"}}
                onClick={()=>
                  dispatch({
                    type:"Remove_From_Cart",
                    payload:prod,
                  })
                }
                />
              </span>
            ))
          }
          <Link to="/cart">
            <Button style={{width: "95%", margin: "0 10px"}}>Go To Cart</Button>
          </Link>
          </>
        ):(<span style={{padding: 10}}> Cart is Empty</span>)}
        
        
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
     
    </Container>
  </Navbar>
  )
}


export default Header