const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);

const files = async dir => {
  const files = await readdir(`./pages/${dir}`);
  return files.reduce((total, current) => {
    total[`./${dir}/${current}/index.html`] = {
      page: `/${dir}/${current}`
    };
    return total;
  }, {});
};
