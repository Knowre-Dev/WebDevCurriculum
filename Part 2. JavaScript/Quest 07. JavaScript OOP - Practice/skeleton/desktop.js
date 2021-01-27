// DeskTop Class
class Desktop {
    #dom            // Private Field
    #icons
    #folders
    #button
    btListener

    // 생성자
    constructor(dom, initIcon) {
        this.#dom = dom;                        // 각 화면의 dom 초기화
        this.#dom.classList.add('desktop');     // classList <- desktop

        this.#icons = [];                       // Array
        this.#folders = [];
        this.icon = null;
        this.btListener = new ButtonHandler();

        console.log("Create Desktop");

        for (let i = 0; i < initIcon.icon; i++) {       // Create Icon
            this.icon = new Icon();
            this.newIcon(this.icon);
        }
        for (let i = 0; i < initIcon.folder; i++) {     // Create Folder
            this.icon = new Folder();
            this.newFolder(this.icon);
        }
        this.changeIconSize();                          // Create Size Button
        this.changeIconImg();                           // Create Img Button
        this.newWindow();
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
        icon.setDeskTopId();
        this.#dom.appendChild(icon.getDom());       // icon 의 DOM 을 얻어 Desktop DOM 에 붙임
        icon.moveIcon(this.getAutoNewPosition());   // icon 포지셔닝
        this.#icons.push(icon);                     // icon DOM push
    }

    // New Folder
    newFolder(icon) {
        icon.setDeskTopId();
        this.#dom.appendChild(icon.getDom());
        icon.moveIcon(this.getAutoNewPosition());
        this.#folders.push(icon);
    }

    // New Window
    newWindow() {
        let window;
        let test = 1;
        this.#dom.addEventListener('new-window', (e) => {
            window = new Window();
            debugger;
            // this.#dom.appendChild(window.getDom());
        });
        test = 1;
        this.#dom.addEventListener('delete-window', () => {
            // e.detail.windowDom.remove();
            window = null;
        })
    }

    // 아이콘 크기 변경 메서드
    changeIconSize() {
        this.#button = this.btListener.getDom();
        this.#dom.appendChild(this.#button);
        this.btListener.changeIconSize(this.#dom);
    }

    changeIconImg() {
        this.#button = this.btListener.getImgDom();
        this.#dom.appendChild(this.#button);
        this.btListener.changeIconImg(this.#dom);
    }
}

// Icon Class
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
    setDeskTopId() {
        this.#dom.classList.add('icontype');
        this.#dom.setAttribute('src', './img/icon.png');
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

    setDeskTopId() {
        this.#dom.classList.add('foldertype');
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

// Window Class
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
            console.log("delete-window 호출중....");
            // TODO : delete-window 100만개 호출!
            // for (let i = 0; i < 500; i++) {
                this.#dom.dispatchEvent(new CustomEvent('delete-window', {
                    bubbles: true,
                    detail: {
                        windowDom: this.#dom
                    }
                }));
            // }
        })
    }
}

// Button Event Class
class ButtonHandler {
    #dom
    #subdom

    constructor(option = {}) {
        this.prepareDom();
        this.prepareImgDom();
    }

    prepareDom() {
        const t = document.querySelector('.template-ChangeSize');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.changeBT');                // template icon 선택한 뒤 지역 dom 에 포함
    }

    prepareImgDom() {
        const t = document.querySelector('.template-ChangeSize');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#subdom = tmpl.querySelector('.changeIcon');
    }

    getDom() {
        return this.#dom;
    }

    getImgDom() {
        return this.#subdom;
    }

    // 아이콘 크기 변경 메서드
    changeIconSize(desktop) {
        const element = desktop.childNodes;
        let width, height;
        console.log(element);
        const event = this.#dom.addEventListener('click', () => {
            width = prompt('Width', "");
            height = prompt("Height", "");
            for (let node of element) {
                if (node.classList.contains('icon')) {
                    node.style.width = width + "px";
                    node.style.height = height + "px";
                } else {
                    if (!node.classList.contains('changeIcon'))
                        // TODO : remove() 방법말고 다른 방법은?
                        node.remove();
                }
            }
            desktop.appendChild(this.#dom);
        });
        return {w: width, h: height};
    }

    // 아이콘 이미지 변경 메서드
    changeIconImg(desktop) {
        const event = this.#subdom.addEventListener('click', (e) => {
            const element = desktop.childNodes;
            let name = prompt('img 폴더에 저장된 아이콘의 이름을 입력하세요 ex)test.png');
            let type = prompt('바꿀 아이콘 타입을 입력하세요. ex) Icon : i Folder : f');
            if (type === 'i') {
                for (let node of element) {
                    if (node.classList.contains('icontype')) {
                        node.setAttribute('src', "./img/" + name);
                    }
                }
            } else if (type === 'f') {
                for (let node of element) {
                    if (node.classList.contains('foldertype')) {
                        node.setAttribute('src', "./img/" + name);
                    }
                }
            } else {
                alert("잘못 입력하셨습니다. 다시 시도해 주세요.");
            }
            desktop.appendChild(this.#subdom);
        });
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
            console.log("new-window 호출중....");
            // TODO : new-window 100만개 호출
            for (let i = 0; i < 1000000; i++) {
                this.#dom.dispatchEvent(new CustomEvent("new-window", {
                    bubbles: true,
                    detail: {
                        dom: this.#dom
                    }
                }));
            }
            debugger;
            console.log("delete-window 호출중....");
            for(let i=0;i<1000000;i++){
                this.#dom.dispatchEvent(new CustomEvent("delete-window", {
                    bubbles: true,
                    detail: {
                        dom: this.#dom
                    }
                }));
            }
            console.log("호출 완료");
        });
    }
}