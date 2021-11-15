const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--headless");
chromeOptions.addArguments("--no-sandbox");
chromeOptions.addArguments("--disable-dev-shm-usage");
const { By } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

class RacePage {

  goToTourSite(theURL){
    driver.get(theURL);
  }

  openRacesTab(css) {
    this.clickByCss(css);
    return this;
  }

  getFoundRacesLength(css) {
      return driver.findElement(By.css(css))
      .findElements(By.css('.kpas-rasp-result-item'))
      .then(function(races){
        return races.length;
    });
  }

  chooseRaceFrom(cityCode) {
    const selectedPointFrom = By.css(`[name="from"] option[value="${ cityCode }"]`);
    driver.findElement(By.css('[name="from"]')).click();
    driver.findElement(selectedPointFrom).click();
  }

  chooseRaceTo(cityCode) {
    const selectedPointTo = By.css(`[name="to"] option[value="${ cityCode }"]`);
    driver.findElement(By.css('[name="to"]')).click();
    driver.findElement(selectedPointTo).click();
  }

  clickByCss(css){
    driver.findElement(By.css(css)).click();
  }

}

module.exports = {
  RacePage,
  driver
};
