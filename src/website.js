import footer from './footer.js';
import loadHomepage from './homepage.js';
import navBar from './navbar.js';
import './style.css';

function createHeader() {
  let header = document.createElement('div');
  let headerBanner = document.createElement('h1');

  headerBanner.classList.add('header-banner');
  headerBanner.innerHTML = "Mario's Pizzeria";
  header.classList.add('header');
  header.appendChild(headerBanner);
  header.appendChild(navBar());
  return header;
}

function createMain() {
  let main = document.createElement('div');
  main.classList.add('main');
  main.id = 'main';
  return main;
}

function createFooter() {
  return footer();
}

function renderPage() {
  // let parentNode = page.parentNode;
  // Array.from(parentNode.children).forEach((child) => {
  //   child.classList.remove('active');
  // });
}

export default function initWebsite() {
  let content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHomepage();
  return content;
}
