import { lists, renderLists, selectedListId } from "./allLists";

import { newListForm, newListInput, createList } from "./createLists";

import { save, saveAndRender } from "./localStorage";

import { deleteListButton } from "./deleteList";

import { renderTasks, listDisplayContainer } from "./manageTasks";

import { newTaskForm, newTaskInput, makeTask } from "./manageTasks";

if ((selectedListId = null)) {
  listDisplayContainer.style.display = "none";
}

renderTasks();

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
  console.log(selectedListId);
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  const task = makeTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

deleteListButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});

const clearCompleteTasksButton = document.querySelector(
  "[data-delete-task-button]"
);

clearCompleteTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

const prioritizeListBtn = document.querySelector(
  "[data-prioritize-list-button]"
);
// const toDoHeader = document.querySelector("todo-header");

prioritizeListBtn.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log(selectedListId);
  console.log(selectedList);
  if (selectedList.priority == false) {
    selectedList.priority = true;
    document.querySelector(".todo-header").classList.add("priority-header");
    document.querySelector(".active-list").classList.add("priority-text");
  } else if (selectedList.priority == true) {
    selectedList.priority = false;
    document.querySelector(".todo-header").classList.remove("priority-header");
    document.querySelector(".active-list").classList.remove("priority-text");
  }
});
