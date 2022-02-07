import { Button } from "@mui/material";
import React, { useMemo } from "react";
import theme from "../../common/theme";
import { css } from "@emotion/react";
import { flexbox } from "@mui/system";
import MainLogo from "../../common/logo";
import { useWindowSize } from "../../common/hooks";

/** @jsxImportSource @emotion/react */

const strip = css({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flex: 4,
  fontSize: "700%",
});

function LangingPage() {
  const windowSize = useWindowSize();
  const horizontalSpacer = useMemo(
    () =>
      css({
        width: windowSize.width ? windowSize.width / 4 : "0px",
      }),
    [windowSize]
  );

  const handleClick = () => {
    console.log("yay");
  };

  return (
    <div
      id="screen"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        height: windowSize.height,
      }}
    >
      <div style={{ flex: 2 }}>
        <MainLogo />
      </div>
      <div css={strip}>Find the perfect business partner</div>
      <div
        style={{
          flex: 4,
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          fontSize: "300%",
          fontStyle: "italic",
        }}
      >
        <div id="left-part" style={{ display: "flex", flexDirection: "row" }}>
          <span css={horizontalSpacer}></span>
          <span>Explore thousands of potential teammates </span>
        </div>
        <div
          id="right-part"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <span css={horizontalSpacer}></span>
          <span>and find the one that will help make it a reality</span>
        </div>
      </div>
      <div
        id="bottom"
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div>
          <Button
            css={{ fontSize: "250%" }}
            variant="contained"
            onClick={handleClick}
          >
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LangingPage;
