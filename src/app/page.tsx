'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const { data: user } = useSession()
  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='w-[364px] h-[469px] flex items-center flex-col'>
        {JSON.stringify(user)}
      </div>
    </main>
  )
}
