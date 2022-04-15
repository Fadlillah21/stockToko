const Card = ({ image, harga, stock }) => {
  return (
    <div>
      <div className="container mb-4 mt-3">
        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="image"  alt="..." />
            <div className="card-body">
              <h5 className="harga">{harga}</h5>
              <p className="content">
                <label className="stock">Stock: {stock}</label><br/>
              </p>
              <a href="#" className="btn btn-primary">
                Chekout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;