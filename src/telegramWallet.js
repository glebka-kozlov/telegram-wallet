import "animate.css";
import "./styles/main.scss";

var webMoneyHeader = new WebMoneyHeader();

webMoneyHeader.init({
  rootElement: document.getElementById("webMoneyHeader"),
  lang: "ru",
  rid: "DDACEB81-AD68-4C26-A3FD-AF030166963A",
  maxWidth: "1170px"
});

var webMoneyFooter = new WebMoneyFooter();

webMoneyFooter.init({
  rootElement: document.getElementById("webMoneyFooter"),
  lang: "ru",
  maxWidth: "1170px"
});