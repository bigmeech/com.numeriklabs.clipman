/* */ 
"format cjs";
import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/content.js',
	moduleName: 'acorn',
	plugins: [ buble() ],
	targets: [
		{ dest: 'dist/acorn.js', format: 'umd' },
		{ dest: 'dist/acorn.es.js', format: 'es' }
	]
};
