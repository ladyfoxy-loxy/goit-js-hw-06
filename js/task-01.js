// 1
const listItems = document.querySelectorAll(".item");
console.log(`Number of categories:`, listItems.length);
// 2
listItems.forEach(element => {
    console.log(`Category:`, element.firstElementChild.textContent);
   console.log(`Elements:`, element.lastElementChild.children.length);
});