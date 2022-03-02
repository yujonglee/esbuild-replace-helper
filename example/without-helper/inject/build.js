require('esbuild').buildSync({
    entryPoints: ['example/without-helper/inject/entry.js'],
    bundle: true,
    inject: ['example/without-helper/inject/process-shim.js'],
    outfile: 'example/without-helper/inject/out.js',
});
