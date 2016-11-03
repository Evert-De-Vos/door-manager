var express = require("express");
var router = express.router();

var mongoose = require("mongoose");
var Room = mongoose.model("Room");

router.route("/rooms/:room")
  .get(function(req,res,next){
    Room.populate(req.room, {
      path: "owner",
      select: "username",
      path : "members",
      select : "username"

    }).then(function(room){
      res.json(room);
    });
  });

router.param("room", function(req, res, next, id){
  var query = Room.findById(id);

  query.exec(function(err, room){
    if(err){
      return next(err);
    }

    if(!room){
      return next(new Error("can't find room"));
    }

    req.room = room;
    return next();
  });

  module.exports = router;
});
