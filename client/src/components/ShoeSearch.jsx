import { useState } from "react"

export default function ShoeSearch () {
    const [footData, setFootData] = useState({
        leftFoot: "",
        rightFoot: ""
    })

    const [shoeData, setShoeData] = useState({
        soleCM: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFootData((prevFootData) => ({
          ...prevFootData,
          [name]: value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (footData.leftFoot && footData.rightFoot) {
            console.log(footData);
        } else {
            console.log("Please fill both input fields");
        }
      };


    return (
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
    )
}