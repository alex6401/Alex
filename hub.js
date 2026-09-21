"use strict";
const list = document.querySelector("#apps");
const apps = Array.isArray(window.WEB_APPS) ? window.WEB_APPS : [];
const subjects = ["사회", "역사"];
const categoryOf = app => subjects.includes(app.category) ? app.category : "사회";
for (const badge of document.querySelectorAll("[data-count]")) badge.textContent = `${apps.filter(app => categoryOf(app) === badge.dataset.count).length}개의 웹앱`;
function render(subject) {
list.replaceChildren();
document.querySelector("#section-title").textContent = `${subject} 웹앱`;
const selected = apps.filter(app => categoryOf(app) === subject);
document.querySelector("#count").textContent = `${selected.length}개의 웹앱`;
for (const button of document.querySelectorAll("[data-subject]")) {
  button.classList.toggle("active", button.dataset.subject === subject);
  button.setAttribute("aria-pressed", String(button.dataset.subject === subject));
}
for (const [i, app] of selected.entries()) {
  const card = document.createElement("article");
  card.className = "app-card";
  const top = document.createElement("div");
  top.className = "card-top";
  const icon = document.createElement("span");
  icon.className = "app-icon";
  icon.textContent = app.icon || String(i + 1).padStart(2, "0");
  const category = document.createElement("span");
  category.className = "tag";
  category.textContent = app.category || "웹앱";
  top.append(icon, category);
  const title = document.createElement("h3");
  title.textContent = app.name || "이름 없는 앱";
  const description = document.createElement("p");
  description.textContent = app.description || "";
  const link = document.createElement("a");
  link.className = "app-link";
  try {
    if (typeof app.path !== "string" || !app.path.trim()) throw new Error("Missing path");
    const url = new URL(app.path, document.baseURI);
    if (!["https:", "http:", "file:"].includes(url.protocol)) throw new Error("Unsupported URL");
    link.href = url.href;
    link.textContent = "웹앱 열기 ↗";
    link.setAttribute("aria-label", `${app.name || "웹앱"} 열기`);
  } catch {
    link.textContent = "apps.js에서 경로를 확인하세요";
  }
  card.append(top, title, description, link);
  list.append(card);
}
if (!selected.length) {
  const empty = document.createElement("div");
  empty.className = "empty";
  const title = document.createElement("h3"); title.textContent = `아직 등록된 ${subject} 웹앱이 없습니다.`;
  const text = document.createElement("p"); text.textContent = "첫 번째 수업 도구를 이곳에 추가해 보세요.";
  const link = document.createElement("a"); link.href = "guide.html#add"; link.textContent = "웹앱 등록 안내 →";
  empty.append(title,text,link);
  list.append(empty);
}
}
for (const button of document.querySelectorAll("[data-subject]")) button.addEventListener("click",()=>render(button.dataset.subject));
render("사회");
