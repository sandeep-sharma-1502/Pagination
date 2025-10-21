
import { useEffect, useState } from 'react'
import './App.css'

const PAGE_SIZE = 10

function Cart ({title, image, price}){

  return(
    <div className='product-cart'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h3>Price {price}</h3>
    </div>
  )
}

function Pagination() {

  const [products, setProducts] = useState([])
  const [currentpage, setCurrentpage] = useState(0)
  useEffect (()=>{
    getProduct()
  },[])

  
    async function getProduct() {
      const data = await fetch('https://dummyjson.com/products?limit=194')
      const product = await data.json()
      setProducts(product.products) 
    }

    const startpage = currentpage * 10
    const endpage = startpage+ PAGE_SIZE

  return (
    <>
     <div>
      <h1>Pagination</h1>
      {products.map((n)=>(<span key={n.id}>{n}</span>))}
     </div>
    <div className='container'>
      {products.map((p) => (<Cart key={p.id} image={p.images} price={p.price} title={p.title} />))}
    </div>
    </>
  )
}
export default Pagination
