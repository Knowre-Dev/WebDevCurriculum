class Desktop{
    constructor(color, desktop) {
        this.color = color;
        this.desktop = desktop;
        this.useIt();
        this.supportsTemplate();
    }

    supportsTemplate(){
        return console.log('content' in document.createElement('template'));
    }

    useIt(){
        // const desktop = document.querySelector("#template-desktop");
        // desktop.content.querySelector(".desktop");
        // let clone = document.importNode(desktop.content, true);
        // document.body.appendChild(clone);
        //
        // const desktopColor = document.querySelector(".desktop");
        // // console.log(desktopColor);
        // desktopColor.style.backgroundColor = this.color;

        let content = document.querySelector('template').content;   // template 활성화
        let span = content.querySelector('span');                   // template 내 span 요소 선택
        console.log(span);
        span.textContent = parseInt(span.textContent) + 1;                  // span 요소의 text를 1씩 증가
        document.querySelector('#container').appendChild(           // container 요소에 template 요소를 append
            document.importNode(content,true));


        return this;
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