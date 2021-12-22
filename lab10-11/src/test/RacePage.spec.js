const assert = require('assert');
const Driver = require('../driver/Driver');
const RacePage = require('../pages/RacePage');

describe('Test kpas site', function () {
  let driver;
  let racePage;

  beforeEach(async function () {
    driver = await Driver.getDriver();
    racePage = new RacePage(driver);
  });

  afterEach(async function () {
    await Driver.closeDriver();
  });

  it('Should get races by certain route', async function() {
    racePage
      .goToTourSite()
      .openToRoute();

    await racePage.waitToRouteName();

    racePage
      .chooseToRoute();

    const routeName = await racePage.getRouteName();
    await racePage.waitFindRoutes();

    racePage.findRoutes();

    await racePage.waitResultRoutes();

    const expectedRouteResult = await racePage.checkRoutesFromResult(routeName);
    assert.ok(expectedRouteResult);
  });

  it('Should get races to defined city', async function () {
    racePage
      .goToTourSite()
      .clickDefinedRoute();

    const routeName = await racePage.getDefinedRouteName();

    await racePage.waitFindRoutes();

    racePage.findRoutes();

    await racePage.waitResultRoutes();

    const expectedRouteResult = await racePage.checkRoutesFromResult(routeName);
    assert.ok(expectedRouteResult);
  });

  it('Should get contacts info', async function() {
    racePage.goToTourSite().openContactsPage();
    await racePage.waitContactsInfo();
    const contacts = await racePage.getContactsInfo();

    assert.strictEqual(contacts, '8 (861) 238-71-77');
  });
})
