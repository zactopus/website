module.exports = (eleventyConfig) => {
  // Copy different directories and files 
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("keybase.txt");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("service-worker.js");

  return {
    passthroughFileCopy: true
  };
};