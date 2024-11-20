import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loading = ({
  size = 80,
  color = "#4fa94d",
  text = "Loading",
  showCircles = true,
  spinSize = 150,
  spinColor = "#4fa94d",
  textColor = "grey",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {showCircles && (
        <InfinitySpin
          height={spinSize}
          width={spinSize}
          color={spinColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="infinity-spin"
          outerSpinColor=""
          innerSpinColor=""
          middleSpinColor=""
        />
      )}
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bolder",
          letterSpacing: "2px",
          ...textStyle,
        }}
      >
        {text}
      </span>
    </div>
  );
};
export default Loading;




