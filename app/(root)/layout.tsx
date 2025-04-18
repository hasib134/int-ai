import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout =async ({children}:{children:ReactNode}) => {

  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated)  redirect('/sign-in');
  
  return (
    <div className='root-layout'>
        <nav>
          <Link rel="stylesheet" href="/" className='flex items-center gap-2'>
         {/* <Image src="/logo.svg" alt="logo" width={38} height={32}/> */}
         <h2 className='text-blue-700'>Interview AI</h2>
          </Link>
        </nav>
        {children}
    </div>
  )
}

export default RootLayout
