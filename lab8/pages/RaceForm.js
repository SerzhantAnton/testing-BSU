const { RacePage } = require ('./RacePage');

class RaceForm extends RacePage {

  _cityFromCode = '5';
  _cityToCode = '16';

  isRaceFormComplete = false;

  setRaceFormValues() {
    this.chooseRaceFrom(this._cityFromCode);
    this.chooseRaceTo(this._cityToCode);
    this.isRaceFormComplete = true;
    return this;
  }

  findRaces() {
    if (this.isRaceFormComplete) {
      this.clickByCss('#block-kpasblockfullinheaderraspisaniepolnoevshapke > div > div > div.header-rasp-input-wr.header-rasp-input_nayti-btn > button');
      this.isRaceFormComplete = false;
    }
  }
}

module.exports = new RaceForm();
