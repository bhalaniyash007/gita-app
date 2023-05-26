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
  const baseUrl = "https://bhagavadgitaapi.in/slok/4/3/";
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setShlokData(response.data);
    });
  }, []);
  return (
    <>
      <h1>Shlok Data</h1>
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
