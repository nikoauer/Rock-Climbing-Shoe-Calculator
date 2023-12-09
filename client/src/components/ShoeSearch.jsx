import { useState, useEffect } from "react";
import { sendSize } from "../../utils/API"

export default function ShoeSearch() {
 const [footData, setFootData] = useState({
   leftFoot: "",
   rightFoot: "",
   soleCM: "",
 });

 const [shoeResults, setShoeResults] = useState([]);

 const handleChange = (event) => {
   const { name, value } = event.target;
   setFootData((pastFootData) => ({
     ...pastFootData,
     [name]: value,
   }));
 };

 const handleSubmit = async (event) => {
   event.preventDefault();
   if (footData.leftFoot && footData.rightFoot) {
     setFootData((pastData) => ({
       ...pastData,
       soleCM:
         (parseFloat(footData.leftFoot) + parseFloat(footData.rightFoot)) / 2,
     }));
   }
 };

 useEffect(() => {
   if (footData.leftFoot && footData.rightFoot && footData.soleCM) {
     (async () => {
       try {
         const data = { soleCM: footData.soleCM };
         const response = await sendSize(data);
         const shoeInfo = await response.json();
         if (!response.ok) {
           throw new Error("Something went wrong!");
         }
         setShoeResults(shoeInfo);
       } catch (error) {
         console.error(error);
       }
     })();
   }
 }, [footData.leftFoot, footData.rightFoot, footData.soleCM]);

 return (
   <div>
     <div>
       <form onSubmit={handleSubmit}>
         <input
           type="number"
           name="leftFoot"
           value={footData.leftFoot}
           onChange={handleChange}
         />
         <input
           type="number"
           name="rightFoot"
           value={footData.rightFoot}
           onChange={handleChange}
         />
         <button type="submit">Submit</button>
       </form>
     </div>
     {shoeResults.length > 0 && shoeResults.map(shoe => (
       <div key={shoe._id}>
         <h2>{shoe.Name}</h2>
         <p>{shoe.Model}</p>
         <img src={shoe.imageUrl} alt={shoe.Name} />
       </div>
     ))}
   </div>
 );
}
