const ScoreCard = require('../scorecard');

describe('ScoreCard', () => {
  it('returns 0 when calculating score of a new game', () => {
    let scorecard = new ScoreCard();
    expect(scorecard.calculateScore()).toEqual(0);
  });

  it('returns the total after adding 1 frame', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(3, 4);
    expect(scorecard.calculateScore()).toEqual(7);
  });

  it ('returns the total after adding 3 frames', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(3, 4);
    scorecard.addFrame(5, 4)
    scorecard.addFrame(2, 1);
    expect(scorecard.calculateScore()).toEqual(19);
  });

  it ('correctly calculates a strike', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(10, 0);
    scorecard.addFrame(3, 2);
    expect(scorecard.calculateScore()).toEqual(20);
  });

  it ('correctly calculates multiple strikes', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(10, 0);
    scorecard.addFrame(3, 2);
    scorecard.addFrame(5, 2);
    scorecard.addFrame(10, 0);
    scorecard.addFrame(3, 6);
    expect(scorecard.calculateScore()).toEqual(55);
  });

  it('correctly calculates a spare', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(8, 2);
    scorecard.addFrame(3, 2);
    expect(scorecard.calculateScore()).toEqual(18)
  });

  it ('correctly calculates multiple spares', () => {
    let scorecard = new ScoreCard();
    scorecard.addFrame(8, 2);
    scorecard.addFrame(3, 2);
    scorecard.addFrame(5, 2);
    scorecard.addFrame(3, 7);
    scorecard.addFrame(5, 1);
    expect(scorecard.calculateScore()).toEqual(46);
  });
});