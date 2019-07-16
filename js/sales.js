'use strict';

var tableBody = document.getElementById('cookies-sold');
var hours = ['Store Name','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var diffStores = [];

function renderHeader() {
    var trEl = document.createElement('tr');
    tableBody.appendChild(trEl);

    for(i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
}

function numberOfCookies(min, max, averageCookies) {
    return Math.round(averageCookies * (Math.random() * (max - min) + min));
}

function Store(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    cookiesHourReport = [];
    finalArray = [];
    total = 0;

  diffStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 28, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 28, 3.7);

var storePike = {
    name: '1st and Pike',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookieNumber: function() {
        for(var i = 0; i < hours.length; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
    },

    generateFinalArray: function() {
        this.cookieNumber()

        this.finalArray.push(this.name);

        for(var i = 0; i < hours.length; i++) {
            this.finalArray.push(`${hours[i]}: ${this.cookiesHourReport[i]} cookies`);
        }

        this.finalArray.push(`Total: ${this.total}`);
    },

    render: function(){
        this.generateFinalArray()

        for(var i = 0; i < hours.length + 2; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.finalArray[i];
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookiesHourReport[i]);
        }
    }   
}


var storeAirport = {
    name: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesHourReport: [],
    finalArray: [],
    total: 0,
    cookieNumber: function() {
        for(var i = 0; i < hours.length; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
    },

    generateFinalArray: function() {
        this.cookieNumber()

        this.finalArray.push(this.name);

        for(var i = 0; i < hours.length; i++) {
            this.finalArray.push(`${hours[i]}: ${this.cookiesHourReport[i]} cookies`);
        }

        this.finalArray.push(`Total: ${this.total}`);
    },

    render: function(){
        this.generateFinalArray()

        for(var i = 0; i < hours.length + 2; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.finalArray[i];
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookiesHourReport[i]);
        }
    }   
}
    

var storeCenter  = {
    name: 'Seattle Center',
    minCustomer: 11,
    maxCustomer: 28,    
    avgCookies: 3.7,
    cookiesHourReport: [],
    finalArray: [],
    total: 0,
    cookieNumber: function() {
        for(var i = 0; i < hours.length; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
    },

    generateFinalArray: function() {
        this.cookieNumber()

        this.finalArray.push(this.name);

        for(var i = 0; i < hours.length; i++) {
            this.finalArray.push(`${hours[i]}: ${this.cookiesHourReport[i]} cookies`);
        }

        this.finalArray.push(`Total: ${this.total}`);
    },

    render: function(){
        this.generateFinalArray()

        for(var i = 0; i < hours.length + 2; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.finalArray[i];
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookiesHourReport[i]);
        }
    }   
}

var storeCapital = {
    name: 'Capitol Hill',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesHourReport: [],
    finalArray: [],
    total: 0,
    cookieNumber: function() {
        for(var i = 0; i < hours.length; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
    },

    generateFinalArray: function() {
        this.cookieNumber()

        this.finalArray.push(this.name);

        for(var i = 0; i < hours.length; i++) {
            this.finalArray.push(`${hours[i]}: ${this.cookiesHourReport[i]} cookies`);
        }

        this.finalArray.push(`Total: ${this.total}`);
    },

    render: function(){
        this.generateFinalArray()

        for(var i = 0; i < hours.length + 2; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.finalArray[i];
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookiesHourReport[i]);
        }
    }   
}


var storeAlki = {
    name: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    length: 15,
    cookiesHourReport: [],
    finalArray: [],
    total: 0,
    cookieNumber: function() {
        for(var i = 0; i < hours.length; i++) {
            this.cookiesHourReport.push(numberOfCookies(this.minCustomer,this.maxCustomer,this.avgCookies));
            this.total += this.cookiesHourReport[i];
        }
        console.log(this.cookiesHourReport, this.total);       
    },

    generateFinalArray: function() {
        this.cookieNumber()

        this.finalArray.push(this.name);

        for(var i = 0; i < hours.length; i++) {
            this.finalArray.push(`${hours[i]}: ${this.cookiesHourReport[i]} cookies`);
        }

        this.finalArray.push(`Total: ${this.total}`);
    },

    render: function(){
        this.generateFinalArray()

        for(var i = 0; i < hours.length + 2; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.finalArray[i];
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookiesHourReport[i]);
        }
    }   
}

var diffStores = [storePike, storeAirport, storeCenter, storeCapital, storeAlki];

for(var i=0;i<diffStores.length;i++) {
    diffStores[i].render();
}

var diffStores = [storePike, storeAirport, storeCenter, storeCapital, storeAlki];

for(var i=0;i<diffStores.length;i++) {
    diffStores[i].render();
}
