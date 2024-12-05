import { useState } from "react";
import Axios from "axios";
import "../styles/products.css";


function Products() {
  const [translate, setTranslate] = useState("");
  const [originalText, setOriginalText] = useState("");

  const translateText = () => {
    if (!originalText.trim()) {
      setTranslate("Please enter text to translate.");
      return;
    }
    Axios.get(`https://api.funtranslations.com/translate/minion.json?text=${encodeURIComponent(originalText)}`)
      .then((res) => {
        if (res.data.contents) {
          setTranslate(res.data.contents.translated);
        } else {
          setTranslate("Translation unavailable.");
        }
      })
      .catch((err) => {
        console.error("Error during translation:", err);
        setTranslate("Error: Translation failed.");
      });
  };

  return (
    <div className="formMinion">
      <input
        className="input"
        type="text"
        placeholder="Type the text you wish to translate"
        value={originalText}
        onChange={(e) => setOriginalText(e.target.value)}
      />
      <button onClick={translateText}>Translate to Minion</button>
      <div className="translatedText">Translated Text: {translate}</div>
    </div>
  );
}

export default Products;
