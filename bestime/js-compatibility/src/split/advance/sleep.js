function sleep (stamp) {
  return new Promise(resove => setTimeout(resove, stamp))
}

module.exports = sleep