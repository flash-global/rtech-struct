const s = require('superstruct')

const Incoterm = s.enums(['EXW', 'CIP', 'FCA', 'DAP', 'DPU', 'CPT', 'DDP', 'FAS', 'CFR', 'FOB', 'CIF'])

module.exports = {
  Incoterm: Incoterm
}
