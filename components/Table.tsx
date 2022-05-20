import { Product } from '@stripe/firestore-stripe-payments'
import React from 'react'

interface Props {
  products: Product[]
  selectedPlan: Product
}

const Table = ({ products, selectedPlan }: Props) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]" : "text-[gray]"}`}>BRL {product.prices[0].unit_amount! / 100}</td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]" : "text-[gray]"}`}>{product.metadata.videoQuality}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
