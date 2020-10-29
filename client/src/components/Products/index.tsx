import React from 'react'
import data from '../../data/data'
import { Link } from 'react-router-dom'
import ProductImage from '../../images/p1.jpg'
export type ProductProps = { data: any[] }
const Product = () => {
  return (
    <div>
     <div className="row center">
              {data.products.map((prod) => (
                <div key={prod._id} className="card">
                  <Link to={`/products/${prod._id}`}>
                    <img className="medium" src={ProductImage} alt="product" />
                  </Link>
                  <div className="card-body">
                    <Link to={`/products/${prod._id}`}>
                      <h2>{prod.name}</h2>
                    </Link>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">${prod.price}</div>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Product
