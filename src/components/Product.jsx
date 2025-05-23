import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProd } from '../JS/actions/prodAction'
import EditProd from './EditProd'
import Book from './Book'

const Product = ({ product, all }) => {
  const dispatch = useDispatch()
  const [showBooking, setShowBooking] = useState(false)

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProd(product._id))
    }
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.title}
          style={{
            height: '200px',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            padding: '15px'
          }}
        />
        <Card.Body>
          <Card.Text style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
            {product.club}
          </Card.Text>
          <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#555' }}>
            {product.price} $
          </Card.Text>

          {all ? (
            <div className="d-flex justify-content-center flex-row gap-3">
              <Link to={`/products/${product._id}`}>
                <Button variant="primary" style={{ backgroundColor: '#67777f', border: 'none' }}>
                  Details
                </Button>
              </Link>
              <Button
                variant="primary"
                onClick={() => setShowBooking(true)}
                style={{ backgroundColor: '#67777f', border: 'none' }}
              >
                Book
              </Button>
            </div>
          ) : (
            <>
              <Button variant="danger" onClick={handleDelete} style={{ maxWidth: '100%', marginRight: '20px' }}>
                Delete
              </Button>
              <EditProd product={product} />
            </>
          )}
        </Card.Body>
      </Card>

      <Book
        product={product}
        show={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </div>
  )
}

export default Product
