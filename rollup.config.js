import path from 'path';
import identity from 'lodash.identity';

// Rollup Plugins
import copy from 'rollup-plugin-copy';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';

// Constants
const CLIENT_SRC = 'src/client';
const isProd = process.env.BUILD === 'production';

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
        isProd ? uglify() : null,
        !isProd ? serve({
            contentBase: './build',
            port: '6061',
            open: true,
        }) : null,
    ].filter(identity),
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
        copy({
            ['src/server/data']: 'build/data',
            verbose: true,
        }),
        isProd ? uglify() : null,
    ].filter(identity),
}];
