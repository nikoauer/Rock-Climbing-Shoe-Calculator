import { useState, useEffect } from "react"

export default function ShoeSearch () {
    const [footData, setFootData] = useState({
        leftFoot: "",
        rightFoot: "",
        soleCM: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFootData((pastFootData) => ({
          ...pastFootData,
          [name]: value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (footData.leftFoot && footData.rightFoot) {
            setFootData(pastData => ({
                ...pastData, 
                soleCM: (parseFloat(footData.leftFoot) + parseFloat(footData.rightFoot)) / 2
            }))
        } else {
            console.log("Please fill both input fields");
        }
      };

      useEffect(() => {
        fetch('')
    }, [footData.soleCM]);


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