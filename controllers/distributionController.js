const { User, Astrologer } = require('../models/entities');

let astrologers = [];
let users = [];

function initializeData(){

    for (let i = 1; i <= 500; i++) {
        astrologers.push(new Astrologer(i, `Astrologer ${i}`, i <= 50)); 
    }
    
    for (let i = 1; i <= 3000; i++) {
        users.push(new User(i, `User ${i}`));
    }
}

// Flow distribution algorithm
function distributeFlow() {
    users.forEach(function(currentUser) {
        let availableAstrologers = astrologers.filter(function(astro){
            return astro.currentClients < astro.maxClients;
        });
        if (availableAstrologers.length > 0) 
        {
            let selectedAstro = availableAstrologers[Math.floor(Math.random() * availableAstrologers.length)];
            selectedAstro.currentClients++;
            selectedAstro.totalUsers.push(currentUser.id);
            currentUser.astroId = selectedAstro.id;
        }
    });
}

distributeFlow();

module.exports = { initializeData ,distributeFlow, astrologers, users };