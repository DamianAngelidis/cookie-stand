'use strict';

var tableBody = document.getElementById('cookies-sold');
var hours = [,'6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var diffStores = [];

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

function numberOfCookies(min, max, averageCookies) {
    return Math.round(averageCookies * (Math.random() * (max - min) + min));
}

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

function renderHeader() {
    var trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    for(i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
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


renderHeader();
for(var i = 0; i < diffStores.length; i++){
    diffStores[i].render();
}
