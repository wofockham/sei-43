/*
RESTful Routes

GET  /words  : index
POST /words  : create
GET  /words/:wordId : show
PUT  /words/:wordId : update
DELETE /words/:wordId : destroy

*/

const vocabBuilder = require('../controllers/vocabController');

module.exports = (app) => {
  app.route('/words')
    .get(vocabBuilder.listAllWords)
    .post(vocabBuilder.createAWord);

  app.route('/words/:wordId')
    .get(vocabBuilder.readAWord)
    .put(vocabBuilder.updateAWord)
    .delete(vocabBuilder.deleteAWord);
};
