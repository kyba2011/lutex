import { Heart, Phone, ShoppingCart } from 'lucide-react'
import React, { useState, useEffect } from 'react'

function Header() {
  const [isDarkSection, setIsDarkSection] = useState(false);
  // Состояние для активного пункта меню (по умолчанию 'ГЛАВНАЯ')
  const [activeItem, setActiveItem] = useState('ГЛАВНАЯ');

  const menuItems = ['ГЛАВНАЯ', 'КАТАЛОГ', 'РАСПРОДАЖА', 'ОТЗЫВЫ', 'КОНТАКТЫ'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgType = entry.target.getAttribute('data-bg');
            setIsDarkSection(bgType === 'dark');
          }
        });
      },
      { rootMargin: '0px 0px -90% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('[data-bg]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const textColor = isDarkSection ? 'text-white' : 'text-[#10545B]';
  // Цвет полоски (золотой, как твои кнопки)
  const underlineColor = 'bg-[#D9B46C]';

  return (
    <header className={`fixed flex items-center justify-between px-12 md:px-16 lg:px-20 top-0 h-20 w-full border-0 bg-background/95 backdrop-blur z-50 transition-colors duration-500 ${textColor}`}>
      
      <img 
        src="/logo.svg" 
        alt="logo" 
        className={`w-40 transition-all duration-500 ${isDarkSection ? 'brightness-0 invert' : ''}`} 
      />

      <nav>
        <ul className='flex gap-8 font-medium'>
          {menuItems.map((item) => (
            <li 
              key={item}
              onClick={() => setActiveItem(item)}
              className={`relative cursor-pointer py-1 transition-opacity hover:opacity-100 group
                ${activeItem === item ? 'opacity-100' : 'opacity-70'}
              `}
            >
              {item}
              {/* Полоска (Underline) */}
              <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${underlineColor}
                ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-2">
        <a href='#' className='flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all'>
          <ShoppingCart className='w-5 h-5'/>
        </a>
        <a href="#" className='flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all'>
          <Heart className='w-5 h-5'/>
        </a>
        <a href="#" className='flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all'>
          <Phone className='w-5 h-5'/>
        </a>
      </div>
    </header>
  )
}

export default Header