import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[10vh] sticky top-0 z-[1] bg-white shadow-md mb-[50px]'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
            {/* Logo */}
            <Link href="/">
                <Image src="/images/logo.png" alt='logo' width={160} height={160}/>
            </Link>
            {/* icon */}
            <div className='flex items-center space-x-6'>
              {/* SearchBox */}
                <SearchBox />
                <HeartIcon size={26} cursor={"pointer"}/>
                {/* ShoppingCartButton */}
                  <ShoppingCartButton/>
                {/* UserButton */}

                    {/* signIn User  */}
                    <SignedIn>
                      <UserButton/>
                    </SignedIn>


                    {/* Not signIn */}
                    <SignedOut>
                      <SignInButton>
                          <UserIcon cursor={"pointer"}  size={26}/>
                      </SignInButton>
                    </SignedOut>


            </div>
        </div>
    </div>
  )
}

export default Nav