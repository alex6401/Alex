"use strict";
const list = document.querySelector("#apps");
const apps = Array.isArray(window.WEB_APPS) ? window.WEB_APPS : [];
document.querySelector("#count").textContent = `${apps.length}개의 앱`;
for (const [i, app] of apps.entries()) {
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
if (!apps.length) {
  const empty = document.createElement("p");
  empty.className = "empty";
  empty.textContent = "아직 등록한 웹앱이 없습니다. 추가 안내에 따라 첫 앱을 등록하세요.";
  list.append(empty);
}
