import "./style.css";
import { renderHomePage } from "./homePageController.js";
import { renderMenuPage } from "./menuPageController.js";

const ScreenController = (function (doc) {
  const homeBtn = doc.querySelector(".tabs .btn-home");
  const menuBtn = doc.querySelector(".tabs .btn-menu");
  // doc.querySelector("#content").replaceChildren();
  homeBtn.addEventListener("click", renderHomePage);
  menuBtn.addEventListener("click", renderMenuPage);

  // renderHomePage(doc);
})(document);
