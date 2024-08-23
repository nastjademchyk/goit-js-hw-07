const categoriesList = document.querySelectorAll("#categories .item");
const categoryNumber = categoriesList.length; 
console.log(`Number of categories: ${categoryNumber}`);

categoriesList.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul li').length; 
    console.log(`Category: ${categoryTitle}`); 
    console.log(`Elements: ${categoryElements}`);
});
