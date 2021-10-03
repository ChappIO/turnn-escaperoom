import React from 'react';
import {Layout} from "../components/Layout";
import {HeaderImage} from "../components/HeaderImage";
import fiets from "../images/rutte_fiets.jpeg";
import {TranslateModal} from "../components/TranslateModal";


export function ArticleNL() {

    return (
        <Layout>
            <TranslateModal goto="/en"/>
            <HeaderImage src={fiets}
                         header="Fietsen bewezen een vruchtbare oplossing om ziekteverzuim terug te dringen"/>
            <p className="abstract">
                Mensen die op de fiets reizen, blijken meer vitaliteit te hebben dan niet-fietsers tegenhangers. Recent
                onderzoek van TNO onderstreept het belang voor werkgevers om werknemers te stimuleren om fysiek actief
                zijn.
            </p>
            <p>
                Het onderzoek vergeleek verschillende maatregelen die werkgevers kunnen nemen om het ziekteverzuim in
                hun bedrijf te verminderen. Van de drie meest veelbelovende: coaching, personeelsuitjes en
                woon-werkverkeer op de fiets, bleek de laatste het te doen het meest efficiënt zijn. Hoewel coaching en
                personeelsuitjes geweldige manieren zijn om de vitaliteit van medewerkers te verbeteren, ze komen
                allebei met een flink prijskaartje. Eén dag per week een fiets pakken in plaats van een auto is echter
                gratis, terwijl het grote voordelen biedt met betrekking tot ziekteverzuimnummers.
            </p>
        </Layout>
    )
}
