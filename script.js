const apps = Array.isArray(window.BUILDING_SOFTTECH_APPS) ? window.BUILDING_SOFTTECH_APPS : [];
const appGrid = document.querySelector("#appGrid");
const contactApp = document.querySelector("#contactApp");

if (appGrid && apps.length) {
  appGrid.innerHTML = apps
    .filter((app) => app.public !== false)
    .map((app) => `
      <article class="app-card" style="--app-color:${app.color}">
        <div class="app-card-top">
          <div class="app-icon">${app.initials}</div>
          <span class="status-chip ${app.status}">${app.statusLabel}</span>
        </div>
        <div><p class="app-category">${app.category}</p><h3>${app.name}</h3><p>${app.shortDescription}</p></div>
        <div class="legal-links">
          <a href="${app.routes.privacy}">Privacy</a><a href="${app.routes.terms}">Terms</a><a href="${app.routes.refunds}">Refunds</a><a href="${app.routes.support}">Support</a>
        </div>
        <a class="text-link" href="${app.routes.landing}">View app <span aria-hidden="true">→</span></a>
      </article>`)
    .join("");
}

if (contactApp) {
  apps.filter((app) => app.public !== false).forEach((app) => {
    const option = document.createElement("option");
    option.value = app.name;
    option.textContent = app.name;
    contactApp.append(option);
  });
}

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const app = formData.get("app") || "General";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent(`[${app}] BuildingSoft Tech inquiry from ${name}`);
    const body = encodeURIComponent(`App: ${app}\nName: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:buildingsofttech@gmail.com?subject=${subject}&body=${body}`;
  });
}
