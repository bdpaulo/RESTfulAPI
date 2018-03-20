
var mongoose = require('mongoose'),
Hero = mongoose.model('Heroes'); //Model Heroes defined in heroModel

exports.getHeroes = function(req, res) {
    Hero.find({}, function(err, hero) {
    if (err)
        res.send(err);
        res.json(hero);
    });
};

exports.addHero = function(req, res) {
var new_hero = new Hero(req.body);
    new_hero.save(function(err, hero) {
    if (err)
        res.send(err);
        res.json(hero);
    });
};

exports.getHero= function(req, res) {
    Hero.findById(req.params.heroId, function(err, hero) {
    if (err)
        res.send(err);
        res.json(hero);
    });
};

exports.updateHero = function(req, res) {
    Hero.findOneAndUpdate({_id: req.params.heroId}, req.body, {new: true}, function(err, task) {
    if (err)
        res.send(err);
        res.json(hero);
    });
};

exports.deleteHero = function(req, res) {
    Hero.remove({ _id: req.params.heroId}, function(err, task) {
        if (err)
            res.send(err);
            res.json({ message: 'Hero successfully deleted' });
    });
};


