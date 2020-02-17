module.exports = function createDreamTeam(members) {
  let result = [];

  if ( Object.prototype.toString.call(members) != '[object Array]'){ return false; }
  members.forEach( function(member) {
    if (typeof(member) === 'string'){
      result.push(member.trim()[0].toUpperCase())
    }
  });
  return result ? result.sort().join("") : false
};