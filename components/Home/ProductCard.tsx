"use client"

import React from 'react'
import {Product} from "@/type"
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
/* import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'; */
import { useToast } from '@/hooks/use-toast';


type Props = {
    product: Product
};


const ProductCard = ({product}:Props) => {

    const num = Math.round(product.rating.rate)
    const ratingArry = new Array(num).fill(0);
    const { toast } = useToast()

    const dispatch = useDispatch();


    const addToCartHandler = (product:Product) =>{
        toast({
            title: "Item Added to Cart",
            variant: "success",
          })
        dispatch(addItem(product));
    }

  return (
    <div className='p-4'>
        <div className='w-[200px] h-[150px]'>
            <Image
                src={product.image}
                alt={product.title} 
                width={170}
                height={170}
                className='w-[80%] h-[80%] object-contain'
            />
        </div>
        {/* Category */}
        <p className='mt-5 text-xs capitalize text-gray-600'>
            {product.category}
        </p>

        {/* Title */}
        <Link href={`/product/product-details/${product.id}`}>
            <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full 
            sm:truncate mt-2 text-black font-semibold'>
                {product.title}
            </h1>
        </Link>

        {/* Rating */}
        <div className='flex items-center'>
           {
            ratingArry.map(() =>{
                return (
                    <StarIcon
                        key={Math.random()*1000}
                        size={20}
                        fill="yellow"
                        className='text-yellow-500'
                    />
                )
            })
           }
        </div>

        {/* Pricing */}

        <div className='flex mt-2 items-center space-x-2'>
            <p className='text-black text-base line-through font-semibold opacity-50'>
                {`$${(product.price + 10).toFixed(2)}`}
            </p>
            <p className='text-black text-lg font-bold opacity-80'>
                ${product.price}
            </p>
        </div>

        {/* Button */}
        <div className='mt-4 flex items-center space-x-2'>
            <Button onClick={() => addToCartHandler(product)} size={"icon"}>
                <ShoppingBag size={20}/>
            </Button>
            <Button size={"icon"} className='bg-red-500'>
                <Heart size={20}/>
            </Button>
        </div>

    </div>
  )
}

export default ProductCard