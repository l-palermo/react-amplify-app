import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

ReactDOM.render(<App />, document.getElementById('root'));
