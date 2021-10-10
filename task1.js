console.log('app was just started');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  const output = input.split('').reverse().join('') + '\n';
  process.stdout.write(output);
});
