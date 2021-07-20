import React, {Component} from 'react';
import * as data from "../data/data.json";
import axios from "axios";

class MobilePlan extends Component {
   state = {}

   formatPrice = (number) => {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
   }



   render() {

      return (
          <div className={"cart-container"}>
             <div className={"payment-card"}>
                <div className={"gigabytes-section"}>
                   <div className={"gigabytes-section__name"}>
                      <p> {data.headerTitle} </p>
                   </div>
                   <div className={"gigabytes-section__data"}>
                      <span className={"gigabytes-section_data-old"}> {data.dataAlowed} GB </span>
                      <span className={"gigabytes-section_data-new"}> 2 GB </span>
                   </div>
                   <div className={"gigabytes-section__description"}>
                      <p className={"gigabytes-section__description-countries"}> Is ju {data.dataEU} GB ES/EEE </p>
                      <p className={"gigabytes-section__description-callsMessages"}> {data.minSms} </p>
                   </div>
                </div>
                <div className="hr"></div>
                <div className={"advantages-section"}>
                   <div className={"advantages-section__services"}>
                      {data.features.map((oneFeature) => (
                          <i className="fa fa-check">
                             <span>{oneFeature.title}</span>
                          </i>
                         ))}
                   </div>
                </div>
                <div className="hr"></div>
                <div className={"price-section"}>
                   <div className={"price-section__aligned"}>
                      <div className={"price-section__description"}>
                         {!this.props.noCommitment ? this.formatPrice(data.price.comitment) : this.formatPrice(data.price.noComitment)}
                         <span>&euro;/{data.period}</span>
                         {/*<p className={"price-section__price"}> {data.price.commitment} <span>&euro;/{data.period}</span></p>*/}
                         <p className={"price-section__length"}> {data.contractLength.commitment} </p>

                      </div>
                      <button className={"price-section__button"}> {data.ctaButton}</button>
                   </div>
                </div>
             </div>
          </div>
      );
   }
}

export default MobilePlan;