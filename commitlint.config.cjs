module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'docs',
        'feat',
        'fix',
        'refactor',
        'test',
        'temp',
        'vercel',
        'build',
        'perf',
      ],
    ],
    'body-max-line-length': [0],
  },
};
