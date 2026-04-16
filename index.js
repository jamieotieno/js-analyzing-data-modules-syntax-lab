require("datejs");

// Function to combine all users
function combineUsers(...args) {
  
  const combinedObject = {
      users: []
  };

  

  // loop through args
  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr]; // Merges the arrays
  }; 

 //  Gets today's date
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;

}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};