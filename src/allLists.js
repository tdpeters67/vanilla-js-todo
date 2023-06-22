import {
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_LIST_ID_KEY,
} from "./localStorage";

import { saveAndRender } from "./localStorage";

export const listsContainer = document.querySelector("[data-lists");

export let lists =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

export let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY);

export function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
