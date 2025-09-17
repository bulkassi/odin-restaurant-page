import "./style.css";
import { renderAboutPage } from "./aboutPageController.js";

const ScreenController = (function (doc) {
  renderAboutPage();
})(document);
