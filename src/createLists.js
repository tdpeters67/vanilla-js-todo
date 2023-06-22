export const newListForm = document.querySelector("[data-new-list-form");
export const newListInput = document.querySelector("[data-new-list-input");

export function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
    priority: false,
  };
}
