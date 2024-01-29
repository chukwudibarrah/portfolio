import ReactGA from "react-ga4";

export const trackLinkClick = (label) => {
  ReactGA.send({
    hitType: "event",
    eventCategory: "Link",
    eventAction: "Click",
    eventLabel: label,
  });
};