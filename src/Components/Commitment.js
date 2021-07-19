import React, {Component} from 'react';
import CustomRadio from "./Common/CustomRadio";

class Commitment extends Component {

   render() {

      return (
          <div className={"commitment-component"}>
             <div className={"c__selection"}>
                <span className={"c__select"}>
                   <CustomRadio value="commit"
                                onChecked={!this.props.onCommit}
                                onHandle={this.props.onHandleRadio}>
                      24 men sutartis
                   </CustomRadio>

                </span>
             </div>
             <div className={"c__selection"}>
                <span className={"c__select"}>
                   <CustomRadio value="noCommit"
                                onChecked={this.props.onCommit}
                                onHandle={this.props.onHandleRadio}>
                      Be isipareigojimu
                   </CustomRadio>
                </span>
             </div>
          </div>
      );
   }
}

export default Commitment;