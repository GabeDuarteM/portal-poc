import React from "react";
import ReactDOM from "react-dom";

const style = {
  boom: {
    textAlign: "center"
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  }
};

const handleClose = () =>
  ReactDOM.unmountComponentAtNode(document.getElementById("portal"));

const MrBombastic = props => (
  <h1>
    <HandleTicks {...props} />
    <div style={style.flexCenter}>
      <button onClick={handleClose}>Close</button>
    </div>
  </h1>
);

const HandleTicks = ({ ticks, resetTick, backgroundColor, textColor }) => {
  if (ticks < 1000) {
    return <div style={{ textAlign: "center" }}>{ticks}</div>;
  } else {
    return (
      <div>
        <div style={{ ...style.boom, backgroundColor, color: textColor }}>
          BOOOOOOOOOOOOM!!!
        </div>
        <div style={style.flexCenter}>
          <button onClick={() => resetTick()}>Reset ticks</button>
        </div>
      </div>
    );
  }
};

export default MrBombastic;
