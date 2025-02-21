import { useState } from "react";
import { useEffect } from "react";
import "./ColorPickerApp.css";

function TitleApp() {
  return <h1>Color Picker App</h1>;
}

function InputBodyColor({ bodyColor, onSetBodyColor, onResetBodyColor }) {
  return (
    <div className="input_set">
      <p>Set the application background color:</p>
      <input
        type="text"
        value={bodyColor}
        onChange={(event) => onSetBodyColor(event.target.value)}
        placeholder="#RRGGBB"
      />
      <button onClick={() => onResetBodyColor()}>
        Reset application color
      </button>
    </div>
  );
}

function InputCircleColor({ bckcolor, onSetCircleColor, onResetColor }) {
  return (
    <div className="input_set">
      <p>Set the circle background color:</p>
      <input
        type="color"
        value={bckcolor}
        onChange={(event) => onSetCircleColor(event.target.value)}
      />
      <button onClick={() => onResetColor("#ffffff")}>
        Reset circle color
      </button>
    </div>
  );
}

function Circle({ bckcolor }) {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: bckcolor,
      }}
    ></div>
  );
}

export default function ColorPickerApp() {
  const [circleColor, setCircleColor] = useState("#ffffff");
  const [bodyColor, setBodyColor] = useState("#222222");

  useEffect(() => {
    if (/^#([0-9A-F]{6})$/i.test(bodyColor)) {
      document.body.style.backgroundColor = bodyColor;
    }
  }, [bodyColor]);

  function handleResetBodyColor() {
    setBodyColor("#222222");
    document.body.style.backgroundColor = "#222222";
  }

  return (
    <div className="app_container">
      <TitleApp />
      <InputBodyColor
        bodyColor={bodyColor}
        onSetBodyColor={setBodyColor}
        onResetBodyColor={handleResetBodyColor}
      />
      <InputCircleColor
        bckcolor={circleColor}
        onSetCircleColor={setCircleColor}
        onResetColor={setCircleColor}
      />
      <Circle bckcolor={circleColor} />
    </div>
  );
}
