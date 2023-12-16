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
                  <h4>{shoe.Name} {shoe.Model}</h4>
                  <img src={shoe.imageUrl} alt={shoe.Name} className="img-fluid" />
                    <table id="tableData">
                      <tbody>
                        <tr>
                          <td>US Mens</td>
                          <td className="data">{shoe.USMens}</td>
                        </tr>
                        <tr>
                          <td>US Womens</td>
                          <td className="data">{shoe.USWomens}</td>
                        </tr>
                        <tr>
                          <td>EU Size</td>
                          <td className="data">{shoe.EUSize}</td>
                        </tr>
                        <tr>
                          <td>UK Size</td>
                          <td className="data">{shoe.UKSize}</td>
                        </tr>
                        <tr>
                          <td>Sole Size (cm)</td>
                          <td className="data">{shoe.soleCM}</td>
                        </tr>
                        <tr>
                          <td>Toe box</td>
                          <td className="data">{shoe.toeBox}</td>
                        </tr>
                        <tr>
                          <td>Shoe width</td>
                          <td className="data">{shoe.Width}</td>
                        </tr>
                      </tbody>
                    </table>
                  <div className="shoe-details">
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
                        Give Feedback
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