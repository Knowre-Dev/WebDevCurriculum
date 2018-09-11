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
		const token = this._get_token();
		if(token){
			const query = `mutation {
				auth
			}`;
			const req = new Request('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
    				'Accept': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				body: JSON.stringify({
					query
				})
			});

			fetch(req)
			.then(res => res.json())
			.then(result => {
				const userid = result.data.auth;
				if(userid){
					document.getElementById('userid').innerHTML = userid;
					this._title_init(userid);
				}else{
					document.getElementById('login').classList.add('login_open');
				}
			});
		}else{
			document.getElementById('login').classList.add('login_open');
		}
	}

	_title_init(userid){
		this.userid = userid;
		let query = `query {
			getUser(id: "${this.userid}"){
				lastTitle
				memos{
					id
					title
				}
			}
		}`;

		const req = new Request('/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
    			'Accept': 'application/json',
			},
			body: JSON.stringify({
				query
			})
		});

		fetch(req)
		.then(res => {
			if(res.ok) return res.json();
			else throw new Error(res.status);
		})
		.then(result => {
			const user = result.data.getUser;
			user.memos.map(element => {
				let div = document.createElement('div');
				div.className = 'file';
				let span = document.createElement('span');
				span.innerHTML = element.title;
				div.appendChild(span);
				this._title_event(div);

				document.getElementById('files').appendChild(div);
				if(user.lastTitle == element.title) div.click();
			});	
		})
		.catch(err => {
			alert(err);
		});
	}

	_title_event(div){
		div.onclick = () => {
			const title = div.children[0].innerHTML;
			const query = `query {
				getMemo(userId: "${this.userid}", title: "${title}"){
					id
					title
					content
					lastPosition
				}
			}`;

			const req = new Request('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					query
				})
			});

			fetch(req)
			.then(res => {
				if(res.ok) return res.json();
				else throw new Error(res.status);
			})
			.then(result => {
				const memo = result.data.getMemo;
				const textarea = document.getElementById('content_text');
				textarea.value = memo.content;
				textarea.name = memo.title;
				textarea.disabled = false;
				textarea.focus();
				textarea.setSelectionRange(memo.lastPosition, memo.lastPosition);
				document.getElementById('title').innerText = memo.title;
			})
			.catch(err => {
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

			const query = `mutation {
				login(id: "${id}", pw: "${pw}")
			}`;

			const req = new Request('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					query
				})
			});

			fetch(req)
			.then(res => res.json())
			.then(result => {
				const msg = result.data.login;
				if(msg == 'success'){
					document.getElementById('login').classList.remove('login_open')
					document.getElementById('userid').innerHTML = id;
					this._title_init(id);
				}else{
					console.log(result);
					alert(msg);
				}
			})
			.catch(err => {
				console.log(err);
			});
		};
	}

	_logout(){
		document.getElementById('logout').onclick = () => {
	        document.cookie = 'user' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	        window.location.reload();
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
		document.getElementById('create').onclick = () => {
			let popup_text = document.getElementById('popup_text');
			const query = `mutation {
				createMemo(
					userId: "${this.userid}",
					title: "${popup_text.value}"
				)
			}`;
			const req = new Request('/graphql', {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}),
				body: JSON.stringify({
					query
				})
			});

			fetch(req)
			.then(res => res.json())
			.then(result => {
				if(result.data.createMemo > 0){
					window.location.reload();
				}else{
					alert('해당 파일이 이미 존재합니다.');
				}
			});
		}
	}

	_textarea_auto_save(){
		document.getElementById('content_text').onkeydown = () => {
			const textarea = document.getElementById('content_text');
			const query = `mutation {
				updateMemo(
					userId: "${this.userid}", 
					title: "${textarea.name}", 
					content: """${textarea.value}""",
					lastPosition: ${textarea.selectionStart}
				)
			}`; 

			const req = new Request('/graphql',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					query
				})
			});

			fetch(req)
			.then(res => {
				if(res.status != 200){
					console.log(res);
				}
			});
		}
	}

	_get_token(){
		return '' || document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
};
