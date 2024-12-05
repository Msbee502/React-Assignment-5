import { useState } from "react";
import Axios from "axios";
import "../styles/home.css";

function Home() {
  // State to hold the input text and translated text
  const [translate, setTranslate] = useState("");
  const [originalText, setOriginalText] = useState(""); // Track the input text

  // Function to call the translation API
  const translateText = () => {
    Axios.get(`https://api.funtranslations.com/translate/minion.json?text=${originalText}`)
      .then((res) => {
        // Update the translated text
        setTranslate(res.data.contents.translated);
      })
      .catch((err) => {
        console.error("Error during translation:", err);
      });
  };

  return (
    <div className="formMinion">
      {/* Input field for the original text */}
      <div>
        <input className="input"
          type="text" 
          placeholder="Type the text you wish to translate"
          value={originalText} 
          onChange={(e) => setOriginalText(e.target.value)} // Update originalText state as user types
        />
      </div>

      {/* Button to trigger the translation */}
      <button onClick={translateText}>Translate to Minion</button>

      {/* Display the translated text */}
      <div className="translatedText">Translated Text: {translate}</div>
    </div>
  );
}

export default Home;
