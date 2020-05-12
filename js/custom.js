var items = document.querySelectorAll(".my-timeline li");
 
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


nav_on = 0;
function top_navigation() {
    var x = document.getElementById("top_navigator");
    if (nav_on == 0) {
        //x.className += " responsive";
        nav_on = 1;
    } else {
        x.className = "topnav";
        nav_on = 0;
    }
}

nav_on_splash = 0;
function top_splash_navigation() {
    var x = document.getElementById("top_navigator");
    if (nav_on_splash == 0) {
        //x.className += " responsive";
        nav_on_splash = 1;
    } else {
        x.className = "splashnav";
        nav_on_splash = 0;
    }
}

function windowScrollHandler() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollTop").style.display = "block";
    } else {
        document.getElementById("btnScrollTop").style.display = "none";
    }
}

function handleSideBarLinks(id) {
  var elements = document.getElementsByClassName("sidebar_links");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("sidebar_active");
  }
  document.getElementById(id).classList.add("sidebar_active");
}

function topScroller() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function boxHandler(btnId) {
  var boxId  = btnId.replace("btn", "box");
  var status = document.getElementById(boxId).style.display;
  if (status == "block"){
    document.getElementById(boxId).style.display = "none";
  } else {
    document.getElementById(boxId).style.display = "block";
  }
}

function showShareBox(id) {
  var box = document.getElementById(id.replace("fab", "box"))
  if (box.style.display == "block") {
    box.style.display = "none";
    document.getElementById(id).style.backgroundColor = "#bc3b2f";
  } else {
    box.style.display = "block";
    document.getElementById(id).style.backgroundColor = "#fc0";
  }
}

function closeSidebar(id) {
  document.getElementById(id).style.display = "none";
}

function showSidebar(id) {
  if(document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

function showTabBox(id) {
  var tab = document.getElementById(id);
  var box = document.getElementById(id.replace("tab", "box"));

  var boxes = document.getElementsByClassName("blog-category-box");
  var tabs = document.getElementById("category-tab").getElementsByTagName("li");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.backgroundColor = "white";
    tabs[i].style.fontWeight = "100";
  }

  box.style.display = "block";
  tab.style.backgroundColor = "#ffea82";
  tab.style.fontWeight = "bold";
}

function showAboutTabBox(id) {
  var tab = document.getElementById(id);
  var box = document.getElementById(id.replace("tab", "box"));

  var boxes = document.getElementsByClassName("blog-category-box");
  var tabs = document.getElementById("category-tab").getElementsByTagName("li");
  var scrollTop = document.getElementById("btnScrollTop");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.fontWeight = "100";
    tabs[i].style.borderBottom = "0px";
  }

  box.style.display = "block";
  tab.style.fontWeight = "bold";
  tab.style.borderBottom = "1px solid black";
  scrollTop.style.display = id.includes("summary") ? "none" : "block";
  
}

var modalBool = 0;
function showHideModal(imgId) {
  // Get the modal
  var modal = document.getElementById('creative_modal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img         = document.getElementById(imgId);
  var modalImg    = document.getElementById("modal_image");

  if (modalBool == 0) {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalBool = 1;
  } else {
    modal.style.display = "none";
    modalBool = 0;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
      modalBool = 0;
  }
}

function downloadImage() {
  var modalImg = document.getElementById("modal_image");
  var link = document.createElement('a');
  link.href = modalImg.src;
  link.download = modalImg.alt;
  document.body.appendChild(link);
  link.click();
  link.style.display="none";
}

function closeSideNav() {
  document.getElementById("awesomeSideNav").style.width = "0";
  document.getElementById("awesomeSideNav").style.padding = "0";
}

function openSideNav() {
  document.getElementById("awesomeSideNav").style.width = "250px";
  document.getElementById("awesomeSideNav").style.padding = "15px";
}

var slideIndex = 1;
try {
  showDivs(slideIndex);
} catch {
  
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("moocs_slides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

function switchTheme(mode) {
  var sheet = document.getElementById("main-style-sheet");
  var btnTheme = document.getElementById("nav_theme");
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  if (mode == 1) {
    if(displayMode == "light") {
      sheet.setAttribute("href", "/css/dark-theme.css");
      displayMode = "dark";
      sessionStorage.setItem("theme", "dark");
      btnTheme.style.backgroundImage = "url('/images/icons/dark-theme.png')";
      metaTheme.setAttribute("content", "#000000");
    } else {
      sheet.setAttribute("href", "/style.css");
      displayMode = "light";
      sessionStorage.setItem("theme", "light");
      btnTheme.style.backgroundImage = "url('/images/icons/light-theme.png')";
      metaTheme.setAttribute("content", "#d42423");
    }
  } else {
    if(displayMode == "light") {
      sheet.setAttribute("href", "/style.css");
      btnTheme.style.backgroundImage = "url('/images/icons/light-theme.png')";
      metaTheme.setAttribute("content", "#d42423");
    } else {
      sheet.setAttribute("href", "/css/dark-theme.css");
      btnTheme.style.backgroundImage = "url('/images/icons/dark-theme.png')";
      metaTheme.setAttribute("content", "#000000");
    }
  }
}