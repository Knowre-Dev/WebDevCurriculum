class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	constructor(){
		this._init();
	}

	_init(){
		this._user_init();
		this._bind_event();
	}

	_user_init(){
		const req = new Request('/user', {
			method: 'GET',
			credentials: 'same-origin'
		});

		fetch(req).then(res => {
			if(res.status == 200){
				this._fetch_files();
			}else{
				document.getElementById('login').classList.add('login_open');
			}
		});
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

	_bind_event(){
		this._signin();
		this._logout();
		this._popup_open();
		this._popup_close();
		this._create();
		this._textarea_auto_save();
	}

	_logout(){
		document.getElementById('logout').onclick = () => {
			const req = new Request('/logout', {
				method: 'POST'
			});
			fetch(req).then(res => {
				if(res.status == 200){
					window.location.reload();
				}
			});
		}
	}

	_signin(){
		document.getElementById('signin').onclick = () => {
			const req = new Request('/login', {
				method: 'POST',
				credentials: 'same-origin',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({input: {
					id: document.getElementById('login-id').value,
					pw: document.getElementById('login-pw').value
				}})
			});
			fetch(req).then(res => {
				switch(res.status){
					case 200:
						document.getElementById('login').classList.remove('login_open')
						this._fetch_files();
						break;
					case 401:
						res.json().then(result => {
							alert(result.output);
						});
						break;
				}
			});
		};
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

	_textarea_auto_save(){
		document.getElementById('content_text').onchange = () => {
			const userid = document.getElementById('userid');
			const textarea = document.getElementById('content_text');
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
};
