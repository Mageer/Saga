import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import lime from '@material-ui/core/colors/lime';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime[200],
    },
    //type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
