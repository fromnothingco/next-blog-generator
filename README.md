# next-blog-generator

Function for getting items from a directory in the pages dir and generating static files. 

## Todo
- make this an npm module
- feed build with list of articles

```
next.config.js
import or cp function here


module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const articles = await articles("blog");
    return Object.assign(defaultPathMap, articles);
  }
};
```
