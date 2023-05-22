"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 2, name: 'Half City', roast: 'Light', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 3, name: 'Cinnamon', roast: 'Light', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 4, name: 'City', roast: 'Medium', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 5, name: 'American', roast: 'Medium', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 6, name: 'Breakfast', roast: 'Medium', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 7, name: 'High', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 8, name: 'Continental', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 9, name: 'New Orleans', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 10, name: 'European', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 11, name: 'Espresso', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 12, name: 'Viennese', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 13, name: 'Italian', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'},
    {id: 14, name: 'French', roast: 'Dark', roasted: 'All', price: '$2.50', cart: 'Add to Cart'}
];

//Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use
function renderCoffee(coffee){

    if(coffee.roast === 'Light'){
        let html = '<div class="coffee col-4 mx-1 mb-2">';
        html += '<h1>' + coffee.name + '</h1>';
        html += '<img class="light-roast" src="images/image-12.png" alt="light coffee"></img>';
        html += '<h5>' + coffee.roast + '</h5>';
        html += '<h5>' + coffee.price + '</h5>';
        html += '<p>' + coffee.cart + '</p>';
        html += '</div>';
        return html;
    } else if (coffee.roast === 'Medium'){
        let html = '<div class="coffee col-4 mx-1 mb-2">';
        html += '<h1>' + coffee.name + '</h1>';
        html += '<img class="light-roast" src="images/image-11.png" alt="light coffee"></img>';
        html += '<h5>' + coffee.roast + '</h5>';
        html += '<h5>' + coffee.price + '</h5>';
        html += '<p>' + coffee.cart + '</p>';
        html += '</div>';
        return html;
    } else if (coffee.roast === 'Dark'){
        let html = '<div class="coffee col-4 mx-1 mb-2">';
        html += '<h1>' + coffee.name + '</h1>';
        html += '<img class="light-roast" src="images/image-13.png" alt="light coffee"></img>';
        html += '<h5>' + coffee.roast + '</h5>';
        html += '<h5>' + coffee.price + '</h5>';
        html += '<p>' + coffee.cart + '</p>';
        html += '</div>';
        return html;
    }
}

//THIS FUNCTION ADDS COFFEE TO THE TABLE
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//THIS FUNCTION STORES ID OF COFFEES AS TBODY
let tbody = document.querySelector('#coffees');

//THIS FUNCTION STORES ID OF R0AST-SELECTION AS ROAST SELECTION
let roastSelection = document.querySelector('#roast-selection');

// DISPLAYS ALL COFFEE IN HTML
tbody.innerHTML = renderCoffees(coffees);


let search = document.querySelector('#search-coffee')
search.addEventListener('input', updateCoffees);
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (coffee.roasted === selectedRoast && coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
addEventListener("DOMContentLoaded", function(){
    document.getElementById('roast-selection').addEventListener("change", updateCoffees)
});


let userRoast = document.querySelector('#roast-selection-2');
let addToDoButton = document.getElementById('user-submit');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('input-Field');

addToDoButton.addEventListener('click', function(){
        coffees.push({id: coffees.length + 1, name: inputField.value, roast: userRoast.value, roasted: "All", price: "$2.50", cart: 'Add to Cart'})
        // updateCoffees(coffees);
        tbody.innerHTML = renderCoffees(coffees);


})

