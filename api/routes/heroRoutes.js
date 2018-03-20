module.exports = function(app){
    var heroesControl = require('../controllers/heroController');

    app.route('/heroes')
    .get(heroesControl.getHeroes)
    .post(heroesControl.addHero);

    app.route('heroes/:heroId')
    .get(heroesControl.getHero)
    .put(heroesControl.updateHero)
    .delete(heroesControl.deleteHero)
}
