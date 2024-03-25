import { useState } from "react";
import React from "react";
import { marked } from "marked";
import "./styles.css";

function RenderHTMLString({ htmlString }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlString,
      }}
    />
  );
}

function App() {
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const md = marked.parse(e.target.value);
    setMessage(md);
  };

  return (
    <>
      <h1 className="heading-h1">Markdown Editor</h1>
      <div className="container">
        <div className="editor">
          <h2>Editor</h2>
          <textarea
            class="editor-textarea"
            type="text"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="preview">
          <h2>Preview</h2>
          <div id="previewContent">
            <RenderHTMLString htmlString={message} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
