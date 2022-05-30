import { magicMouse } from "magicmouse.js";
import anime from "animejs/lib/anime.es.js";

const options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 40,
  outerHeight: 40,
};
magicMouse(options);

//Object
document.addEventListener("DOMContentLoaded", () => {
  const headerTimeline = anime.timeline({});

  headerTimeline
    .add({
      targets: ".fidget",
      width: ["0px", "700px"],
      duration: 1000,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".image-container",
      width: ["0", "100%"],
      duration: 1000,
      easing: "easeInOutQuad",
    })
    .add({
      targets: [".image-text > div > h2"],
      translateY: ["100px", "0%"],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".inner-see-project-button",
      translateY: ["100px", "0%"],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".out-see-project-button",
      opacity: [0, 1],
      translateY: ["200px", "0%"],
      duration: 500,
      easing: "easeInOutQuad",
    });
});
