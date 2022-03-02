require('esbuild').buildSync({
    entryPoints: ['example/without-helper/inject+define/entry.js'],
    bundle: true,
    define: { 'process.cwd': 'dummy_process_cwd' },
    inject: ['example/without-helper/inject+define/process-shim.js'],
    outfile: 'example/without-helper/inject+define/out.js',
});
