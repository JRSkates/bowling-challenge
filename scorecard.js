class ScoreCard {
  constructor() {
    this.frames = [];
    this.count = 10;
  }

  addFrame(pointOne, pointTwo) {
    this.count -= 1;
    if (this.count === 0) {
      return tenthFrame(pointOne, pointTwo);
    } else if(this.frames.length === 0) {
      this.frames.push([pointOne, pointTwo]);
    } else if (this.frames[this.frames.length - 1][0] === 10) {
      let sum = pointOne + pointTwo;
      let lastFrame = this.frames[this.frames.length - 1][0]
      this.frames[this.frames.length - 1][0] = sum + lastFrame
      this.frames.push([pointOne, pointTwo]);
    } else if (this.frames[this.frames.length - 1].reduce((total, amount) => total + amount) === 10) {
      let lastFrame = this.frames[this.frames.length - 1][0]
      this.frames[this.frames.length - 1][0] = pointOne + lastFrame
      this.frames.push([pointOne, pointTwo]);
    } else {
      this.frames.push([pointOne, pointTwo]);
    }
    // console.log(this.frames);
    // console.log(this.count);
    // console.log(this.frames[this.frames.length - 1][0]);

  }

  calculateScore() {
    if(this.frames.length === 0) return 0;
    let result = this.frames.flat().reduce((total, amount) => total + amount);
    return result;
  }

  tenthFrame(pointOne, pointTwo) {

  }

}

module.exports = ScoreCard

