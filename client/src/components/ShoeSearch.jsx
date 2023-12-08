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

        const url = 'http://localhost:3001/api/shoes';
        const data = { soleCM: footData.soleCM };

        fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        // handle the response data
        console.log(data);
        })
        .catch(error => {
        // handle the error
        console.error('Error:', error);
        });



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