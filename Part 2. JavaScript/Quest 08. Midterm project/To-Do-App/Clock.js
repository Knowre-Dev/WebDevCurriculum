class Clock{
    #dom
    constructor() {
        this.prepareDom();
        this.startClock();
    }

    prepareDom(){
        const t = document.querySelector('.template-clock');
        const tmpl = document.importNode(t.content, true);
        const clockContainer = tmpl.querySelector('.clockContainer');
        this.#dom = clockContainer.querySelector('.clock');
    }

    getDom(){
        return this.#dom;
    }

    prepareClock() {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        debugger;
        this.#dom.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
    }

    startClock(){
        this.prepareClock();
        setInterval(this.prepareClock, 1000);
    }
}