import React, { useState } from "react";
import { API_TOKEN } from "../firebase-config";
import { CircularIndeterminate } from "../loadinganimation"
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';


const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = output;
    link.download = "art.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (<div className="container imageGen al-c mt-3">
    <h1>Stable <span>Diffusion</span></h1>
    <p>Pellentesque vulputate dignissim enim, et sollicitudin massa pellentesque ut. Proin luctus dui ut sem varius eleifend.</p>
    <form className="generate-form" onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="type your prompt here..." />
      <button type="submit" className="button">Generate</button>
    </form>
    <div>
    {loading && <div className="loading"><CircularIndeterminate/></div>}
    {!loading && output && (
      <div className="result-image">
        <img src={output} alt="art"  />
        <div>
            <button onClick={downloadImage}><DownloadIcon/></button>
            <button><ShareIcon/></button>
        </div>
      </div>
    )}
    </div>

    </div>);
  
};

export default ImageGenerationForm;