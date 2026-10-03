import '@testing-library/jest-dom/vitest';import {afterEach,vi} from 'vitest';import {cleanup} from '@testing-library/react';
// Unit tests use an explicit storage fixture; Playwright tests use real browser storage.
const values=new Map<string,string>();vi.stubGlobal('localStorage',{getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>values.set(key,String(value)),clear:()=>values.clear()});
afterEach(()=>{cleanup();localStorage.clear();});
Object.defineProperty(HTMLDialogElement.prototype,'showModal',{value:function(){this.open=true;}});Object.defineProperty(HTMLDialogElement.prototype,'close',{value:function(){this.open=false;}});
