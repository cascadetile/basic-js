const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  // link: '',
  link: [],
  getLength() {
    return (this.chain.match(/~~/g) || []).length;
  },
  addLink(value) {
    // if (this.link.length === 0) {
    //   this.link += `( ${value} )`;
    // } else {
    //   this.link += `~~( ${value} )`;
    // }
    this.link.push(value);
    
    return this;
  },
  removeLink(position) {
    // if (this.link.length !== 0) {
    //   if (this.link.indexOf('~~', 0) === -1) {
    //     this.link = '';
    //   } else if (position === 1) {
    //     this.link = this.link.slice(this.link.indexOf('~~', 0) + 2);
    //   } else if (position === this.link.match(/~~/g).length + 1) {
    //     this.link = this.link.slice(0, -(this.link.lastIndexOf('~~', 0) + 2));
    //   } else {
    //     let pos = 1, start;
    //     for (let i = 0; i < this.link.length; i++) {
    //       if (this.link[i] === '~' && this.link[i + 1] === '~' && this.link[i + 2] === '(') {
    //         start = i;
    //         pos++;
    //         if (pos === position) break;
    //       }
    //     }
    //     this.link = this.link.slice(0, start) + this.link.slice(this.link.indexOf(')~~', start) + 1);
    //   }
    // }
    if (position <= 0 || typeof position !== 'number' || position > this.link.length) {
      this.link = [];
      throw new Error("You can\'t remove incorrect link!");
    } 
    
    this.link.splice(position - 1, 1);


    return this;
  },
  reverseChain() {
    this.link = this.link.reverse();
    return this;
  },
  finishChain() {
    this.link = this.link.map((element) => '( ' + element + ' )');
    let link = [...this.link];
    this.link = [];
    return link.join('~~');
  }
};

module.exports = {
  chainMaker
};
