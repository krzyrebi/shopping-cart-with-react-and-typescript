import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/inventory.json'

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} style={{ width: '100px', height: '70px', objectFit: 'cover' }} />
            <div className='me-auto'>
                <div>
                    {item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: '.5rem' }}>x{quantity}</span>}
                </div>
                <div className='text-muted' style={{ fontSize: '.5rem' }}>
                    {item.price}
                </div>
            </div>
            <div>
                {item.price * quantity}
            </div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>

        </Stack >
    )
}
