const program = require('commander');
const path = require('path');

const main = require('./');

function run() {
  program.update = undefined;

  program.option('-j, --json-file [json path]', 'The existing JSON releases file')
    .option('-a, --app-zip [zip path]', 'App zip file to add to the releases file')
    .option('-v, --version [version]', 'Version of release')
    .option('-r, --remote-path [path]', 'Remote path for update server')
    .option('-u, --update', 'Update an existing entry')
    .parse(process.argv);

  const remotePath = program.remotePath;
  const zipPath = path.resolve(process.cwd(), program.appZip);
  const version = program.version;
  const update = program.update || false;
  const jsonPath = path.resolve(process.cwd(), program.jsonFile);

  main({
    remotePath,
    zipPath,
    version,
    update,
    jsonPath
  });
}

if (process.mainModule === module) {
  run();
}

module.exports = run;
