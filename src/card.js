import React from 'react';

const Apps = ({ data }) => {
  const cards = data.map((item, index) => (
    <div className="card mx-3" style={{ width: '18rem' }} key={index}>
      <img src="/images/images.jpg" className="card-img-top" alt="Image description" />
      <div className="card-body">
        <h5 className="card-title">{item.cardtitle}</h5>
        <p className="card-text">{item.description}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ));

  return <div className="container d-flex p-2">{cards}</div>;
};

export default Apps;
