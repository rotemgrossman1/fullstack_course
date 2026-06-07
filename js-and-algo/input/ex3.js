const readline = require('readline/promises'); // Note the '/promises'
const { stdin: input, stdout: output } = require('process');

async function startSurvey() {
  // Create the interface
  const rl = readline.createInterface({ input, output });

  try {
    // You can now await the answers sequentially
    const name = await rl.question('What is your name? ');
    const email = await rl.question('What is your email adress? ');
    const age = await rl.question('How old are you? ');
    const color = await rl.question('What is your faviorite color? ');

    const summary = {
        name: name,
        email: email,
        age:age,
        color:color

    }
    console.log('Registration Summary:')
    console.log(summary)
  } catch (err) {
    console.error('Something went wrong:', err);
  } finally {
    // Always close the interface in the finally block to prevent hangs
    rl.close();
  }
}

startSurvey();