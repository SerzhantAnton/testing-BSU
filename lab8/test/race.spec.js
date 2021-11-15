const RaceForm = require('../pages/RaceForm');
const assert = require('assert');
const { driver } = require('../pages/RacePage');
const { raceSiteUrl } = require('../utils/race.util');
const { waitPointFrom, waitPointTo, waitRaceResult } = require('../utils/race.util');

describe('Test kpas site', function () {

  beforeEach(function () {
    RaceForm.goToTourSite(raceSiteUrl);
  });

  afterEach(async function () {
      driver && driver.quit();
  });

  it('Search race at a bargain price', async function() {
    RaceForm
      .openRacesTab('body > div.dialog-off-canvas-main-canvas > div > div.kpas-header-wr > header > ul > li:nth-child(1) > a')

    await waitPointFrom();
    await waitPointTo();
    RaceForm
      .setRaceFormValues()
      .findRaces();

    await waitRaceResult();
    const isFoundRaces = await RaceForm.getFoundRacesLength('.kpas-rasp-result-items');
    assert.ok(isFoundRaces);
  })
})
