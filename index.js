const mesg = require('mesg-js').service()

mesg.listenTask({
  select: require('./tasks/select'),
  merge: require('./tasks/merge')
})