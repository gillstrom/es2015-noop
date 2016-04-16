import test from 'ava';
import fn from './';

test('arrow', t => {
	t.is(typeof fn, 'function');
	t.is(fn(), undefined);
});
