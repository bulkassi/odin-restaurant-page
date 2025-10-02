import "./style.css";
import { renderAboutPage } from "./aboutPageController.js";
import { renderMenuPage } from "./menuPageController.js";

const ScreenController = (function (doc) {
  const homeBtn = doc.querySelector(".tabs .btn-home");
  const menuBtn = doc.querySelector(".tabs .btn-menu");
  doc.querySelector("#content").replaceChildren();
  homeBtn.addEventListener("click", renderAboutPage);
  menuBtn.addEventListener("click", renderMenuPage);

  renderAboutPage(doc);
})(document);
