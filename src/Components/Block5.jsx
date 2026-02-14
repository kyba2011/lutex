import React from 'react'
import Card from './card'

function Block5() {
  return (
    <div>
      <div className="">
        <div className="">
          <h2>ЛЮБИМЫЙ ТРИКОТАЖ</h2>
          <div className="">
            <div>
              <p>— Халаты</p>
              <p>— Сорочки</p>
              <p>— Пижамы</p>
            </div>
            <div className="">
              <p>— Туники</p>
              <p>— Толстовки</p>
              <p>— Спортивные костюмы</p>
            </div>
          </div>
          <Card data={{ name: "Трикотаж", name2: "zima", visit: ["1sp", "2sp", "euro"] }} img="/halat.png" />
        </div>
        <img src="/block5.png" alt="" />
      </div>
    </div>
  )
}

export default Block5
