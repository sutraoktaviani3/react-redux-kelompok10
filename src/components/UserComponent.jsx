// src/components/UserComponent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';
import './styles.css';

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="user-details">
        <h2>User Details</h2>
        {userData?.map((item) => (
          <div key={item.id} className="user-item">
            <span>Name: {item.name}</span>
            <span>Email: {item.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserComponent;
