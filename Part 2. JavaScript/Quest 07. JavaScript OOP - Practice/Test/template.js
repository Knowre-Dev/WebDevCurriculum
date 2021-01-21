class Desktop{
    constructor(icon, desktop) {
        this.icon = icon;
        this.desktop = desktop;
        this.supportsTemplate();
    }

    supportsTemplate(){
        return console.log('content' in document.createElement('template'));
    }

}

class Icon{
    constructor() {
    }
}

class Folder{
    constructor() {
    }
}

class Window{
    constructor() {
    }
}