const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    (arguments.length === 0) ? this.array.push('( )') : this.array.push('(' + ' ' + String(value) + ' ' + ')');
    return this;
  },

  removeLink(position) {
    if (typeof(position) != 'number' || position < 1 || position > this.getLength()) {
      this.array.splice(0, this.getLength());
      throw new Error("You can't remove incorrect link!");
    }

    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },
  
  finishChain() {
    let result = this.array.join('~~');
    this.array.splice(0, this.getLength());
    return result;
  }
};

module.exports = {
  chainMaker
};
