// import React from 'react'
import { useParams } from 'react-router-dom';
const MyStore = () => {
    const { storeName } = useParams<{ storeName: string }>();
  return (
    <div>
        {/* Display the store name after converting it back from the URL format */}
        <h1>Welcome to {storeName?.split('-').join(' ')}'s Store</h1>
    </div>
  )
}

export default MyStore
