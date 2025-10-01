import "./style.css";
import { renderAboutPage } from "./aboutPageController.js";

const ScreenController = (function (doc) {
  const homeBtn = doc.querySelector(".tabs .btn-home");
  doc.querySelector("#content").replaceChildren();
  homeBtn.addEventListener("click", renderAboutPage(doc));
})(document);
