function isValid(user) {
    return user.firstname && user.lastname && user.email && user.password;
}
  
module.exports = {
    isValid,
};