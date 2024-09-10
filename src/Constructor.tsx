import { useState } from "react";
import { MightyWidget } from "mightyiframeintegration";

const WidgetSetup = () => {
    const [url, setUrl] = useState('https://test.mighty.study/TON1');
    const [techStack, setTechStack] = useState('javascript');
    const [mode, setMode] = useState('dark');
    const [size, setSize] = useState(45);
    const [copySuccess, setCopySuccess] = useState('');
    const [copyScriptSuccess, setCopyScriptSuccess] = useState('');
    const [copyWrapperSuccess, setCopyWrapperSuccess] = useState('');

    const updateUrl = (e: any) => setUrl(e.target.value);
    const updateSize = (e: any) => setSize(e.target.value);
    const updateTechStack = (e: any) => setTechStack(e.target.value);
    const updateMode = (e: any) => setMode(e.target.value);

    const copyToClipboard = (text: string, setCopyState: any) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopyState('Copied!');
                setTimeout(() => setCopyState(''), 2000);
            })
            .catch((err) => {
                setCopyState('Failed to copy!');
                console.error('Failed to copy: ', err);
            });
    };

    const previewCode = techStack === 'react'
        ? `<MightyWidget\n  partnerId="TON1"\n  targetUrl="${url}"\n  percent="${size}%"\n  theme="${mode}"\n >\n   <button>Preview Widget</button>\n </MightyWidget>`
        : `<mighty-widget\n partnerid="TON1"\n targeturl="${url}"\n percent="${size}%"\n theme="${mode}"\n>  \n  <button>Preview Widget</button>\n</mighty-widget>`;

    const installOrScriptCode = techStack === 'react'
        ? `npm install mightyiframeintegration`
        : `<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>\n<script>\ndocument.addEventListener('DOMContentLoaded', function() {\n    mightyIframeIntegration.authorizePackage('${mode}');\n});\n</script>`;

    const mightyWrapperCode = techStack === 'react'
        ? `import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App.tsx';\nimport './index.css';\nimport { MightyWrapper } from 'mightyiframeintegration';\n\nReactDOM.render(\n  <React.StrictMode>\n    <MightyWrapper theme="${mode}">\n      <App />\n    </MightyWrapper>\n  </React.StrictMode>,\n  document.getElementById('root')\n);`
        : '';
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>Setup on your website in 5 minutes</h1>

            <div className="form-group">
                <label htmlFor="urlInput">Paste link to Space / Course / Lesson URL</label>
                <input type="text" id="urlInput" value={url} onChange={updateUrl} placeholder="https://test.mighty.study/TON1" />
            </div>

            <div className="form-group">
                <label>Tech Stack:</label>
                <div className="options-row">
                    <div className="option">
                        <input type="radio" id="jsStack" name="techStack" value="javascript" checked={techStack === 'javascript'} onChange={updateTechStack} />
                        <label htmlFor="jsStack">JavaScript</label>
                    </div>
                    <div className="option">
                        <input type="radio" id="reactStack" name="techStack" value="react" checked={techStack === 'react'} onChange={updateTechStack} />
                        <label htmlFor="reactStack">React</label>
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Mode</label>
                    <div className="options-row">
                        <div className="option">
                            <input type="radio" id="darkMode" name="mode" value="dark" checked={mode === 'dark'} onChange={updateMode} />
                            <label htmlFor="darkMode">Dark</label>
                        </div>
                        <div className="option">
                            <input type="radio" id="lightMode" name="mode" value="light" checked={mode === 'light'} onChange={updateMode} />
                            <label htmlFor="lightMode">Light</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="sizeSlider">Size</label>
                    <div className="slider-container">
                        <input type="range" id="sizeSlider" min="20" max="100" value={size} onChange={updateSize} />
                        <span id="sizeValue">{size}</span>
                    </div>
                </div>
            </div>

            <div className="widget-preview">
                <MightyWidget partnerId="TON1" targetUrl={url} percent={`${size}%`} theme={mode}>
                    <button id="previewButton">Preview Widget</button>
                </MightyWidget>
            </div>

            <h2>Installation or Script:</h2>
            <pre style={{ paddingTop: '50px', textAlign: "start", position: 'relative' }} className="code-block">
                {installOrScriptCode}
                <button
                    onClick={() => copyToClipboard(installOrScriptCode, setCopyScriptSuccess)}
                    style={{ position: 'absolute', top: 2, right: 10 }}
                >
                    {copyScriptSuccess ? copyScriptSuccess : "Copy"}
                </button>
            </pre>

            {techStack === 'react' && (
                <>
                    <h2>MightyWrapper Initialization (for React):</h2>
                    <pre style={{ paddingTop: '50px', textAlign: "start", position: 'relative' }} className="code-block">
                        {mightyWrapperCode}
                        <button
                            onClick={() => copyToClipboard(mightyWrapperCode, setCopyWrapperSuccess)}
                            style={{ position: 'absolute', top: 2, right: 10 }}
                        >
                            {copyWrapperSuccess ? copyWrapperSuccess : "Copy"}
                        </button>
                    </pre>
                </>
            )}

            <h2>Generated Code:</h2>
            <pre style={{ paddingTop: '50px', textAlign: "start", position: 'relative' }} className="code-block">{previewCode}<button onClick={() => copyToClipboard(previewCode, setCopySuccess)} style={{ position: 'absolute', top: 2, right: 10 }}>{copySuccess ? copySuccess : "Copy"}</button></pre>
        </div>
    );
};

export default WidgetSetup;