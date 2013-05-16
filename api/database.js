var 
    config = require(__dirname + "/config.js");

// configuration
var db = require(__dirname + "/mongo-wrapper.js");
db.poolEnabled = true;
db.poolSize = 20;
db.killEnabled = true;
db.cacheEnabled = false;
db.defaultCacheTime = 60;
db.setDatabases(config.mongo);
db.playtomic.collections(["games", "gamevars", "leaderboard_scores", "leaderboard_tables", "leaderboard_bans", "playerlevel_levels", "playerlevel_bans"]);

module.exports = db;