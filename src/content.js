// https://crxjs.dev/vite-plugin/getting-started/vanilla-js/add-content-script DOCUMENTATION

import "./content.css";

const alertMsg = "do not waste your time";
const blackListPagesUrls = ["youtube", "facebook", "Linkedin"];
const url = window?.location?.href;

const second = 1000;
const minute = second * 60;
const LIMIT_TIME_TO_VIEW_PAGE = 5; // must 5 minutes
const youtubeWord = blackListPagesUrls[0];

const handlerInterval = () => {
  if (url.includes("shorts")) {
    window.location.href = "";
    window.open("");
    alert("remember");
    clearInterval(interval);
    return;
  }
  if (url.includes(youtubeWord)) {
    alert(alertMsg);
    clearInterval(interval);
  }
};

const interval = setInterval(handlerInterval, second * LIMIT_TIME_TO_VIEW_PAGE);

const html = `
<div class="crx">
  Hello, continue
</div>
`;

const doc = new DOMParser().parseFromString(html, "text/html");
document.body.append(doc.body.firstElementChild);
