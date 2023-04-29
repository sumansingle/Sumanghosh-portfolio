import React from 'react';
import { render } from 'react-dom';
import { Wave1, Wave2, Random1, Random2 } from './examples.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h1>Examples of react-animated-text:</h1>
    
    <Wave1 />

    <Wave2 />

    <Random1 />

    <Random2 />
  </div>
);

render(<App />, document.getElementById('root'));
