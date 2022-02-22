
// import PropsValidator, { RunEnv } from './cjs/dev/index'
// export default PropsValidator;
// export { RunEnv }


if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./cjs/index')
} else {

  module.exports = require('./cjs/index.min')
}