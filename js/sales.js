
'use strict';

var ulEl = document.getElementById('cookies-sold');


var storePike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    data: new Array,
    length: 16,
    cookieNumber: function() {
            var report = '';
            var total = 0;
            for(i=0;i<length;i++) {
                data[i] = avgCook * (Math.random() * (maxCust - minCust) + minCust);
                report += `${i + 6}am: ${data[i]} cookies \n`; 
                total += data[i];
                console.log(data[i], report, total)
            }   
        report += `Total: ${total} cookies`;
        console.log(report);   
    },
    render: function(){    
          var liEl = document.createElement('li');
          liEl.textContent = this.type;
          ulEl.appendChild(liEl);
      }
}

var storeAirport = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2,
    data: new Array,
    length: 16,
    cookieNumber: function() {
        var report = '';
        var total = 0;
        for(i=0;i<length;i++) {
            data[i] = avgCook * (Math.random() * (maxCust - minCust) + minCust);
            report += `${i + 6}am: ${data[i]} cookies \n`; 
            total += data[i];
            console.log(data[i], report, total)
        }  
        report += `Total: ${total} cookies`   
    },
    render: function(){    
          var liEl = document.createElement('li');
          liEl.textContent = this.cookieNumber();
          ulEl.appendChild(liEl);
      }
}

var storeCenter  = {
=======
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

var storeCenter  = {
    name: '1st and Pike',
    minCust: 11,
    maxCust: 28,
    avgCook: 3.7,
    data: new Array,
    length: 16,
    cookieNumber: function() {
        var report = '';
        var total = 0;
        for(i=0;i<length;i++) {
            data[i] = avgCook * (Math.random() * (maxCust - minCust) + minCust);
            report += `${i + 6}am: ${data[i]} cookies \n`; 
            total += data[i];
            console.log(data[i], report, total)
        }  
        report += `Total: ${total} cookies`   
    },
    render: function(){    
          var liEl = document.createElement('li');
          liEl.textContent = this.cookieNumber();
          ulEl.appendChild(liEl);
      }
}

var storeCapital = {
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

storeCapitol = {
    name: '1st and Pike',
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3,
    data: new Array,
    length: 16,
    cookieNumber: function() {
        var report = '';
        var total = 0;
        for(i=0;i<length;i++) {
            data[i] = avgCook * (Math.random() * (maxCust - minCust) + minCust);
            report += `${i + 6}am: ${data[i]} cookies \n`; 
            total += data[i];
            console.log(data[i], report, total)
        }  
        report += `Total: ${total} cookies`   
    },
    render: function(){    
          var liEl = document.createElement('li');
          liEl.textContent = this.cookieNumber();
          ulEl.appendChild(liEl);
      }
}

var storeAlki = {
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

storeALki = {
    name: '1st and Pike',
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6,

    data: new Array,
    length: 16,
    cookieNumber: function() {
        var report = '';
        var total = 0;
        for(i=0;i<length;i++) {
            data[i] = avgCook * (Math.random() * (maxCust - minCust) + minCust);
            report += `${i + 6}am: ${data[i]} cookies \n`; 
            total += data[i];
            console.log(data[i], report, total)
        }  
        report += `Total: ${total} cookies`   
    },
    render: function(){    
          var liEl = document.createElement('li');
          liEl.textContent = this.cookieNumber();
          ulEl.appendChild(liEl);
      }
}

var diffStores = [storePike, storeAirport, storeCenter, storeCapital, storeAlki];

for(var i=0;i<diffStores.length;i++) {
    diffStores[i].render();       
}