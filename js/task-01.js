const generalList = document.querySelector('#categories');
console.log(`Number of categories: ${generalList.children.length}`);
const allCategories = generalList.querySelectorAll('.item');

allCategories.forEach(item => {
    console.log(`
Category: ${item.querySelector('h2').textContent}
Elements: ${item.lastElementChild.children.length}`);
});

