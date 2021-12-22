const { createLogger, format, transports } = require("winston");
const { By } = require('selenium-webdriver');

class RaceBasePage {

  constructor(driver) {
    this.driver = driver;
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      transports: [
        new transports.Console()
      ]
    });
  }

}

module.exports = RaceBasePage;
