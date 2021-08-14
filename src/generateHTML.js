// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
const index = require('../index');
// const Employee = require('../lib/Employee');
// let managerDiv = '';
// let engineerDiv = '';
// let internDiv = '';
let finalArray = [];


function basicHTML() { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" integrity="sha512-RntatPOhEcQEA81gC/esYoCkGkL7AYV7TeTPoU+R9zE44/yWxVvLIBfBSaMu78rhoDd73ZeRHXRJN5+aPEK53Q==" crossorigin="anonymous" />
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header class='bg-blue-200'>
        <h2 class='text-white text-center text-4xl p-3'>My Team</h2>
        </header>
        <main id='employee-profiles' class='grid grid-cols-1 md:grid-cols-3 main'>
        ${finalArray.join('')}
        </main>
    </body>
    </html>`
};

function generateHTML (arr) {
    arr.forEach((employee) => {
        switch(employee.getRole()){
            case 'Manager':
                managerCard(employee);
                break;
            case 'Engineer':
                engineerCard(employee);
                break;
            default:
                internCard(employee);
        }
    })
    return basicHTML();
}


//manager card
function managerCard(employee){
    let managerDiv = '';
    if (employee !== ""){
        managerDiv = `
        <div class='bg-blue-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-blue-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-user-tie w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Manager</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Office Number: ${employee.officeNumber}</span>
            </div>
        </div>`
    }
    //console.log(managerDiv);
    finalArray.push(managerDiv);
}

//engineer card
function engineerCard(employee){
    let engineerDiv = '';
    if (employee !== "") {
        engineerDiv = `
        <div class='bg-blue-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-blue-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-code w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Engineer</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>GitHub: <a class='underline hover:text-white' target='_blank' href='https://www.github.com/${employee.github}'>${employee.github}</a></span>
            </div>
        </div>`
    }
    //console.log(engineerDiv);
    finalArray.push(engineerDiv);
}

//intern card
function internCard(employee){
    let internDiv = '';
    if (employee !== "") {
    internDiv = `
        <div class='bg-blue-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-blue-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-user-graduate w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Intern</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-blue-50 shadow-inner rounded-sm'>School: ${employee.school}</span>
            </div>
        </div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

module.exports = generateHTML;