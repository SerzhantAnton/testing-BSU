const { driver } = require('../pages/RacePage');
const { By, until } = require('selenium-webdriver');
const tourSiteUrl = 'https://kpas.ru/?';

async function waitTableRaces() {
    return driver.wait(until.elementLocated(By.css('#grid-list > tbody > tr')));
}

module.exports = {
    waitTableRaces,
    tourSiteUrl
};