const { RacePage } = require ('./RacePage');

class RaceForm extends RacePage {

  _cityCode = '350016';
  _busName = 'Ksania';
  _busNumber = '1234';
  _pansionCode = '228322';

  isTourFormComplete = false;

  setTourFormValues() {
    this.chooseCity(this._cityCode);
    this.enterTextByCss('#busname', this._busName);
    this.chooseBusNumber(this._busNumber);
    this.choosePansion(this._pansionCode);
    this.isTourFormComplete = true;
    return this;
  }

  findRaces() {
    if (this.isTourFormComplete) {
      this.clickByCss('#hs-form > div.search-btn-point > input');
      this.isTourFormComplete = false;
    }
  }
}

module.exports = new RaceForm();