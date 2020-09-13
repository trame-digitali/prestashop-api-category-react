import React from 'react';
import ReactDOM from 'react-dom';
import Looks from './Looks.jsx';
import Lookslider from './Lookslider.jsx';

ReactDOM.render(
  <React.StrictMode>
    {document.getElementById('looks-root').getAttribute('data-slider')
    ? <Lookslider
      api_protocol = {document.getElementById('looks-root').getAttribute('data-api-protocol')}
      token = {document.getElementById('looks-root').getAttribute('data-token')}
      api_url= {document.getElementById('looks-root').getAttribute('data-api-url')}
      id_category= {document.getElementById('looks-root').getAttribute('data-id-category')}
    />
    : <Looks
      api_protocol = {document.getElementById('looks-root').getAttribute('data-api-protocol')}
      token = {document.getElementById('looks-root').getAttribute('data-token')}
      api_url= {document.getElementById('looks-root').getAttribute('data-api-url')}
      id_category= {document.getElementById('looks-root').getAttribute('data-id-category')}
    />}
    {console.log(document.getElementById('looks-root').getAttribute('data-slider'))}
  </React.StrictMode>,
  document.getElementById('looks-root')
);
