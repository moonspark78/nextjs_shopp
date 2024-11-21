import { addItem, CartItem, removeItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SheetClose } from '../ui/sheet'
import { useDispatch } from 'react-redux'


type Props ={
    items: CartItem[]
}

const CartSidebar = ({items}:Props) => {

    const dispatch = useDispatch();

    const addCartHandler = (item:CartItem) =>dispatch(addItem(item));
    const removeCartHandler = (id:number) =>dispatch(removeItem({id}))



  return (
    <div className='mt-6 h-full mb-6'>
        {/* Heading */}
        <h1 className='text-center font-bold text-lg mb-6'>
            Votre Panier
        </h1>
        {items.length == 0 && (
            <div className='flex items-center w-full h-[80%] flex-col justify-center'>
                <Image
                    src="/images/cart.svg"
                    alt='empty_cart'
                    width={200}
                    height={200}
                    className='object-cover mx-auto'
                />
                <h1 className='mt-8 text-2xl font-semibold'>Votre Panier est vide.</h1>
            </div>
        )}
        {items.length > 0 && (
            <div>
                {items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4'
                        >
                            {/* Cart item image */}
                            <div>
                                <Image
                                    src={item?.image}
                                    alt={item.title}
                                    width={60}
                                    height={60}
                                    className='object-cover mb-4'
                                />
                            </div>
                            <div>
                                {/* title */}
                                <h1 className='text-sm w-4/5 fond-semibold truncate'>{item?.title}</h1>
                                {/* Price */}
                                <h1 className='text-base font-bold text-blue-950'>${(item?.price * item?.quantity).toFixed(2)}</h1>
                                {/* Quantity */}
                                <h1 className='text-base font-bold mb-2'>Quantity : {item?.quantity}</h1>
                                {/* Two button one for add & other for remove */}
                                <div className='flex items-center space-x-4'>
                                    <Button onClick={() => {removeCartHandler(item.id)}} size={"sm"} variant={"destructive"}>Remove</Button>
                                    <Button onClick={() => {addCartHandler(item)}} size={"sm"} >Add</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Link href="/cart">
                  <SheetClose>
                    <Button className='w-full mb-6 mt-6'>View All Cart</Button>
                  </SheetClose>
                </Link>
            </div>
        )}
    </div>
  )
}

export default CartSidebar