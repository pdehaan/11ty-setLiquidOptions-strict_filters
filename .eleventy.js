module.exports = eleventyConfig => {
  eleventyConfig.setLiquidOptions({
    strict_filters: true
  });

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
