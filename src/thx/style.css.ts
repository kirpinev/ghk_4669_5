import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  textAlign: "center",
  height: "100vh",
  margin: "0 auto",
});

const rocket = style({
  // marginTop: "5rem",
});

export const thxSt = {
  container,
  rocket,
};
