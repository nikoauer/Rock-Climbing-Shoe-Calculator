export default function Results ({ shoeResults, searchPerformed }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {shoeResults.length > 0 ? (
          shoeResults.map((shoe) => (
            <div key={shoe._id} className="col-md-5" id="cards">
              <div className="mb-4">
                  <h2>{shoe.Name}</h2>
                  <p>{shoe.Model}</p>
                  <img src={shoe.imageUrl} alt={shoe.Name} className="img-fluid" />
                  <div className="shoe-details">
                    <p>US Mens: {shoe.USMens}</p>
                    <p>US Womens: {shoe.USWomens}</p>
                    <p>EU Size: {shoe.EUSize}</p>
                    <p>UK Size: {shoe.UKSize}</p>
                    <p>Sole Size (centermeters):{shoe.soleCM}</p>
                    <p>Toe box: {shoe.toeBox}</p>
                    <p>Shoe width: {shoe.Width}</p>
                    <div className="row justify-content-center">
                    <button id="purchaseButton"><a id="anchor" href={shoe.productUrl} target="_blank" rel="noopener noreferrer">Buy Here</a></button>
                    </div>
                  </div>
              </div>
            </div>
          ))
        ) : (
          searchPerformed && <h3 className="col-12 text-center">No Shoes found</h3>
        )}
      </div>
    </div>
  );
}