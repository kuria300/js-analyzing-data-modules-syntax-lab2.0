const datejs= require('datejs')

function combineUsers(...args){  
  return {
    users: args.flat(),
    merge_date: Date.today().toString("M/d/yyyy")
  }
}


//combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};