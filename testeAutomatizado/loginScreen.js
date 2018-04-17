const Utils = require('./lib/Utils');
const {SCREEN_IDS, SCREEN_USER} = require('./lib/seleniumKeys');

module.exports = function loginScreen(driver) {

    const utils = new Utils();
    utils.waitALittle(5000);
    
    const login = utils.getElemByID(SCREEN_IDS['login']);
    login.sendKeys(SCREEN_USER['usuario']);

    const password = utils.getElemByID(SCREEN_IDS['password']);
    password.sendKeys(SCREEN_USER['senha']);

    const confirmPassword = utils.getElemByID(SCREEN_IDS['confirmPassword']);
    confirmPassword.sendKeys(SCREEN_USER['senha']);

    const nomeUser = utils.getElemByID(SCREEN_IDS['firstName']);
    nomeUser.sendKeys(SCREEN_USER['nome']);

    const sobrenomeUser = utils.getElemByID(SCREEN_IDS['lastName']);
    sobrenomeUser.sendKeys(SCREEN_USER['sobrenome']);

    const email = utils.getElemByID(SCREEN_IDS['userEmail']);
    email.sendKeys(SCREEN_USER['email']);
    
};