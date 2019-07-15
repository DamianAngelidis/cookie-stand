storePike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    data = [],
    length: 16,
    total = 0,
    cookieNumber: function() {
        return avgCook * (Math.random() * (maxCust - minCust) + minCust);
    }
}

storeAirport = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2,
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

storeCenter  = {
    name: '1st and Pike',
    minCust: 11,
    maxCust: 28,
    avgCook: 3.7,
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

storeCapitol = {
    name: '1st and Pike',
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3,
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}

storeALki = {
    name: '1st and Pike',
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6,
    cookieNumber: function() {
        return Math.random() * (maxCust - minCust) + minCust;
    }
}