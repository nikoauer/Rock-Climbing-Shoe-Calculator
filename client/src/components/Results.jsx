export default function Results ({ shoeResults, searchPerformed }) {
  return (
    <div className="container">
      <div className="row">
        {shoeResults.length > 0 ? (
          shoeResults.map((shoe) => (
            <div key={shoe._id} className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>{shoe.Name}</h2>
                  <p>{shoe.Model}</p>
                  <img src={shoe.imageUrl} alt={shoe.Name} className="img-fluid" />
                  <div className="shoe-details">
                    <p>{shoe.USMens}</p>
                    <p>{shoe.USWomens}</p>
                    <p>{shoe.EUSize}</p>
                    <p>{shoe.UKSize}</p>
                    <p>{shoe.soleCM}</p>
                    <p>{shoe.toeBox}</p>
                    <p>{shoe.Width}</p>
                    <p>{shoe.productUrl}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          searchPerformed && <h3 className="col-12">No Shoes found</h3>
        )}
      </div>
    </div>
  );
}