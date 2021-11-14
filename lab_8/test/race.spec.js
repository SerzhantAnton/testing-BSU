const RaceForm = require('../pages/RaceForm');
const assert = require('assert');
const { driver } = require('../pages/RacePage');
const { tourSiteUrl } = require('../utils/race.util');
const { waitTableRaces } = require('../utils/race.util');

describe('Test tour site', function () {
    this.timeout(0);

  beforeEach(function () {
    TourForm.goToTourSite(tourSiteUrl);
  });

  afterEach(async function () {
      driver && driver.quit();
  });

  it('Search race at a bargain price', async function() {
    RaceForm
      .closeWelcomeModal('#fancybox-close')
      .openRacesTab('body > div.layout > div.content > div.index-page-block1 > div > div > div > ul > li:nth-child(2) > a')
      .setTourFormValues()
      .findRaces();

    await waitTableRaces();
    const isFoundRace = RaceForm.getRacesLength('#grid-list > tbody');

    assert.ok(isFoundRace);
  })
})