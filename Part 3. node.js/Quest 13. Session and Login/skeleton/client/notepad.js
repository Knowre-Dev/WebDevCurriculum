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
			method: 'GET'
		});

		fetch(req).then(res => {
			if(res.ok) return res.json();
			else throw new Error();
		}).then(result => {
			document.getElementById('userid').innerHTML = result.output;
			this._file_init();
		}).catch(err => {
			document.getElementById('login').classList.add('login_open');
		});
	}

	_file_init(){
		const req = new Request('/files', {
			method: 'GET'
		});

		fetch(req).then(res => {
			if(res.ok) return res.json();
			else throw new Error(res.status);
		}).then(result => {
			result.output.map(element => {
				let div = document.createElement('div');
				div.className = 'file';
				let span = document.createElement('span');
				span.innerHTML = element;
				div.appendChild(span);
				this._attach_event(div);

				document.getElementById('files').appendChild(div);
			});	
		}).then(() => {
			let userid = document.getElementById('userid').innerHTML;
			let files = document.getElementById('files').children;
			let test = document.cookie.split(';').filter(x => x.trim().startsWith(userid));
			
			for(let file of files){
				
				console.log(file);
			}
		}).catch(err => {
			alert(err);
		});
	}

	_attach_event(div){
		div.onclick = () => {
			const filename = div.children[0].innerHTML;
			const req = new Request(`/${filename}`, {
				method: 'GET'
			});

			fetch(req).then(res => {
				if(res.ok) return res.json();
				else throw new Error(res.status);
			}).then(result => {
				let textarea = document.getElementById('content_text');
				textarea.value = result.output;
				textarea.name = filename;
				textarea.disabled = false;
				textarea.focus();
				
				document.getElementById('title').innerText = filename;
			}).catch(err => {
				alert(err);
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

	_signin(){
		document.getElementById('signin').onclick = () => {
			const id = document.getElementById('login-id').value;
			const pw = document.getElementById('login-pw').value;
			const req = new Request('/login', {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({input: {
					id: id,
					pw: pw
				}})
			});

			fetch(req).then(res => {
				if(res.ok) return res.json();
				else throw res.json();
			}).then(result => {
				document.getElementById('login').classList.remove('login_open')
				document.getElementById('userid').innerHTML = result.output;
				this._file_init();
			}).catch(err => {
				err.then(result => {
					alert(result.output);
				})
			});
		};
	}

	_logout(){
		document.getElementById('logout').onclick = () => {
			const req = new Request('/logout', {
				method: 'POST'
			});

			fetch(req).then(() => window.location.reload())
			.catch(err => alert(err));
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
			const req = new Request('/create', {
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
		document.getElementById('content_text').onkeypress = () => {
			const userid = document.getElementById('userid');
			const textarea = document.getElementById('content_text');
			const req = new Request(`/${textarea.name}`, {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({input: {
					content: textarea.value,
					position: textarea.selectionStart
				}})
			});

			fetch(req).then(res => {
				if(res.status != 200){
					console.log(res.status);
				}
			});
		}
	}
};
