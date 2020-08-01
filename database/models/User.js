const db = require('../connection');

const UserSchema = new db.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  watchedlist: Object,
  towatchlist: Object,
});

const User = db.model("User", UserSchema);

module.exports = User;