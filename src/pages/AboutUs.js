import React from 'react';
import { FormattedMessage } from 'react-intl';

import Header from '../components/Header/Header';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import Sponsor from '../components/Sponsor/Sponsor';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const txt = (
  <p>
    <FormattedMessage
      id='aboutMeDesc1'
      defaultMessage=' Ich heisse Faton Sadriu und bin seit mehr als 18 Jahren auf dem Gebiet der
    Abdichtung tätig. Den Beruf des Polybauers hat bereits mein Vater erlernt
    und mir und meinem Bruder ebenfalls als Grundausbildung nahe gelegt. Der
    Polybauer kennt sich nicht nur auf dem Gebiet der Abdichtungen aus. Diese
    Ausbildung lehrte uns Durchhaltevermögen, Zuverlässigkeit und ein hohes
    Qualitätsdenken. Bei den Schweizerischen Berufsmeisterschaften erzielte ich
    im Jahr 2013 den dritten Rang im Bereich Abdichtungstechnik. Dass uns dieser
    Beruf fast im Blut liegt, bewies auch mein Bruder Drin Sadriu, der nicht nur
    Schweizermeister sondern auch die Weltmeisterschaften im Bereich Abdichten
    gewann.'
    />
    <br />
    <br />
    <FormattedMessage
      id='aboutMeDesc2'
      defaultMessage='Meine Berufserfahrung habe ich bei grossen Bauunternehmen in der Region Bern
      und Thun gesammelt und durfte viele wertvolle Kontakte aufbauen. Mit der
      Weiterbildung zum Objektleiter habe ich auch die schulischen Grundlagen
      erlernt, die unerlässlich für eine professionelle Abwicklung einer Baustelle
      nötig sind.'
    />
    <br /> <br />
    <FormattedMessage
      id='aboutMeDesc3'
      defaultMessage='Mit mir gewinnen Sie einen zuverlässigen und erfahrenen Unternehmer, der Ihr
      Bauprojekt zu Ihrer vollsten Zufriedenheit abwickeln wird. Ich freue mich
      auf Ihre Kontaktaufnahme und eine langjährige Geschäftsbeziehung.'
    />
  </p>
);

function AboutUs() {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <AboutBanner text={txt} isButtonVisible={false} />
      </div>
      <Team />
      <Contact />
      <Sponsor />
      <Footer />
    </React.Fragment>
  );
}

export default AboutUs;
