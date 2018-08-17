class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	constructor(){
		this._init();
	}

	_init(){
		this._fetch_files();
		this._event();
	}

	_fetch_files(){
		const req = new Request('/files', {
			method: 'GET'
		});

		fetch(req).then(res => res.json())
		.then(result => {
			result.output.map(element => {
				let div = document.createElement('div');
				div.className = 'file';
				let span = document.createElement('span');
				span.innerHTML = element;
				div.appendChild(span);
				this._get_event(div);

				document.getElementById('files').appendChild(div);
			});	
		});
	}

	_get_event(div){
		div.onclick = () => {
			let filename = div.children[0].innerHTML;
			const req = new Request('/files/' + filename, {
				method: 'GET'
			});

			fetch(req).then(res => res.json())
			.then(result => {
				let textarea = document.getElementById('content_text');
				textarea.value = result.output;
				textarea.name = filename;
				textarea.disabled = false;
				document.getElementById('save').disabled = false;
				document.getElementById('title').innerText = filename;
			});
		};
	}

	_event(){
		this._popup_open();
		this._popup_close();
		this._create();
		this._save();
	}

	_save(){
		document.getElementById('save').onclick = () => {
			let textarea = document.getElementById('content_text');
			const req = new Request('/files/' + textarea.name, {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({input: textarea.value})
			});

			fetch(req).then(res => {
				if(!res.ok){
					console.log(res.status);
				}
			});
		}
	}

	_popup_open(){
		let popup_open = document.getElementById('popup_open');
		popup_open.onclick = (e) => {
			document.getElementById('popup').classList.add('popup_open');
		};
	}

	_popup_close(){
		let popup_close = document.getElementById('popup_close');
		popup_close.onclick = (e) => {
			document.getElementById('popup').classList.remove('popup_open');
		};
	}

	_create(){
		let create = document.getElementById('create');
		create.onclick = () => {
			let popup_text = document.getElementById('popup_text');
			const req = new Request('/files/create', {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({input: popup_text.value})
			});

			fetch(req).then(res => {
				if(res.ok){
					window.location.reload();
				}else{
					if(res.status == 409){
						alert('해당 파일이 이미 존재합니다.');
					}else{
						console.log(res.status);
					}
				}
			})
		}
	}
};
