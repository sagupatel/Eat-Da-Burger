var db = require("../models");

module.exports = function(app) {

    app.get("/api/burgers", function(req, res){
        db.Burger.findAll({}).then(function(result){
            res.json(result);
        });
    });

    app.post("/api/burgers", function(req, res){
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(results) {
        res.json(results);
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(result) {
            res.json(result);
          });
    
      });

  app.put("/api/burgers", function(req, res) {
    
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(result) {
        res.json(result);
      });

  });


};