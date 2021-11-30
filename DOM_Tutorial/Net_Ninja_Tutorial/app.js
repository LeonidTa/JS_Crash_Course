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

//EVENTS & EVENT LISTENERS
var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);      //Shows you the clicked object as html
    console.log(e);             //Shows you the properties of the click (example: was the shift-key pressed when you clicked the button?)
});

//How to remove list elements in a list, by clicking a button
// 1.) Select the buttons
var btns = document.querySelectorAll('#book-list .delete');
// 2.) Convert the var into an Array and use loop foreach to read each button seperately
Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', function (e) {    //Added Eventlistener

        const li = e.target.parentElement;          //Grabbing the Parent element of the button, which is in this case the li
        
        li.parentElement.removeChild(li);           //Here you are grabbing the parent of the li, which is the ul and then you are saying that you want to remove the child of ul, which is the li

    });
});

//How to prevent the link from going to another page
/*
const link = document.querySelector('#page-banner a')

link.addEventListener('click', function (e) {
    e.preventDefault;                           //prevents the opening of a new page when clicking on the link
    console.log('navigation to ', e.target.textContent, 'was prevented' );
});
*/

//EVENT BUBBLING
//This option below gives you the option to delete any list that is named "delete", regardless when you added the object into the HTML
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){ 
        const li = e.target.parentElement;
        list.removeChild(li);               //Does the same as function before.
    };
});