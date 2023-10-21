import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./component/Count/Counter";
import ListCard from "./component/Card/Card";
import CounterPlus from "./component/Count/CounterPlus";
import Accordion from "./component/Accordion/AccordionItem";
import AccordionPlus from "./component/Accordion/AccordionPlus";
import Counta from "./component/Count/Counta";
import TestExp from "./component/Accordion/TestExp";
import CurrencyConvert from "./component/Currency/CurrencyConvert";
import UseGeoLocation from "./component/Locate/UseGeoLocation";

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
        <App />
        <Counter/>
        <ListCard/>
        <CounterPlus/>
        <Accordion/>
        <AccordionPlus/>
        <Counta/>
        <TestExp
            className="txt-exp-cont"
            colorBtn="red"
            txtExpand='Voir plus'
            txtCollapse='Voir moin'
            firstCharVisible={40}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, sem ut mattis aliquet, ligula odio gravida nulla, vitae accumsan libero diam et turpis. Etiam volutpat dolor ante, quis fringilla tortor tempor sed. Integer ut metus nisi. Nulla sodales purus a arcu placerat auctor. Nam ac molestie tellus
        </TestExp>
          <TestExp>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, sem ut mattis aliquet, ligula odio gravida nulla, vitae accumsan libero diam et turpis. Etiam volutpat dolor ante, quis fringilla tortor tempor sed. Integer ut metus nisi. Nulla sodales purus a arcu placerat auctor. Nam ac molestie tellus
          </TestExp>
          <TestExp >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, sem ut mattis aliquet, ligula odio gravida nulla, vitae accumsan libero diam et turpis. Etiam volutpat dolor ante, quis fringilla tortor tempor sed. Integer ut metus nisi. Nulla sodales purus a arcu placerat auctor. Nam ac molestie tellus</TestExp>

          <CurrencyConvert/>
          <UseGeoLocation/>
  </React.StrictMode>
);

