import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadSpin from '../components/LoadSpin';
import { getMyProds } from '../JS/actions/prodAction';
import { getMyBooks } from '../JS/actions/bookAction';
import ProdsList from '../components/ProdsList';
import AddProd from '../components/AddProd';
import MyBooksList from '../components/MyBooksList';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.authReducer.user);
  const isLoad = useSelector(state => state.authReducer.isLoad);
  const myProducts = useSelector(state => state.prodReducer.myProducts) || []; // fallback []
  const { myBooks = [], loading: booksLoading, error: booksError } = useSelector(state => state.bookReducer); // fallback []

  useEffect(() => {
    dispatch(getMyProds());
    dispatch(getMyBooks());
  }, [dispatch]);
// console.log('myBooks dans Profile:', myBooks);
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '40px' }}>
      {isLoad && <LoadSpin />}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '80px',
        padding: '40px',
        gap: '100px',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Hello {user?.name || 'Utilisateur'}</h3>
          <img
            src="https://img.freepik.com/free-vector/boy-diving-gears-white_1308-41201.jpg"
            alt="profile"
            width="130px"
            style={{ borderRadius: '20%', marginTop: '10px' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <AddProd />
          <img
            src="https://i.etsystatic.com/20162739/r/il/bdad22/1910170242/il_1080xN.1910170242_c3ga.jpg"
            alt="robot"
            width="300px"
            style={{ marginTop: '20px', borderRadius: '20%' }}
          />
        </div>
      </div>

      <h4 style={{ marginBottom: '20px' }}>Scuba-Diving</h4>
      <ProdsList products={myProducts} all={false} />

      <h4 style={{ marginTop: '50px', marginBottom: '20px' }}>Mes réservations</h4>
      <MyBooksList books={myBooks} loading={booksLoading} error={booksError} />
    </div>
  );
};

export default Profile;
