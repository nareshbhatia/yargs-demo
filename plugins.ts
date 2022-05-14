interface Plugin {
  name: string;
  exec: (options: { [option: string]: any }) => Promise<void>;
}

const ReactPlugin: Plugin = {
  name: 'react',
  exec: (options: { [key: string]: any }) => {
    console.log('ReactPlugin');
    console.log('options:');
    console.log(JSON.stringify(options, null, '  '));
    return Promise.resolve();
  },
};

const NextjsPlugin: Plugin = {
  name: 'nextjs',
  exec: (options: { [key: string]: any }) => {
    console.log('NextjsPlugin');
    console.log('options:');
    console.log(JSON.stringify(options, null, '  '));
    return Promise.resolve();
  },
};

export const plugins: { [name: string]: Plugin } = {};
plugins[ReactPlugin.name] = ReactPlugin;
plugins[NextjsPlugin.name] = NextjsPlugin;
