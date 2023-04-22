const h1Element = document.createElement('h1');
h1Element.id = 'title';
h1Element.innerText = "Pagination";
const pElement = document.createElement('p');
pElement.id = 'description';
pElement.innerText = "Sample Table Data";


const containerDiv = document.createElement('div');
const innerDiv = document.createElement('div');
innerDiv.className = 'table-responsive';
containerDiv.appendChild(innerDiv);
const table = document.createElement('table');
table.className='table table-bordered';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
row_1.className='table table-bordered';
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
table.classList.add('table','table-bordered');
table.setAttribute("border","2");

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
innerDiv.appendChild(table);

let buttonDiv = document.createElement('div');
buttonDiv.setAttribute('id','buttons');
buttonDiv.setAttribute('class','d-flex justify-content-center');
//buttonDiv.append(first,last,next,previous);
let first = document.createElement('button');
first.innerText="First";
let last = document.createElement('button');
last.innerText="Last";
let next = document.createElement('button');
next.innerText="Next";
let previous = document.createElement('button');
previous.innerText="Previous";
document.body.append(h1Element, pElement,buttonDiv, containerDiv,first,last,next,previous);
//https://gist.github.com/rvsp/add40254aa126f045837fa5b51f47f1f
