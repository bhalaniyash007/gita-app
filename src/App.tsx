import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

/**
 * Adi - English Shlok
 * Raman - English Translation
 * Tej.ht - Hindi Shlok
 * Chinmay.hc - Hindi Translation
 *
 */

function App() {
  const [shlokData, setShlokData] = useState({});
  const [chapterNumber, setChapterNumber] = useState(4);
  const [shlokNumber, setShlokNumber] = useState(12);

  // Api Endpoint
  const baseUrl = `https://bhagavadgitaapi.in/slok/${chapterNumber}/${shlokNumber}/`;

  const generateRandom = (maxLimit = 18) => {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setShlokData(response.data);
    });
  }, [baseUrl]);

  const randomShlokGenereHandler = () => {
    setChapterNumber(generateRandom());
    setShlokNumber(generateRandom(20));
  };

  return (
    <>
      <h1>Shlok Data</h1>
      <button
        onClick={() => {
          randomShlokGenereHandler();
        }}
        style={{
          padding: "10px 20px",
          background: "#FFFFFF",
          borderRadius: 8,
          color: "#000000",
        }}
      >
        Generate Random Shlok
      </button>
      <h5>English</h5>
      <h3>{shlokData.adi?.et}</h3>
      <br />
      <p style={{ textAlign: "left", fontSize: "1.2rem", lineHeight: "1.8" }}>
        {shlokData.raman?.et}
      </p>
      <br />
      <h5>Hindi</h5>
      <h3>{shlokData.tej?.ht}</h3>
      <br />
      <p style={{ textAlign: "left", fontSize: "1.2rem", lineHeight: "1.8" }}>
        {shlokData.chinmay?.hc}
      </p>
    </>
  );
}

export default App;
