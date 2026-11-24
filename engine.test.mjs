import test from 'node:test';
import assert from 'node:assert/strict';
import {assess} from './engine.mjs';
test('least privilege passes',()=>assert.equal(assess(['read'],['read']).passed,true));
test('excess admin fails',()=>assert.deepEqual(assess(['read','admin'],['read']).excess,['admin']));
test('missing permission fails',()=>assert.equal(assess([],['read']).passed,false));
test('unknown permission rejected',()=>assert.throws(()=>assess(['unknown'],[])));
