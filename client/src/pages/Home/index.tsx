import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../../types'
import Products from '../../components/Products'
import Wrapper from '../../components/Wrapper'
import Spinner from '../../components/Spinner'
import MessageBox from '../../components/MessageBox'
import '../../index.css'
export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('/api/v1/products')
        setLoading(false)
        setProducts(data)
        console.log(data)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Wrapper>
        <main>
          <div>
            {loading ? (
              <Spinner />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div className="row center">
                {products.map((prod: IProduct) => (
                  <Products
                    key={prod._id}
                    _id={prod._id}
                    name={prod.name}
                    brand={prod.brand}
                    categories={prod.categories}
                    sizes={prod.sizes}
                    description={prod.description}
                    image={prod.image}
                    numReviews={prod.numReviews}
                    price={prod.price}
                    rating={prod.rating}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </Wrapper>
    </>
  )
}
