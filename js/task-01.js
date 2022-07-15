const numOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numOfCategories.length)

const categories = document.querySelectorAll("#categories>li")
    .forEach (element => {
        console.log(`Category: ${element.firstElementChild.textContent} 
        Elements: ${element.lastElementChild.children.length}`)
    });