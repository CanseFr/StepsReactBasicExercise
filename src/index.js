import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./Counter";
import ListCard from "./Card";
import CounterPlus from "./CounterPlus";
import Accordion from "./AccordionItem";
import AccordionPlus from "./AccordionPlus";
import Counta from "./Counta";
import TestExp from "./TestExp";
import CurrencyConvert from "./CurrencyConvert";
import UseGeoLocation from "./UseGeoLocation";

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
                Salut je suis un fou dans ma tete
                depuis que j'ai validé ma licence
                toussa ouais ouais lafamille on est
                la, pif paf pouf dans ta tete et dans
                ton cul ouais ouais sisi la famille
                yoyoyoyo, vive la bretagne les moules
                qui sente bon la chatte toussa
        </TestExp>
          <TestExp>
                  Salut je suis un fou dans ma tete
                  depuis que j'ai validé ma licence
                  toussa ouais ouais lafamille on est
                  la, pif paf pouf dans ta tete et dans
                  ton cul ouais ouais sisi la famille
                  yoyoyoyo, vive la bretagne les moules
                  qui sente bon la chatte toussa
          </TestExp>
          <TestExp >qsdqsdqsdqdqsdqsdqdqsdqsdqsdqsdqsdqsdqsdqsdqsdfdgergqedfvqervqDVerv</TestExp>

          <CurrencyConvert/>
          <UseGeoLocation/>
  </React.StrictMode>
);

