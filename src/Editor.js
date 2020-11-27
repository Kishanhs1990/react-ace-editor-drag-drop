import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/snippets/sql';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-textmate';
import styled from 'styled-components';

const EditorCustom = styled(AceEditor)`
  font-family: monospace !important;
  width: 100% !important;

  .ace_text-input,
  .ace_editor div {
    font-family: monospace !important;
  }
  .ace_active-line {
    font-family: monospace !important;
  }
  .ace_keyword,
  .ace_identifier,
  .ace-cursor {
    font-family: monospace !important;
  }
  .ace_cursor {
    width: 1px !important;
  }
`;

const Editor = () => {
  const [query, setQuery] = useState('');
  const getValue = (value) => {
    setQuery(value);
  };

  return (
    <div style={{marginTop: '100px'}}>
        <div id="drag" draggable="true">Drag me!</div>
        <br />
        <br />
        <br />
        <EditorCustom
            id="dragstart"
            placeholder="Write your query"
            mode="mysql"
            theme="monokai"
            name="blah2"
            onChange={getValue}
            fontSize={14}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={query}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
            onLoad={(editor) => {
                editor.focus();
                document.querySelector("#drag").ondragstart = function(e) {
                    var dataTransfer = e.dataTransfer;
                    dataTransfer.setData("Text", e.target.innerText + "\n");
                  }
              }}
            />
    </div>
  );
};

export default Editor;
