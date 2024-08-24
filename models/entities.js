class Astrologer {
  constructor(id, name, isTopAstro = false, baseMaxClients = 10) {
      this.id = id;
      this.name = name;
      this.isTopAstro = isTopAstro;
      this.changeFactor = 1;
      this.currentClients = 0;
      this.baseMaxClients = baseMaxClients;
      this.totalUsers = [];
  }

  get maxClients() {
      return this.baseMaxClients * this.changeFactor;
  }
}

class User {
  constructor(id, name) {
      this.id = id;
      this.name = name;
      this.astroId = null;
  }
}

module.exports = { User, Astrologer };
