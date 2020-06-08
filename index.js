const liteflow = new (require('@liteflow/service'))()

liteflow.listenTask({
  select: require('./tasks/select'),
  merge: require('./tasks/merge'),
  value: require('./tasks/value')
})