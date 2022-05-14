import yargs from 'yargs/yargs';
import { plugins } from './plugins';

async function main() {
  const argv = await yargs().parse(process.argv.slice(2));

  console.log('----- argv -----');
  console.log(JSON.stringify(argv, null, '  '));

  const { _, $0: command, ...options } = argv;
  const plugin = _[0];
  console.log();
  console.log('----- argv destructured -----');
  console.log('command:', command);
  console.log('plugin:', plugin);
  console.log('options:');
  console.log(JSON.stringify(options, null, '  '));

  console.log();
  console.log('----- execute plugin -----');
  await plugins[plugin].exec(options);
  console.log();
}

main().catch((err) => console.error(err));
