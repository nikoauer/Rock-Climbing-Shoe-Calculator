export default function Results ({ shoeResults }) {
    return (
      <>
        {shoeResults.length > 0 &&
          shoeResults.map((shoe) => (
            <div key={shoe._id}>
              <h2>{shoe.Name}</h2>
              <p>{shoe.Model}</p>
              <img src={shoe.imageUrl} alt={shoe.Name} />
              <p>{shoe.USMens}</p>
              <p>{shoe.USWomens}</p>
              <p>{shoe.EUSize}</p>
              <p>{shoe.UKSize}</p>
              <p>{shoe.soleCM}</p>
              <p>{shoe.toeBox}</p>
              <p>{shoe.Width}</p>
              <p>{shoe.productUrl}</p>
            </div>
          ))}
      </>
    );
   };
   