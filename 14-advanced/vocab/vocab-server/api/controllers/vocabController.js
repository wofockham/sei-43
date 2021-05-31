const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.listAllWords = (req, res) => {
  Vocab.find({}, (err, words) => {
    if (err) res.send(err);
    res.json(words);
  });
};

exports.createAWord = (req, res) => {
  const newWord = new Vocab(req.body);
  newWord.save((err, word) => {
    if (err) res.send(err);
    res.send(word);
  });
};

exports.readAWord = (req, res) => {
  // TODO: can we use .query?
  Vocab.findById(req.params.wordId, (err, word) => {
    if (err) res.send(err);
    res.send(word);
  });
};

exports.updateAWord = (req, res) => {
  Vocab.findOneAndUpdate(
    {_id: req.params.wordId},
    req.body,
    { new: true },
    (err, word) => {
      if (err) res.send(err);
      res.json(word);
    }
  )
};

exports.deleteAWord = (req, res) => {
  Vocab.deleteOne({_id: req.params.wordId}, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Word deleted successfully',
      _id: req.params.wordId
    });
  })
}
