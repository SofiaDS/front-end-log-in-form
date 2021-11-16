export function createEl(any) {
  var element = document.createElement(any);
  return element;
}
export function append(parent, child) {
  parent.appendChild(child);
}
export function scrivi(paper, ink) {
  paper.value = ink;
}
