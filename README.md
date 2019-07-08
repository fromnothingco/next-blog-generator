# next-blog-generator

Function for getting items from a directory in the pages dir and generating static files. 

```
module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const articles = await articles("blog");
    return Object.assign(defaultPathMap, articles);
  }
};
```
