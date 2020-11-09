import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, IProduct } from '../../types'
import Products from '../../components/Products'
import Spinner from '../../components/Spinner'
import MessageBox from '../../components/MessageBox'
import '../../index.css'
import { fetchAllProducts } from '../../redux/actions'
export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product)
  const { loading, error, allProducts } = products
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <main>
        <div>
          {loading ? (
            <Spinner />
          ) : error !== null ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row center">
              {allProducts.map((prod: IProduct) => (
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
                  countInStock={prod.countInStock}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
