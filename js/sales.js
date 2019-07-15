'use strict';

// var ulEl = document.getElementById('cookies-sold');


var storePike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    length: 16,
    cookieNumber: function() {
        var report = [];
        var total = 0
        for(var i=0;i<this.length;i++) {
            report[i] = Math.round(this.avgCook * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
            total += report[i];
            console.log(this.avgCook, this.maxCust, this.minCust);  
            total = i;
        }
        console.log(storePike, report, total);
        return report;
        console.log(total);
    }
//     render: function(){    
//           var liEl = document.createElement('li');
//           liEl.textContent = this.cookieNumber();
//           ulEl.appendChild(liEl);
//       }
}


// var storeAirport = {
//     name: 'SeaTac Airport',
//     minCust: 3,
//     maxCust: 24,
//     avgCook: 1.2,
//     length: 16,
//     cookieNumber: function() {
//         var currentHour;
//         var report = '';
//         var total = 0;
//         for(i=0;i<length;i++) {
//             currentHour = avgCook * (Math.random() * (maxCust - minCust) + minCust);
//             report += `${i + 6}am: ${data[i]} cookies \n`; 
//             total += data[i];
//             console.log(data[i], report, total);
//         }  
//         report += `Total: ${total} cookies`; 
//     },
//     render: function(){    
//           var liEl = document.createElement('li');
//           liEl.textContent = this.cookieNumber();
//           ulEl.appendChild(liEl);
//       }
// }


// var storeCenter  = {
//     name: '1st and Pike',
//     minCust: 11,
//     maxCust: 28,
//     avgCook: 3.7,
//     length: 16,
//     cookieNumber: function() {
//         var currentHour;
//         var report = '';
//         var total = 0;
//         for(i=0;i<length;i++) {
//             currentHour = avgCook * (Math.random() * (maxCust - minCust) + minCust);
//             report += `${i + 6}am: ${data[i]} cookies \n`; 
//             total += data[i];
//             console.log(data[i], report, total);
//         }  
//         report += `Total: ${total} cookies`;
//     },
//     render: function(){    
//           var liEl = document.createElement('li');
//           liEl.textContent = this.cookieNumber();
//           ulEl.appendChild(liEl);
//       }
// }


// var storeCapital = {
//     name: '1st and Pike',
//     minCust: 20,
//     maxCust: 38,
//     avgCook: 2.3,
//     data: new Array,
//     length: 16,
//     cookieNumber: function() {
//         var currentHour;
//         var report = '';
//         var total = 0;
//         for(i=0;i<length;i++) {
//             currentHour = avgCook * (Math.random() * (maxCust - minCust) + minCust);
//             report += `${i + 6}am: ${data[i]} cookies \n`; 
//             total += data[i];
//             console.log(data[i], report, total);
//         }  
//         report += `Total: ${total} cookies`;   
//     },
//     render: function(){    
//           var liEl = document.createElement('li');
//           liEl.textContent = this.cookieNumber();
//           ulEl.appendChild(liEl);
//       }
// }


// var storeAlki = {
//     name: '1st and Pike',
//     minCust: 2,
//     maxCust: 16,
//     avgCook: 4.6,
//     length: 16,
//     cookieNumber: function() {
//         var currentHour;
//         var report = '';
//         var total = 0;
//         for(i=0;i<length;i++) {
//             currentHour = avgCook * (Math.random() * (maxCust - minCust) + minCust);
//             report += `${i + 6}am: ${data[i]} cookies \n`; 
//             total += data[i];
//             console.log(data[i], report, total);
//         }  
//         report += `Total: ${total} cookies`;  
//     },
//     render: function(){    
//           var liEl = document.createElement('li');
//           liEl.textContent = this.cookieNumber();
//           ulEl.appendChild(liEl);
//       }
// }

// var diffStores = [storePike, storeAirport, storeCenter, storeCapital, storeAlki];

// for(var i=0;i<diffStores.length;i++) {
// }

storePike.cookieNumber();