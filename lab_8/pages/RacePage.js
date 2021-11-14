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

  closeWelcomeModal(css) {
    this.clickByCss(css);
    return this;
  }

  openRacesTab(css) {
    this.clickByCss(css);
    return this;
  }

  getFoundRacesLength(css) {
      return driver.findElement(By.css(css))
      .findElements(By.css('#grid-list > tbody > tr'))
      .then(function(races){
        return races.length;
    });
  }

  enterTextByCss(css, searchText){
    driver.findElement(By.css(css)).sendKeys(searchText);
  }

  choosePansion(pansionCode) {
    const valueSelected = By.css(`[name="searchPansionId"] option[value="${ pansionCode }"]`);
    driver.findElement(By.css('[name="searchPansionId"]')).click();
    driver.findElement(valueSelected).click();
  }

  chooseBusNumber(busNumber) {
    const valueSelected = By.css(`[name="searchBusTypeId"] option[value="${ busNumber }"]`);
    driver.findElement(By.css('[name="searchBusTypeId"]')).click();
    driver.findElement(valueSelected).click();
  }

  chooseCity(cityCode) {
    const valueSelected = By.css(`[name="searchCityId"] option[value="${ cityCode }"]`);
    driver.findElement(By.css('[name="searchCityId"]')).click();
    driver.findElement(valueSelected).click();
  }

  clickByCss(css){
    driver.findElement(By.css(css)).click();
  }

}

module.exports = {
  RacePage,
  driver
};