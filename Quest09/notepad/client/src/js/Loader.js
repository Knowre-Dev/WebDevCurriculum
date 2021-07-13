// import { DocApi } from './api.js';
// import { type } from './utils.js';
//
// export class Loader {
//   async load() {
//     return this._load();
//   }
//   async save(data) {
//     return this._save(data);
//   }
//   _load() {
//     throw 'should be overridden';
//   }
//   _save(data) {
//     throw 'should be overridden';
//   }
// }
//
// export class LocalStorageLoader extends Loader {
//   _load() {
//     return this.has('docs')
//       ? this.get('docs')
//       : [
//           {
//             name: 'Untitled',
//             text: '탭을 더블클릭하면 파일 명을 바꿀 수 있습니다.',
//           },
//         ];
//   }
//   _save(data) {
//     this.set('docs', data);
//   }
//   has(key, _ = type(key, 'string')) {
//     const item = localStorage.getItem(key);
//     return !!item;
//   }
//   get(key, _ = type(key, 'string')) {
//     if (!this.has(key)) {
//       return undefined;
//     }
//     return JSON.parse(localStorage.getItem(key));
//   }
//   set(key, value, _0 = type(key, 'string')) {
//     if (!value) {
//       throw 'value error';
//     }
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// }
//
// export class RestLoader extends Loader {
//   #base;
//   #version;
//   constructor(base, version) {
//     super();
//     this.#base = base;
//     this.#version = version;
//   }
//   async _load() {
//     return await DocApi.getDocs();
//   }
//   async _save(data) {
//     const docs = JSON.stringify(data);
//     const res = await fetch(`${this.#base}/${this.#version}/docs`, {
//       body: docs,
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const json = await res.json();
//     return json;
//   }
// }
