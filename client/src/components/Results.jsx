export default function Results ({ shoeResults, searchPerformed, footData }) {

    const getFeedbackFormLink = (shoe) => {
      // Replace 'YOUR_FORM_ID' with the actual ID of your Google Form
      const formId = '1FAIpQLSe6GIDD2xVgiblGrMyJJveKd8Q48DaNWWrOskQfqhP7kE3Uhg';
     
      // Replace 'LEFT_FOOT' and 'RIGHT_FOOT' with the actual field names in your Google Form
      const leftFootFieldName = 'entry.2125236691';
      const rightFootFieldName = 'entry.1055003517';
     
      // Create the pre-filled form link with left foot and right foot measurements
      const feedbackLink = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=pp_url&${leftFootFieldName}=${footData.leftFoot}&${rightFootFieldName}=${footData.rightFoot}`;
     
      return feedbackLink;
     };

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
                    <p>Sole Size (centermeters): {shoe.soleCM}</p>
                    <p>Toe box: {shoe.toeBox}</p>
                    <p>Shoe width: {shoe.Width}</p>
                    <div className="row justify-content-center">
                    <button id="purchaseButton"><a id="anchor" href={shoe.productUrl} target="_blank" rel="noopener noreferrer">Shop Now</a></button>
                    </div>
                    <div className="row justify-content-center"> 
                    <button id="feedbackButton">
                      <a
                        id="anchor"
                        href={getFeedbackFormLink(shoe)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Provide Feedback
                      </a>
                    </button>
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