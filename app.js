// Placeholder for app.js
// Add your JavaScript code here

// Dynamically populate the portfolio page using PORTFOLIO_DATA

document.addEventListener("DOMContentLoaded", () => {
  // Populate the navigation bar
  const nav = document.getElementById("nav");
  nav.innerHTML = `
    <h1>${PORTFOLIO_DATA.name}</h1>
    <ul>
      ${PORTFOLIO_DATA.navLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join("")}
    </ul>
  `;

  // Populate the hero section
  const hero = document.getElementById("hero");
  hero.innerHTML = `
    <h2>${PORTFOLIO_DATA.hero.greeting}</h2>
    <h1>${PORTFOLIO_DATA.hero.headline}</h1>
    <h3>${PORTFOLIO_DATA.hero.subheadline}</h3>
    <p>${PORTFOLIO_DATA.hero.description}</p>
    <img src="${PORTFOLIO_DATA.hero.profileImage}" alt="Profile Image">
    <div>
      ${PORTFOLIO_DATA.hero.stats.map(stat => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}
    </div>
  `;

  // Populate the about section
  const about = document.getElementById("about");
  about.innerHTML = `
    <h2>${PORTFOLIO_DATA.about.heading}</h2>
    ${PORTFOLIO_DATA.about.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
  `;

  // Additional sections (experience, projects, skills, etc.) can be populated similarly
});