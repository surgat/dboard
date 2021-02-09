import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
