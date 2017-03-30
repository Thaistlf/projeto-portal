/**
 * Created by inftek on 27/03/17.
 */
module.exports.set = function(app) {
    app.use('/', require('./app'));
};