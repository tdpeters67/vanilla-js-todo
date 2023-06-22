export const LOCAL_STORAGE_LIST_KEY = "task.lists";

export const LOCAL_STORAGE_LIST_ID_KEY = "task.selectedListId";

import { lists, selectedListId } from "./allLists";

import { renderTasks } from "./manageTasks";

export function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId);
}

export function saveAndRender() {
  save();
  renderTasks();
}
