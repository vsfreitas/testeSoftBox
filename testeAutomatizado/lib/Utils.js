var Utils = (function() {

  function Utils() {}

  const webdriver = require('selenium-webdriver');

  const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  Utils.prototype = {
    
    waitALittle: function(timeParam) {
      const time = timeParam || 2000;
      setTimeout(function(){
        console.log('waiting');
      }, time);
    },
    getElemByID: function(receivedValue){
        if(receivedValue){
          return driver.findElement(webdriver.By.id(receivedValue))
        } else {
          console.log('Campo não encontrado');
        }
    },
    waitUntil: function(driver, receivedXpath){
      if(driver.wait(until.elementLocated(By.xpath(receivedXpath)))){
        return true;
      }
        return false;
    }
  };

  return Utils;
})();

module.exports = Utils;