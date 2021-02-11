module.exports = {
    artifactsDir: 'artifacts',
    ignoreFiles: [
        '.git/',
        '.idea/',
        'artifacts/',
        'node_modules/',
        '.gitignore',
        'package.json',
        'package-lock.json',
        'README.md',
        'web-ext-config.js',
    ],
    build: {
        overwriteDest: true,
    },
    sign: {
        channel: 'unlisted'
    }
};
