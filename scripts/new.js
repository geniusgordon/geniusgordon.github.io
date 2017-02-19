#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const commander = require('commander');

let title;
const program = commander
  .version('0.0.1')
  .arguments('<title>')
  .action(arg => {
    title = arg;
  })
  .parse(process.argv);

if (typeof title === 'undefined') {
  console.error('Please specify the post title:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<title>')}`);
  process.exit(1);
}

try {
  const date = moment().format('YYYY-MM-DD');
  const path = title.toLowerCase().trim().replace(/\s+/g, '-');
  const dir = `pages/${date}-${path}`;
  fs.mkdirSync(dir);
  fs.writeFileSync(
    `${dir}/index.md`,
    `---\ntitle: ${title}\ndate: ${date}\npath: /${date}-${path}/\n---`
  );
  console.log(`Created new post at ${dir}/index.md`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
