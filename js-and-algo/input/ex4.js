const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const menu = [
    { id: 1, action: 'Check Balance' },
    { id: 2, action: 'Deposit Money' },
    { id: 3, action: 'Withdraw Money' },
    { id: 4, action: 'Exit' },
];

function printMenu() {
    console.log('\n=== Banking System ===');
    for (const item of menu) {
        console.log(`${item.id}) ${item.action}`);
    }
}

async function startSurvey() {
    const rl = readline.createInterface({ input, output });
    let balance = 100;
    let choice = 0;

    try {
        do {
            printMenu();
            const answer = await rl.question('Choose option (1-4): ');
            choice = parseInt(answer);

            if (choice === 1) {
                console.log(`Current balance: $${balance}`);
            } else if (choice === 2) {
                const depositInput = await rl.question('Enter amount to deposit: $');
                const depositAmount = parseFloat(depositInput);
                
                if (isNaN(depositAmount) || depositAmount <= 0) {
                    console.log('Invalid amount. Please enter a positive number.');
                } else {
                    balance += depositAmount;
                    console.log(`New balance: $${balance}`);
                }
            } else if (choice === 3) {
                const withdrawInput = await rl.question('Enter amount to withdraw: $');
                const withdrawAmount = parseFloat(withdrawInput);
                
                if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                    console.log('Invalid amount. Please enter a positive number.');
                } else if (withdrawAmount > balance) {
                    console.log('Insufficient funds.');
                } else {
                    balance -= withdrawAmount;
                    console.log(`New balance: $${balance}`);
                }
            } else if (choice === 4) {
                console.log('Thank you for using the banking system. Goodbye!');
            } else {
                console.log('Invalid option. Please choose between 1 and 4.');
            }

        } while (choice !== 4);

    } catch (err) {
        console.error('Something went wrong:', err);
    } finally {
        rl.close();
    }
}

startSurvey();