import path from 'path';
import copy from 'rollup-plugin-copy';
import uglify from 'rollup-plugin-uglify';

const CLIENT_SRC = 'src/client';
const isProd = process.env.BUILD === 'prodcution';

export default [{
    input: path.resolve(CLIENT_SRC, 'app.js'),
    output: {
        format: 'iife',
        file: 'build/app.js'
    },
    plugins: [
        copy({
            [path.resolve(CLIENT_SRC, 'index.html')]: 'build/index.html',
            [path.resolve(CLIENT_SRC, 'styles.css')]: 'build/styles.css',
            verbose: true,
        }),
        uglify(),
    ],
    watch: {
        include: 'src/**'
    }
},{
    input: path.resolve(CLIENT_SRC, 'worker.js'),
    output: {
        format: 'iife',
        file: 'build/worker.js'
    },
    plugins: [
        uglify(),
    ]
}];
