let mainHeading = document.getElementById('main-heading');
let pageHeader = document.getElementById('page-header');
mainHeading.textContent= "New DOM Layout";

mainHeading.classList.add('bg-success');
mainHeading.classList.remove('bg-dark');

let para1=document.getElementById('para1');
para1.textContent="The Document Object (DOM) is a cross-platform and language-independent interface that treats an XML and HTML document as a free structure";
// getElementById('para2');

let para2=document.getElementById('para2');
para2.textContent="The Document Object (DOM) is a programming interface for HTML, and XML documents.It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page";


let btn=document.getElementById('btn');
btn.addEventListener('click', function(){ 
 let para4=document.getElementById ('para4');
 para4.textContent="The Document Object Model is a cross-platform and language independent interface that treats an XML or HTML document a a free structure wherein each node is an object representing a part of the document";
    
});

//Cards
let red = document.getElementById('red');
red.classList.remove('bg-white');

red.classList.add('bg-danger');

let blue = document.getElementById('blue');
blue.classList.remove('bg-white');

blue.classList.add('bg-primary');

let yellow = document.getElementById('yellow');
yellow.classList.remove('bg-white');

yellow.classList.add('bg-warning');

let green=document.getElementById('green');
green.classList.remove('bg-white');

green.classList.add('bg-success');

let black=document.getElementById('black');
black.classList.remove('bg-white');

black.classList.add('bg-dark');


