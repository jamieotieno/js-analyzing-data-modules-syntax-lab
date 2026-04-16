// Function to combine all users
function combineUsers(...args) {
  return args.flat();
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};