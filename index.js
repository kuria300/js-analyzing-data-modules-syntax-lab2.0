const datejs= require('datejs')

function combineUsers(...args){
  let combinedObject={
    users: [],
    merge_date: new Date().toString("M/d/yyyy")
  }
//  let arr= [...args].flat()
//  arr.map((val)=> combinedObject.users.push(val))
  args.map((eachArr)=>(
     combinedObject.users.push(...eachArr)
  ))
 
  return combinedObject
}


//combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};