import { useState, useEffect } from "react";
import { sendSize } from "../../utils/API";
import Results from "./Results";

export default function ShoeSearch() {
  const [footData, setFootData] = useState({
    leftFoot: "",
    rightFoot: "",
    soleCM: "",
  });

  const [shoeResults, setShoeResults] = useState([]);

  const [searchPerformed, setsearchPerformed] = useState(false);

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
          setsearchPerformed(true);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [footData.leftFoot, footData.rightFoot, footData.soleCM]);

  return (
    <>
    <div id="backgroundBlock">
      <div className="container" id="form">
        <div className="row">
          <div className="col d-flex  justify-content-center">
            <form onSubmit={handleSubmit} className="vstack gap-2">
              <label htmlFor="leftFoot">Left Foot Measurement</label>
              <input
                type="number"
                name="leftFoot"
                value={footData.leftFoot}
                onChange={handleChange}
              />
              <label htmlFor="rightFoot">Right Foot Measurement</label>
              <input
                type="number"
                name="rightFoot"
                value={footData.rightFoot}
                onChange={handleChange}
              />
              <div className="text-center">
              <button type="submit" id="submitButton">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
      <Results shoeResults={shoeResults} searchPerformed={searchPerformed}/>
    </>
  );
}
