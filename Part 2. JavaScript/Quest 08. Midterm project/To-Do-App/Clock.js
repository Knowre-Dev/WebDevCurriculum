class Clock{
    #dom
    constructor(dom) {
        this.#dom = dom;
        this.prepareDom();
    }

    prepareDom(){
        const t = document.querySelector('.template-clock');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.clock');
    }

    getDom(){
        return this.#dom;
        
    }

    createClock(){

    }
}