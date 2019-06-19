import React from "react";
import ReusableButton from "./cards/reusableButton";
import CardComponent from "./cards/cardComponent";

class ReusableComponents extends React.Component {
  onClick(e) {
    console.log("Button was Clicked..!! " + e);
    alert("Button Number is : " + e);
  }
  render() {
    return (
      <>
        <div className="row class-sm-12">
          <CardComponent
            cardColClass={"col-sm-3"}
            cardBorder={"card border-default mx-1"}
            cardTitle={"First Card"}
            cardText={"Sample Card 1"}
          >
            <ReusableButton
              className={"btn btn-sm btn-success"}
              onClick={e => this.onClick("btn-1")}
              buttonText={"Button 1"}
            />
          </CardComponent>

          <CardComponent
            cardColClass={"col-sm-3"}
            cardBorder={"card border-default mx-1"}
            cardTitle={"Second Card"}
            cardText={"Sample Card 2"}
          >
            <ReusableButton
              className={"btn btn-sm btn-danger"}
              onClick={e => this.onClick("btn-2")}
              buttonText={"Button 2"}
            />
          </CardComponent>

          <CardComponent
            cardColClass={"col-sm-3"}
            cardBorder={"card border-default mx-1 "}
            cardTitle={"Third Card"}
            cardText={"Sample Card 3"}
          >
            <ReusableButton
              className={"btn btn-sm btn-dark"}
              onClick={e => this.onClick("btn-3")}
              buttonText={"Button 3"}
            />
          </CardComponent>
        </div>
      </>
    );
  }
}

export default ReusableComponents;
