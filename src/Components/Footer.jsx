import React from 'react'
import { FaTelegram } from 'react-icons/fa6'
import { FaVk } from "react-icons/fa";

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-teal-light text-white pt-12.5 pb-5 px-20 flex w-full h-75">
      <div className="flex flex-col justify-between text-[#D9B46C] ">
        <img src="/logo.svg" alt="" className='w-44'/>
        <p className='text-[14px] w-56'>Политика конфиденциальности</p>
      </div>
      <div className="leading-3.25 flex flex-col justify-start text-[16px] font-semibold space-y-6.25 ml-55">
        <p><Link to="/">Главная</Link></p>
        <p><Link to="/catalog">Каталог</Link></p>
        <p><Link to="/sale">Распродажа</Link></p>
        <p><Link to="/reviews">Отзывы</Link></p>
        <p><Link to="/contacts">Контакты</Link></p>
      </div>
      <div className="ml-55.5 space-y-5 flex flex-col justify-start">
        <p>lubim-textil@mail.ru</p>
        <div className="flex gap-5">
          <FaVk className='w-6 h-6 text-white' />
          <FaTelegram className='w-5.75 h-5.75 text-white' />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between text-[#D9B46C] ml-40">
        <p className='border-[1.5px] border-[#D9B46C] py-2.5 px-5 rounded-full font-semibold text-[20px]'>+7 905 342-70-61</p>
        <p className='text-[14px]'>Пользовательское соглашение</p>
      </div>
    </div>
  )
}

export default Footer
