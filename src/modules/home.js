import "../styles/home.css";

export default function renderHome() {
    // contentWrapper will contain the necessary content like h1 p for substring
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");

    // create h1 for hero string
    const heroStr = document.createElement("h1");
    heroStr.textContent = "Welcome to Ember Steakhouse – Where Fire Meets Flavor";
    heroStr.classList.add("heroStr");
    contentWrapper.appendChild(heroStr);

    // p element for substring beneath the hero string
    const substr = document.createElement("p");
    substr.textContent = "Experience the Sizzle at Ember Steakhouse – Where Fire and Flavor Ignite";
    substr.classList.add("subStr")
    contentWrapper.appendChild(substr);

    return contentWrapper;
}
