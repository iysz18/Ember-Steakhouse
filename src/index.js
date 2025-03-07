// imports from npm
import "normalize.css"

// imports from "src/modules"
import renderHome from "./modules/home.js"

// generate the content of the page when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("#content");

    // reference each tab button in navbar in a nodelist
    // then add to each button in the nodelist the eventlistener "click"
    const navTabs = document.querySelectorAll(".nav-btns > button");
    navTabs.forEach(btn => {
        btn.addEventListener("click", (event) => {
            // check the data-key value of clicked btn and perform the corresponding tab generation
            let buttonKey = event.target.dataset.key;
            switch (buttonKey) {
                case "homeBtn":
                    // clear the current content before rendering tab
                    mainContent.innerHTML = null;
                    mainContent.appendChild(renderHome());
                    break;
                case "menuBtn":
                    alert("menuuuu");
                    break;
            }
        });
    });
});