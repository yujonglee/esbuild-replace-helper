require('esbuild').buildSync({
    entryPoints: ['example/without-helper/define/entry.js'],
    bundle: true,
    define: {
        DEBUG: true,
    },
    outfile: 'example/without-helper/define/out.js',
});
