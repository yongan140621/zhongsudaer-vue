"use client";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navList } from '@/shared'
import { Transition } from '@headlessui/react'
import Mask from './mask'
import { useRouter } from 'next/navigation'

export default function Header() {
  const logoRate = 4255 / 867
  const [visible, setVisible] = useState(false)

  const router = useRouter()

  useEffect(() => {

  }, [])

  return (
    <div className="bg-white sticky top-0 z-10 shadow">
      <div className='flex justify-between items-center m-auto px-2 h-10 sm:px-4 md:px-6 md:h-20 lg:px-10 xl:w-[1280px]'>
        {/* <div className='bg-[url(/logo.png)] w-28 h-11 bg-[length:100%_100%] bg-no-repeat'></div> */}
        <div className='flex items-center'>
          <svg
            className={`w-5 h-5 mr-3 fill-black cursor-pointer sm:hidden`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setVisible(true)}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M22 21L2 21L2 19L22 19V21ZM22 13L2 13L2 11L22 11V13ZM22 5L2 5L2 3L22 3L22 5Z" />
          </svg>
          <img src="/logo.png" alt="" className="w-20 cursor-pointer" onClick={() => router.push('/')} />
        </div>

        <div className={`hidden text-sm sm:flex md:text-base`}>
          {navList.map((item, index) => {
            return (
              <Link
                className={`${index !== navList.length - 1 ? 'mr-6 md:mr-10' : ''} group cursor-pointer hover:text-[#223987]`}
                key={item.path}
                href={item.path}
              >
                <div className={`border-b-2 border-transparent leading-[40px] md:leading-[78px] group-hover:border-[#223987] group-hover:font-medium`}>{item.name}</div>
              </Link>
            )
          })}
        </div>
      </div>

      <Mask
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <Transition
        show={visible}
        className="fixed left-0 bottom-0 w-4/5 h-full bg-white transform-gpu"
        enter="transition-all duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave='transition-all duration-300'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >
        <svg
          className='w-6 h-6 absolute right-2 top-2 cursor-pointer'
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setVisible(false)}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M21 4.38462L13.3846 12L21 19.6154L19.6154 21L12 13.3846L4.38462 21L3 19.6154L10.6154 12L3 4.38462L4.38462 3L12 10.6154L19.6154 3L21 4.38462Z" fill="#262626"/>
        </svg>

        <ul className='px-4 py-8 w-full'>
          {navList.map(item => {
            return (
              <li
                key={item.name}
                className='border-b py-2 px-2 cursor-pointer rounded active:bg-sky-600 active:text-white active:border-transparent'
                onClick={() => {
                  setVisible(false)
                  router.push(item.path)
                }}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </Transition>
    </div>
  )
}
