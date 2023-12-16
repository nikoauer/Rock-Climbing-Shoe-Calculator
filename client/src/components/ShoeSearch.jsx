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

  const [reset, setReset] = useState(false)

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

  const handleReset = () => {
    setFootData({
      leftFoot: "",
      rightFoot: "",
      soleCM: "",
    });
    setShoeResults([]);
    setsearchPerformed(false);
    setReset(true);
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

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  return (
    <>
      <div id="backgroundBlock">
        <div className="container" id="form">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <form onSubmit={handleSubmit} className="vstack gap-2">
                <label htmlFor="leftFoot" className="text-center">Left Foot Measurement</label>
                <input
                placeholder="Input in cm"
                  type="number"
                  name="leftFoot"
                  value={footData.leftFoot}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <form onSubmit={handleSubmit} className="vstack gap-2">
                <label htmlFor="rightFoot" className="text-center">Right Foot Measurement</label>
                <input
                placeholder="Input in cm"
                  type="number"
                  name="rightFoot"
                  value={footData.rightFoot}
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 text-center">
              <button type="submit" id="submitButton">
                Submit
              </button>
            </div>
          </div>
          </form>
          <div className="row">
            <div className="col-12 text-center">
              {searchPerformed && (
                <button type="button" onClick={handleReset} id="resetButton">
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Results shoeResults={shoeResults} searchPerformed={searchPerformed} footData={footData}/>
    </>
  );
  
}
