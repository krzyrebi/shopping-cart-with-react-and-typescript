import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export const Item = ({ id, name, price, imgUrl }: ItemProps) => {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={imgUrl} height='200px' style={{ objectFit: 'contain' }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-3'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{price}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={() => increaseItemQuantity(id)}>Add To Cart</Button>
                    ) : <div className='d-flex align-items-center flex-column' style={{ gap: '0.5rem' }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: '0.5rem' }}>
                            <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                            <div className='fs-3'>
                                {quantity} in cart
                            </div>
                            <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                        </div>
                        <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card >
    )
}
