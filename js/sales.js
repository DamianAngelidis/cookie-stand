'use strict';

var tableBody = document.getElementById('cookies-sold');
var formEl = document.getElementById('newStore');
console.log(formEl);
var hours = [,'6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Store Total'];
var diffStores = [];
var footer = [];

function Store(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesHourReport = [];
    this.finalArray = [];
    this.total = 0;
    
    diffStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 28, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//Prototype functions
Store.prototype.cookieNumber = function() {
        for(var i = 0; i < hours.length - 1 ; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
}

Store.prototype.generateFinalArray = function() {
    this.cookieNumber()

    this.finalArray.push(this.name);

    for(var i = 0; i < hours.length - 2; i++) {
        this.finalArray.push(`${this.cookiesHourReport[i]} cookies`);
    }

    this.finalArray.push(`${this.total} cookies`);
} 

Store.prototype.render = function(){
    this.generateFinalArray()
    var trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    for(var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.finalArray[i];
        trEl.appendChild(tdEl);
        console.log(tdEl.textContent, hours[i], this.cookiesHourReport[i]);
    }
} 


//Functions
function numberOfCookies(min, max, averageCookies) {
    return Math.ceil(averageCookies * (Math.random() * (max - min) + min));
}

function renderHeader() {
    var trEl = document.createElement('tr');

    for(i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
        tableBody.appendChild(trEl);
    }
}

function addHourlyCookies() {
    footer = []
    for(i = 0; i < hours.length - 1; i++) {
        var placeholder = 0
        for(var j = 0; j < diffStores.length; j++) {
            placeholder += diffStores[j].cookiesHourReport[i];
        }   

        console.log(placeholder);
    footer.push(`${placeholder} cookies`);
    }
}

function renderFooter() {
    addHourlyCookies();
    var trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    var thEl = document.createElement('td');
    thEl.textContent = 'Hourly Total';  
    trEl.appendChild(thEl);

    for(i = 0; i < hours.length - 2; i++) {
        var thEl = document.createElement('td');
        thEl.textContent = footer[i];
        trEl.appendChild(thEl);
    }
    console.log(thEl.textContent, footer[i])
}



formEl.addEventListener('submit', function(e){
    e.preventDefault();

    console.log('hi');
  
    var storeName = e.target.storeName.value;
    var maxCustomer = parseInt(e.target.maxCustomer.value);
    var minCustomer = parseInt(e.target.minCustomer.value);
    var cookiePerPerson = parseInt(e.target.cookiePerPerson.value);

  
    new Store(storeName, minCustomer, maxCustomer, cookiePerPerson);

    for(var i = tableBody.rows.length; i > 0;i--) {
        tableBody.deleteRow(i -1);
    }

    renderHeader();

    for(var i = 0; i < diffStores.length; i++){
        diffStores[i].render();
    } 
    renderFooter();
})


renderHeader();
for(var i = 0; i < diffStores.length; i++){
    diffStores[i].render();
} 
renderFooter();