const webdriver = require('selenium-webdriver');
const RaceBasePage = require('./RaceBasePage');
const { until } = require("selenium-webdriver");
const { By } = webdriver;

class RacePage extends RaceBasePage{

  #raceSiteUrl = 'https://kpas.ru/?';
  fromRoute = 'Абинск АВ';

  contactsXPath = '//a[text()="Контакты"]';
  contactsInfoCss = 'h3 > span.no-touch';
  definedRouteCss = '.header-rasp-input_kuda span:nth-child(1)';
  findRoutesButtonCss = '.kpas-header-rasp-nayti-btn';
  resultRoutesNameCss = '.kpas-rasp-result-title > h1';
  toRouteCss = '.header-rasp-input_kuda .jq-selectbox__select-text';
  toRouteNameCss = '.header-rasp-input_kuda ul > li:nth-child(3)';

  constructor(driver) {
    super(driver);
  }

  async waitResultRoutes() {
    return this.driver.wait(until.elementLocated(By.css(this.resultRoutesNameCss)));
  }

  async waitContactsInfo() {
    return this.driver.wait(until.elementLocated(By.css(this.contactsInfoCss)));
  }

  async waitFindRoutes() {
    this.findRoutesButton = this.driver.findElement(By.css(this.findRoutesButtonCss))
    return this.driver.wait(until.elementIsEnabled(this.findRoutesButton));
  }

  async waitToRouteName() {
    this.toRouteName = this.driver.findElement(By.css(this.toRouteNameCss))
    return this.driver.wait(until.elementIsEnabled(this.toRouteName));
  }

  goToTourSite(){
    this.driver.get(this.#raceSiteUrl);
    this.logger.info('Open tour site');
    return this;
  }

  openToRoute() {
    this.driver.findElement(By.css(this.toRouteCss)).click();
    this.logger.info('Open to route field');
    return this;
  }

  async getRouteName() {
    this.routeElement = await this.driver.findElement(By.css(this.toRouteCss));
    return this.routeElement.getText();
  }

  chooseToRoute() {
    this.driver.findElement(By.css(this.toRouteNameCss)).click();
    this.logger.info('Choose route');
    return this;
  }

  async checkRoutesFromResult(routeName) {
    this.resultRoutes = await this.driver.findElement(By.css(this.resultRoutesNameCss));
    this.routeName = await this.resultRoutes.getText();
    this.logger.info('Get routes result');
    return this.routeName.includes(routeName);
  }

  clickDefinedRoute() {
    this.driver.findElement(By.css(this.definedRouteCss)).click();
    this.logger.info('Click defined route');
    return this;
  }

  findRoutes() {
    this.driver.findElement(By.css(this.findRoutesButtonCss)).click();
    this.logger.info('Find routes');
    return this;
  }

  openContactsPage() {
    this.driver.findElement(By.xpath(this.contactsXPath)).click();
    this.logger.info('Open contacts page');
    return this;
  }

  async getDefinedRouteName() {
    this.routeElement = await this.driver.findElement(By.css(this.definedRouteCss));
    this.logger.info('Get route');
    return this.routeElement.getText();
  }

  async getContactsInfo() {
    this.contacts = await this.driver.findElement(By.css(this.contactsInfoCss));
    this.logger.info('Get contacts info');
    return this.contacts.getText();
  }

}

module.exports = RacePage;
