import "./App.css";
import { useState, useEffect } from "react";
import { imageList } from "./constant";
const http1BaseUrl = "http://localhost:3000/";
const http2BaseUrl = "https://localhost:3000/";
function App() {
  function MyComponent() {
    const [html, setHTML] = useState({ __html: "" });

    useEffect(() => {
      async function createMarkup() {
        let response;
        response = await fetch(`${http2BaseUrl}sample`);
        const backendHtmlString = await response.text();

        console.log(backendHtmlString);
        return { __html: backendHtmlString };
      }
      createMarkup().then((result) => setHTML(result));
    }, []);

    return <div dangerouslySetInnerHTML={html} />;
  }
  /**
   * @param { Promise } promise
   * @param { Object= } errorExt - Additional Information you can pass to the err object
   * @return { Promise }
   */
  return (
    <div className="App">
      <header className="App-header">
        <div className="imageContainer">
          {imageList.map((imageGroup) => (
            <div className="imageRow">
              {imageGroup.map(({ url, name }) => (
                <img src={`${http2BaseUrl}${url}`} alt={name} />
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
