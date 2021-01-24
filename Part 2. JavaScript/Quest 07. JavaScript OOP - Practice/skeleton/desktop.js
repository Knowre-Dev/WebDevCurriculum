class Desktop {
    #dom            // Private Field
    #icons
    #folders
    #desktops
    #button
    btListener

    // 생성자
    constructor(dom, initIcon) {
        this.#dom = dom;                        // 각 화면의 dom 초기화
        this.#dom.classList.add('desktop');     // classList에 desktop 추가

        this.#icons = [];                       // Array
        this.#folders = [];
        this.#desktops = initIcon.desktop;
        this.icon = null;
        this.btListener = new Button();

        for (let i = 0; i < initIcon.icon; i++) {       // Icon, Folder 개수 파악
            this.icon = new Icon();
            this.newIcon(this.icon);
        }
        for (let i = 0; i < initIcon.folder; i++) {
            this.icon = new Folder();
            this.newFolder(this.icon);
        }
        this.changeIconSize();
        this.changeIconImg();

    }

    //Icon 자리 배치 Return : x, y 값
    getAutoNewPosition() {
        const totalIcon = this.#icons.length + this.#folders.length;    // 아이콘 갯수
        return {
            // x, y 축 Return
            x: 50 * Math.floor(totalIcon / 10),      // floor : 소수점 자르고 정수 반환
            y: 50 * (totalIcon % 10)
        };
    }

    // New Icon
    newIcon(icon) {                     // Parameter : Icon DOM
        icon.setDeskTopId(this.#desktops);
        this.#dom.appendChild(icon.getDom());       // icon 의 DOM 을 얻어 Desktop DOM 에 붙임
        icon.moveIcon(this.getAutoNewPosition());   // icon 포지셔닝
        this.#icons.push(icon);                     // icon DOM push
    }

    // New Folder
    newFolder(icon) {
        icon.setDeskTopId(this.#desktops);
        this.#dom.appendChild(icon.getDom());
        icon.moveIcon(this.getAutoNewPosition());
        this.#folders.push(icon);
    }

    // New Window
    newWindow(window) {
        this.#dom.appendChild(window.getDom());
    }

    changeIconSize() {
        this.#button = this.btListener.getDom();
        this.#dom.appendChild(this.#button);
        this.btListener.getChangeSize(this.#dom);
    }

    changeIconImg(){
        this.#button = this.btListener.getImgDom();
        this.#dom.appendChild(this.#button);
    }
}

// Button Class
class Button {
    #dom
    #subdom
    constructor(option={}) {
        this.prepareDom();
    }

    prepareDom() {
        const t = document.querySelector('.template-ChangeSize');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.changeBT');                // template icon 선택한 뒤 지역 dom 에 포함
    }

    getDom() {
        return this.#dom;
    }

    getImgDom(){
        const t = document.querySelector('.template-ChangeSize');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#subdom = tmpl.querySelector('.changeIcon');
        return this.#subdom;
    }

    changeIconSize(desktop) {
        const element = desktop.childNodes;
        console.log(element);
        const event = this.#dom.addEventListener('click', () => {
            console.log("정상");
            let width = prompt('Width', "");
            let height = prompt("Height", "");
            for (let node of element) {
                if (node.getAttribute('class') === 'icon 1' ||
                    node.getAttribute('class') === 'icon 2') {
                    node.style.width = width+"px";
                    node.style.height = height+"px";
                } else {
                    node.remove();
                }
            }
            desktop.appendChild(this.#dom);
        });
    }

    changeIconImg(desktop){
        
    }


}

// 일반 아이콘
class Icon {
    #dom                    // Private Field
    constructor() {         // 생성자
        this.prepareDom();  // DOM 활성화 메서드
        this.addEvents();   // 합성 클래스 호출 메서드
    }

    // Icon DOM 얻음 Return : Icon DOM
    getDom() {
        return this.#dom;
    }

    // Desktop Class 값
    setDeskTopId(deskID) {
        this.#dom.classList.add(deskID);
    }

    // Icon 이동
    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    // Template DOM 얻은 후 활성화
    prepareDom() {
        const t = document.querySelector('.template-icon');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.icon');                // template icon 선택한 뒤 지역 dom 에 포함
    }

    // 합성 Class Object 생성 Argument : Icon template DOM
    addEvents() {
        new DraggableHandler(this.#dom);
    }
}

// Folder Class - Icon과 동작방식 같음
class Folder {
    #dom                        // Private Field

    constructor() {             // 생성자
        this.prepareDom();
        this.addEvents();
    }

    getDom() {
        return this.#dom;
    }

    setDeskTopId(deskID) {
        this.#dom.classList.add(deskID);
    }

    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    prepareDom() {
        const t = document.querySelector('.template-folder');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }

    addEvents() {
        // Folder Icon 더블클릭 이벤트가 존재하므로 Option 값 포함
        new DraggableHandler(this.#dom, {dblClick: true});
    }
}

// Mouse Event Class
class DraggableHandler {
    #dom            // Private Field
    #option         // dblClick Option
    #select

    constructor(dom, option = {}) {
        this.#dom = dom;
        this.#option = option;
        // this.#xbox = xbox;
        this.addDragAndDrop();

        if (option.dblClick) {
            this.addDblClick();
        }
    }

    addDragAndDrop() {
        // window Drag || Icon Drag
        if (this.#dom.classList.contains('window')) {
            this.#select = this.#dom.querySelector('.top');
        } else {
            this.#select = this.#dom;
        }

        const mouseDownEvent = this.#select.addEventListener('mousedown', e => {
            let pushed = true;
            let mouseCoord = {
                x: e.clientX,
                y: e.clientY
            };

            const mouseMoveEvent = document.addEventListener('mousemove', e => {
                if (pushed) {
                    const currCoord = {
                        x: Number(this.#dom.style.left.replace('px', '')),
                        y: Number(this.#dom.style.top.replace('px', ''))
                    };
                    const destCoord = {
                        x: currCoord.x + e.clientX - mouseCoord.x,
                        y: currCoord.y + e.clientY - mouseCoord.y
                    };

                    this.#dom.style.left = `${destCoord.x}px`;
                    this.#dom.style.top = `${destCoord.y}px`;

                    mouseCoord = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            });

            const mouseUpEvent = this.#select.addEventListener('mouseup', () => {
                pushed = false;
                this.#select.removeEventListener('mousemove', mouseMoveEvent);
                this.#select.removeEventListener('mousedown', mouseDownEvent);
                this.#select.removeEventListener('mouseup', mouseUpEvent);
            });
        });
    }

    addDblClick() {
        this.#dom.addEventListener('dblclick', e => {
            console.info(e);
            if (e.target.classList.contains("1")) {
                firstDesktop.newWindow(new Window(this.#dom));
            } else {
                secondDesktop.newWindow(new Window(this.#dom));
            }
        });
    }
}

class Window {
    #dom
    #xbox

    constructor(dom) {
        this.#dom = dom;
        this.prepareDom();          // Ready to Template
        this.addEvents();
    }

    getDom() {
        return this.#dom;
    }

    prepareDom() {
        const t = document.querySelector('.template-window');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.window');
        this.#xbox = tmpl.querySelector('.xbox');
    }

    addEvents() {
        // Folder Icon 더블클릭 이벤트가 존재하므로 Option 값 포함
        const event = new DraggableHandler(this.#dom, {xbox: true});
        const mouseClickEvent = this.#xbox.addEventListener('click', () => {
            this.#dom.remove();
        })
    }
}