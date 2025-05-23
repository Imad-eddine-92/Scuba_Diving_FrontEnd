import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProds } from '../JS/actions/prodAction';
import ProdsList from '../components/ProdsList';
import Carosel from '../components/Carosel';



const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.prodReducer.products)
  
  useEffect(() => {
    dispatch(getAllProds())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      
     
      <Carosel/>
    
      <ProdsList products={products} all={true} />
    </div>
  )
}

export default Home
