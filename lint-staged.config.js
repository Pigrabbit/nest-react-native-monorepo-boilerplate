module.exports = {
  '*.+(ts|tsx|js|jsx|json)': [
    () => 'nx affected:lint --fix --parallel=3',
    (filenames) => `nx format:write --files=${filenames.join(',')}`,
  ],
};
