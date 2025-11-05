export default {
    testEnvironment: 'node', 
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    }, 
    transformIgnorePatterns: [
        'node_modules/(?!(readline-sync)/)',
    ],
    moduleNameMapper: {
        "(.+)\\.js$": "$1",
    },

    // Only javascript extensions since TypeScript is removed
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};