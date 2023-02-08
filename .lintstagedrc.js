module.exports = {
  "*.{js,jsx,ts,tsx}": ["rome format --write", "rome check --apply-suggested"],
};
