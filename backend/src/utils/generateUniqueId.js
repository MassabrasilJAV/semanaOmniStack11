const crypto = require('crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}

/**
 * teste unitario vai testar codigos desse tipo - a
 * algo muito especifico, curto, que nao é complicado, nao vai
 * conectar com banco de dados, comunicar com outras ferramentas
 * api, ou servico 
 */