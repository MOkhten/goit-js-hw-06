const listItems = document.querySelectorAll('.item');

const itemList = document.querySelector("ul");
    console.log('Number of categories:', itemList.children.length);
listItems.forEach((item) => {
    const titleEl = item.querySelector('h2');
    console.log('Category:', titleEl.textContent);

    const elList = item.querySelectorAll('li');
    console.log('Elements:', elList.length);
})