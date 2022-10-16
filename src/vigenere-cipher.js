const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(mode) {
    if (mode === undefined) {
      this.direct = true;
    } else {
      this.direct = mode;
    }

    let alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    this.alpha = alpha;

    let table = [];

    for (let i = 0; i < alpha.length; i++) {
      let fmt = alpha.substring(i) + alpha.slice(0, i);
      table.push(fmt.split(''));
    }

    this.table = table;

    let hashMap = {};

    for (let i = 0; i < alpha.length; i++) {
      hashMap[alpha[i]] = i;
    }

    this.hashMap = hashMap;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let encrypted = '';

    let fmtKey = '';
    
    debugger;

    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.alpha.includes(message[i].toUpperCase())) {
        fmtKey += ' ';
        continue;
      } 
      fmtKey += key[j];
      j++;
      if (j >= key.length) j = 0;
    }

    for (let i = 0; i < message.length; i++) {
      if (!this.alpha.includes(message[i].toUpperCase())) {
        encrypted += message[i];
        continue;
      } 
      encrypted += this.table[this.hashMap[message[i].toUpperCase()]][this.hashMap[fmtKey[i].toUpperCase()]];
    }

    if (!this.direct) {
      encrypted = encrypted.split('').reverse().join('');
    }
    return encrypted;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let encrypted = '';

    let fmtKey = '';

    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alpha.includes(encryptedMessage[i].toUpperCase())) {
        fmtKey += ' ';
        continue;
      } 
      fmtKey += key[j];
      j++;
      if (j >= key.length) j = 0;
    }


    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alpha.includes(encryptedMessage[i].toUpperCase())) {
        encrypted += encryptedMessage[i];
        continue;
      } 

      let charPos = this.table[this.hashMap[fmtKey[i].toUpperCase()]].indexOf(encryptedMessage[i].toUpperCase());
      encrypted += this.table[0][charPos];
    }

		if (!this.direct) {
      encrypted = encrypted.split('').reverse().join('');
    }

    return encrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
