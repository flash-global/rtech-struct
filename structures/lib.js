const s = require('superstruct')
const moment = require('moment-timezone')
const isUuid = require('is-uuid')

const Uuid = s.define('Uuid', isUuid.v4)

const zdReg = /^(?<dateTime>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(\.\d{3})?Z$/
const isoReg = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|(\+|\-)\d{2}:?\d{2})$/
const pReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/

const ZuluDateTimeStruct = s.define('ZuluDateTimeStruct', (date) => {
  try {
    // * Test the regex on the date and only get the datetime group without the µs
    const rgResult = zdReg.exec(date)

    if (rgResult === null) {
      return false
    }

    // * return the comparison between the formatted date and the datetime group
    // * if the formatted date does not exist, like 30th of February, they will be different
    return new Date(date).toISOString().includes(rgResult.groups.dateTime)
  } catch (error) {
    return false
  }
})

const isTimezone = (value) => {
  if (typeof value !== 'string') {
    return false
  }
  return moment.tz.zone(value) !== null
}

const Timezone = s.define('Timezone', isTimezone)

const isEmail = (value) => {
  if (typeof value !== 'string') {
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

const Email = s.define('Email', isEmail)

const Tz = s.define('Tz', (value) => {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: value }).format()
    return true
  } catch (e) {
    return false
  }
})

const zouloudate = (s) => {
  return s.pattern(s.string(), zdReg)
}

const isodate = () => {
  return s.pattern(s.string(), isoReg)
}

const phone = (s) => {
  return s.pattern(s.string(), pReg)
}

const consts = () => {
  return { zdReg, pReg, isoReg }
}

const gpsarray = (s) => {
  return s.size(s.array(s.pattern(s.string(), /(-)?\d+\.\d+/)), 0, 2)
}

const gpsstring = (s) => {
  return s.pattern(s.string(), /(-)?\d+\.\d+,(-)?\d+\.\d+/)
}

module.exports = {
  Uuid,
  zdReg,
  isoReg,
  pReg,
  ZuluDateTimeStruct,
  Tz,
  Timezone,
  Email,
  zouloudate,
  isodate,
  phone,
  consts,
  gpsarray,
  gpsstring
}
