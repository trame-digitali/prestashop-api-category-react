import React from 'react';
import ReactDOM from 'react-dom';
import Looks from './Looks.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Looks
      api_protocol = {document.getElementById('looks-root').getAttribute('data-api-protocol')}
      token = {document.getElementById('looks-root').getAttribute('data-token')}
      api_url= {document.getElementById('looks-root').getAttribute('data-api-url')}
      id_category= {document.getElementById('looks-root').getAttribute('data-id-category')}
    />
  </React.StrictMode>,
  document.getElementById('looks-root')
);
