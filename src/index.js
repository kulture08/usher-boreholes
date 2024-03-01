import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
  // import "./Goldplay-SemiBoldIt.woff"
import GlobalStyles from './theme/Global Styles'
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          
         <GlobalStyles />
        <App />
    </ThemeProvider>
    </React.StrictMode>
)


