import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Home from './pages/Home';
import Services from './pages/Services';
import References from './pages/References';
import AboutUs from './pages/AboutUs';

import './App.css';

import messages_de from './locales/de.json';
import messages_fr from './locales/fr.json';
import AppContext from './store/AppContext';

const messages = {
  de: messages_de,
  fr: messages_fr,
};

function App() {
  const [locale, setLocale] = useState('de');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AppContext.Provider value={[locale, setLocale]}>
        <Router>
          <Switch>
            <Route path='/referenzen'>
              <References />
            </Route>

            <Route path='/ueber-uns'>
              <AboutUs />
            </Route>

            <Route path='/unser-leistungsangebot'>
              <Services />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </IntlProvider>
  );
}

export default App;
