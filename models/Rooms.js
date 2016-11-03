var mongoose = require("mongoose");

var RoomSchema = new mongoose.Schema({
  title: String,
  

  id: {
    type : Number,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  }]
});

mongoose.model("Room", RoomSchema);
