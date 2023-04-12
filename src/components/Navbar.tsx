import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <BootstrapNavbar sticky='top' className='bg-white mb-2 shadow-sm'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                <Button
                    onClick={openCart}
                    style={{ position: 'relative' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)' }}>
                        {cartQuantity}
                    </div>
                </Button>
            </Container>
        </BootstrapNavbar>
    )
}
