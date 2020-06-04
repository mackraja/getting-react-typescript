const checked = (value: boolean, options: { message: string }) => {
  if (value !== true) {
    return options.message || 'must be checked';
  }
};

export default {
  checked
};
