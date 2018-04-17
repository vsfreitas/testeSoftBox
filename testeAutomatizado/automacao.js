

require('chromedriver');

const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('http://demo.redmine.org/account/register');

const loginScreen = require('./loginScreen');
//module.exports = {loginScreen};
loginScreen(driver);
	
const idioma =  driver.findElement(webdriver.By.id('user_language')).sendKeys('0');

//const btnEnviar = driver.findElement(webdriver.By.name("commit"));
//btnEnviar.click();

//driver.quit();

