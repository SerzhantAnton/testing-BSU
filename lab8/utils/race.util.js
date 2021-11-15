const { driver } = require('../pages/RacePage');
const { By, until } = require('selenium-webdriver');
const raceSiteUrl = 'https://kpas.ru/?';

async function waitPointFrom() {
    return driver.wait(until.elementLocated(By.css('[name="from"]')));
}

async function waitPointTo() {
    return driver.wait(until.elementLocated(By.css('#block-kpasblockfullinheaderraspisaniepolnoevshapke > div > div > div.header-rasp-input-wr.header-rasp-input_kuda > div.header-rasp-input > div.jq-selectbox.jqselect.changed > select > option:nth-child(10)')));
}

async function waitRaceResult() {
    return driver.wait(until.elementLocated(By.css('.kpas-rasp-result-items > .kpas-rasp-result-item')));
}

module.exports = {
    waitPointFrom,
    waitPointTo,
    waitRaceResult,
    raceSiteUrl
};
