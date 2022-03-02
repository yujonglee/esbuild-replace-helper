const helper = (config) => {
    const { source, replace } = config;

    const define = replace.reduce((acc, { from, to }) => {
        const { value, type } = to;

        return {
            ...acc,
            [from]: type === 'string' ? `\"${value}\"` : value
        }
    }, {});

    return {
        inject: source,
        define,
    }
};

const config = {
    source: ['process-shim.js'],
    replace: [
        {
            from: 'MESSAGE',
            to: {
                value: 'Good!',
                type: 'string'
            }
        },
        {
            from: 'process.cwd',
            to: {
                value: 'dummy_process_cwd',
                type: 'identifier'
            }
        }
    ]
};

require('esbuild').buildSync({
    entryPoints: ['entry.js'],
    bundle: true,
    outfile: 'out.js',
    ...helper(config)
});
