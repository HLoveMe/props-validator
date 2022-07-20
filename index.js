
// import PropsValidator, { RunEnv } from './cjs/dev/index'
// export default PropsValidator;
// export { RunEnv }


if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./esm5/index')
} else {
  module.exports = require('./cjs/esm5.min')
}