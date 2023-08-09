'use client'

import { signIn } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='w-[364px] h-[469px] flex items-center flex-col'>
        <h1 className='uppercase font-black text-[30px]'>login</h1>
        <p className='font-normal text-[16px] text-[#525252] mb-[24px]'>How to i get started lorem ipsum dolor at?</p>
        <form className='flex flex-col items-center space-y-[24px]'>
          <div className='space-y-[18px]'>
            <input 
              type="text" 
              placeholder='username' 
              name='username' 
              className='w-[364px] h-[52px] bg-[#F0EDFF] placeholder:text-[#1C1C1C] rounded-2xl px-[18px] py-[14px]'
            />
            <input 
              type="password" 
              placeholder='password' 
              name='password'
              className='w-[364px] h-[52px] bg-[#f0edffd5] placeholder:text-[#1C1C1C] rounded-2xl px-[18px] py-[14px]'
            />
          </div>

          <button 
            type='submit' 
            className='w-[124px] h-[52px] rounded-2xl bg-[#9181F4] bg-gradient-to-br text-white transition hover:brightness-80'
          >
            Login Now
          </button>
        </form>

        <div className='space-y-[16px] flex flex-col mt-[30px]'>
         {/*  <p><span>Login</span> With others</p> */}
          <button 
            type='button'
            className='rounded-2xl border-[#F0EDFF] border w-[364px] h-[52px]'
            onClick={() => signIn('google')}
          >
            Login with google
          </button>
          <button 
            type='button'
            className='rounded-2xl border-[#F0EDFF] border w-[364px] h-[52px]'
          >
            Login with facebook
          </button>
        </div>
      </div>
    </main>
  )
}
