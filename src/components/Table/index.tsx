import React from 'react'
import TableRow from './TableRow'

export default function Table() {
  return (
    <div className="flex w-full flex-col justify-start text-xs">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="basis-[5%]">#</div>
        <div className="basis-[35%]">Collection</div>
        <div className="basis-[10%]">Volume</div>
        <div className="basis-[10%]">Change</div>
        <div className="basis-[10%]">Floor price</div>
        <div className="basis-[10%]">Sales</div>
        <div className="basis-[10%]">Unique owners</div>
        <div className="basis-[10%]">Items listed</div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1].map((index) => (
        <TableRow
          key={index}
          index={index}
          collection={'Utopiara'}
          volume="16ETH"
          change="9%"
          floor_price="<0.01ETH"
          sales="372"
          unique_owners="16%"
          items_listed="1%"
        />
      ))}
      <TableRow
        index={6}
        collection={'Utopiara'}
        volume="16ETH"
        change="9%"
        floor_price="<0.01ETH"
        sales="372"
        unique_owners="16%"
        items_listed="1%"
      />
      <TableRow
        index={7}
        collection={'Utopiara'}
        volume="20ETH"
        change="19%"
        floor_price="<0.11ETH"
        sales="372"
        unique_owners="26%"
        items_listed="3%"
      />
    </div>
  )
}
