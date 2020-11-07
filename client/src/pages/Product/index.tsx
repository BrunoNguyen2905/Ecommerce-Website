import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import image from '../../images/d1.jpg'
import Wrapper from '../../components/Wrapper'
import '../../index.css'
import Rating from '../../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import Spinner from '../../components/Spinner'
import MessageBox from '../../components/MessageBox'
import { fetchOneProduct } from '../../redux/actions'
export default function Product() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const productDetails = useSelector((state: AppState) => state.product)

  const { loading, error, oneProduct } = productDetails

  useEffect(() => {
    dispatch(fetchOneProduct(id!))
    console.log(fetchOneProduct(id!))
  }, [dispatch, id])
  return (
    <>
      <Wrapper>
        <main>
          {loading ? (
            <Spinner />
          ) : error !== null ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              <Link to="/">Back to result</Link>
              <div className="row top">
                <div className="col-2">
                  <img className="large" src={image} alt={oneProduct.name} />
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{oneProduct.name}</h1>
                    </li>
                    <li>
                      <Rating
                        rating={oneProduct.rating}
                        numReviews={oneProduct.numReviews}
                      ></Rating>
                    </li>
                    <li>Pirce : ${oneProduct.price}</li>
                    <li>
                      Description:
                      <p>{oneProduct.description}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">${oneProduct.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status: </div>
                          <div>
                            {oneProduct.countInStock > 0 ? (
                              <span className="success">In Stock</span>
                            ) : (
                              <span className="danger">Unavailable</span>
                            )}
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="primary block">Add to Cart</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </Wrapper>
    </>
  )
}
