'use strict';

var ulEl = document.getElementById('cookies-sold');

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',]

var storePike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    length: 15,
    cookieNumber: function() {
        var report = [];
        var total = 0;
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
        }
        console.log(report, total);
        return [report, total];
       
    },
    render: function(){    
        var liEl = document.createElement('li');
        liEl.textContent = '' + this.name;
        ulEl.appendChild(liEl);

        for(var i = 0; i < this.cookieNumber()[0].length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = liEl.textContent + `${hours[i]}:  ${this.cookieNumber()[0][i]} cookies` + '\n';
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookieNumber()[0][i]);
        }

        liEl = document.createElement('li');
        liEl.textContent = liEl.textContent + `Total: ${this.cookieNumber()[1]}`;
        ulEl.appendChild(liEl); 
    }
}


var storeAirport = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2,
    length: 15,
    cookieNumber: function() {
        var report = [];
        var total = 0;
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
        }
        console.log(report, total);
        return [report, total];
       
    },
    render: function(){    
        var liEl = document.createElement('li');
        liEl.textContent = '' + this.name;
        ulEl.appendChild(liEl);

        for(var i = 0; i < this.cookieNumber()[0].length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = liEl.textContent + `${hours[i]}:  ${this.cookieNumber()[0][i]} cookies` + '\n';
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookieNumber()[0][i]);
        }

        liEl = document.createElement('li');
        liEl.textContent = liEl.textContent + `Total: ${this.cookieNumber()[1]}`;
        ulEl.appendChild(liEl); 
    }
}


var storeCenter  = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 28,
    avgCook: 3.7,
    length: 15,
    cookieNumber: function() {
        var report = [];
        var total = 0;
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
        }
        console.log(report, total);
        return [report, total];
       
    },
    render: function(){    
        var liEl = document.createElement('li');
        liEl.textContent = '' + this.name;
        ulEl.appendChild(liEl);

        for(var i = 0; i < this.cookieNumber()[0].length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = liEl.textContent + `${hours[i]}:  ${this.cookieNumber()[0][i]} cookies` + '\n';
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookieNumber()[0][i]);
        }

        liEl = document.createElement('li');
        liEl.textContent = liEl.textContent + `Total: ${this.cookieNumber()[1]}`;
        ulEl.appendChild(liEl); 
    }
}


var storeCapital = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3,
    data: new Array,
    length: 15,
    cookieNumber: function() {
        var report = [];
        var total = 0;
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
        }
        console.log(report, total);
        return [report, total];
       
    },
    render: function(){    
        var liEl = document.createElement('li');
        liEl.textContent = '' + this.name;
        ulEl.appendChild(liEl);

        for(var i = 0; i < this.cookieNumber()[0].length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = liEl.textContent + `${hours[i]}:  ${this.cookieNumber()[0][i]} cookies` + '\n';
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookieNumber()[0][i]);
        }

        liEl = document.createElement('li');
        liEl.textContent = liEl.textContent + `Total: ${this.cookieNumber()[1]}`;
        ulEl.appendChild(liEl); 
    }
}


var storeAlki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6,
    length: 15,
    cookieNumber: function() {
        var report = [];
        var total = 0;
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
        }
        console.log(report, total);
        return [report, total];
       
    },
    render: function(){    
        var liEl = document.createElement('li');
        liEl.textContent = '' + this.name;
        ulEl.appendChild(liEl);

        for(var i = 0; i < this.cookieNumber()[0].length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = liEl.textContent + `${hours[i]}:  ${this.cookieNumber()[0][i]} cookies` + '\n';
            ulEl.appendChild(liEl);
            console.log(liEl.textContent, hours[i], this.cookieNumber()[0][i]);
        }

        liEl = document.createElement('li');
        liEl.textContent = liEl.textContent + `Total: ${this.cookieNumber()[1]}`;
        ulEl.appendChild(liEl); 
    }
}

var diffStores = [storePike, storeAirport, storeCenter, storeCapital, storeAlki];

for(var i=0;i<diffStores.length;i++) {
    diffStores[i].render();
}
