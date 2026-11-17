import React from 'react';
function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 25000 },
    { id: 3, name: 'Headphones', price: 2000 }
  ];
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>My E-Commerce Store</h1>
      <h2>Available Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
