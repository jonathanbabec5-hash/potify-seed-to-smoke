import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const html=readFileSync('public/index.html','utf8');
test('check the published edition and its primary assets',()=>{
assert.ok(html.includes('kind="captions"'));
assert.ok(readFileSync('public/film/field-note.vtt','utf8').startsWith('WEBVTT'));
assert.equal(readFileSync('public/film/field-note.mp4').subarray(4,8).toString(),'ftyp');

});
