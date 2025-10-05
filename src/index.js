import "./style.css";
import { renderHomePage } from "./homePageController.js";
import { renderMenuPage } from "./menuPageController.js";
import { renderContactPage } from "./contactPageController.js";

const ScreenController = (function (doc) {
  const homeBtn = doc.querySelector(".tabs .btn-home");
  const menuBtn = doc.querySelector(".tabs .btn-menu");
  const contactBtn = doc.querySelector(".tabs .btn-contact");
  homeBtn.addEventListener("click", renderHomePage);
  menuBtn.addEventListener("click", renderMenuPage);
  contactBtn.addEventListener("click", renderContactPage);

  renderHomePage();
})(document);
