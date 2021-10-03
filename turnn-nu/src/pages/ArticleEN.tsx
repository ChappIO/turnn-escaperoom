import React from 'react';
import {Layout} from "../components/Layout";
import {HeaderImage} from "../components/HeaderImage";
import fiets from "../images/rutte_fiets.jpeg";


export function ArticleEN() {

    return (
        <Layout>
            <HeaderImage src={fiets} header="Cycling proven to be a fruitful solution for reducing sick leave"/>
            <p className="abstract">
                People commuting by bike are shown to have increased vitality, compared to their non-cycling
                counterparts. Recent research by TNO underlines the importance for employers to stimulate employees to
                be physically active.
            </p>
            <p>
                The research compared a variety of measures employers can take, to decrease sick leave in their company.
                Of the three most promising ones: coaching, staff outings, and commuting by bike, the latter proved to
                be the most efficient. While coaching and staff outings are great ways to improve employee vitality,
                they both come with a hefty price-tag. Grabbing a bike instead of a car one day a week, however, is free
                of charge, while providing major benefits regarding sick leave numbers.
            </p>
        </Layout>
    )
}
