import assert from 'node:assert/strict';
import { addMemory, getMemories, getMemoriesMD } from '@x12i/execution-memory-manager';

const history = { context: 'Example import', objective: 'Validate two records', memories: [], clips: [], jobObjects: [] };
addMemory(history, { context: 'Read', objective: 'Read input', role: 'loader', memory: { records: 2 } });
addMemory(history, { context: 'Validate', objective: 'Check input', role: 'validator', memory: { valid: 2 } });
const validators = getMemories(history, 'validator');
assert.equal(validators.length, 1);
assert.equal(validators[0].memory.valid, 2);
console.log(getMemoriesMD(history));
