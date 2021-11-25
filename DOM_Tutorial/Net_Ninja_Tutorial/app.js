const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books); 

books = document.querySelectorAll('#book-list li .name');   //Gives you all list elements back
//console.log(books); 

Array.from(books).forEach(function(book){
    console.log(book);
});
/* Same functionality as above
 for (const book of books) {
     console.log(book)
 }
 */ 

 //Changing HTML Text & HTML Content
Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';              //Changes the text content of the list element book // += appends(adds) a new text to the element list    
});

//Inner HTML Property for changing the HTML
const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);                      //Shows you the HTML

//bookList.innerHTML = '<h2>Books and more books</h2>'; -->Changes the HTML
//bookList.innerHTML += '<p>This is how you add HTML';  -->Append

//NODES
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is: ', banner.nodeType); //Getting the node type as a number
console.log('#page-banner node name is: ', banner.nodeName); //Gets you the node Name
console.log('#page-banner has childs: ', banner.hasChildNodes()); //gives you a boolean

//cloning a node
const clonedBanner = banner.cloneNode(true); //Clones the node. If you want to also clone the child elements you need to type the boolean true!
console.log(clonedBanner);

//TRAVERSING THE DOM
const bookList1 = document.querySelector('#book-list');
console.log('the parent node is: ', bookList1.parentNode);  //Getting a parent node
console.log('the parent node is: ', bookList1.parentElement.parentElement); //Gets the same as the parentNode & gets the parent of the parent :D

//Siblings NEXT and PREVIOUS
console.log('book-list next sibling is: ', bookList.nextSibling);
console.log('book-list next sibling is: ', bookList.nextElementSibling);

console.log('book-list next sibling is: ', bookList.previousSibling);
console.log('book-list next sibling is: ', bookList.previousElementSibling);

//UseCase example
//Here i am accessing the previous sibling of booklist and selecting the <p>. Then im changing the html content of the <p>
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too Cool for everyone else!';
