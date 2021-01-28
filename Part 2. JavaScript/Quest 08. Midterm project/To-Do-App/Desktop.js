// 배경화면 관련 기능 구현
class Desktop {
    #dom
    #clock
    constructor(dom) {
        this.#dom = dom;
        this.#clock = new Clock();
        this.showClock(this.#clock);
    }

    showClock(clock){
        this.#dom.appendChild(clock.getDom());
    }
}