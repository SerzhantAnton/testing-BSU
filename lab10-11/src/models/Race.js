class Race {

  #fromRoute;
  #toRoute;

  constructor({ fromRoute, toRoute }) {
    this.#fromRoute = fromRoute;
    this.#toRoute = toRoute;
  }

  getFromRoute() {
    return this.#fromRoute;
  }

  getToRoute() {
    return this.#toRoute;
  }

  setToRoute(toRoute) {
    this.#toRoute = toRoute;
  }

  setFromRoute(fromRoute) {
    this.#fromRoute = fromRoute;
  }
}

module.exports = Race;
