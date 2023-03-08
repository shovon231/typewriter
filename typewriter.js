const sentence = "hello there from lighthouse labs\n";
let interval = 0;
let counter = 0;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), interval);
  interval += 50;
}
