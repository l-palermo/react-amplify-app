const fs = require('fs');
const input = require('readline');

const userInput = input.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function toCamelCase(name) {
    if (name.includes('-')) {
        const nameArray = name.split('-');
        const camelName = nameArray.map((word) => word[0].toUpperCase() + word.slice(1));
        return camelName.join('');
    } else {
        const word = name[0].toUpperCase() + name.slice(1);
        return word;
    }
}

function path(folderName, componentName) {
    return process.cwd() + '/src/' + folderName + '/' + componentName;
}

function createFolder(pathName) {
    fs.mkdirSync(pathName, { recursive: true }, (error) => {
        if (error) {
            console.log('There is an error' + error);
        }
    });
}

function createIndex(path, name, nameCamelCase) {
    const index = path + '/index.js';
    const indexContent = `import ${nameCamelCase} from './${name}';\n\nexport default ${nameCamelCase};\n`;

    fs.writeFile(index, indexContent, (error) => {
        if (error) {
            console.log('There is an error' + error);
        }
    });
}

function createMain(path, name, nameCamelCase) {
    const main = path + '/' + name + '.js';
    const mainContent = `import React from 'react';
import PropTypes from 'prop-types';\n
const ${nameCamelCase} = () => {
    return (<></>);
};\n
${nameCamelCase}.propTypes = {\n\n};\n
${nameCamelCase}.defaultProps = {\n\n};\n
export default ${nameCamelCase};\n`;

    fs.writeFile(main, mainContent, (error) => {
        if (error) {
            console.log('There is an error' + error);
        }
    });
}

function createTest(path, name, nameCamelCase) {
    const test = path + '/' + name + '.test.js';
    const testContent = `import React from 'react';\n
import ${nameCamelCase} from '.';\n
const requiredProps = {\n\n};\n
const setupTest = mount(<${nameCamelCase} {...requiredProps} />);\n
describe('${nameCamelCase}', () => {
    it('should ', () => {
        const wrapper = setupTest();
    });
});\n`;

    fs.writeFile(test, testContent, (error) => {
        if (error) {
            console.log('There is an error' + error);
        }
    });
}

(async () => {
    userInput.question('Enter folder name/path (path starts from src/): ', async function (
        folderName
    ) {
        userInput.question('Enter component name (kebab-case): ', async function (componentName) {
            const nameCamelCase = toCamelCase(componentName);
            const location = path(folderName, componentName);

            await createFolder(location);
            await createIndex(location, componentName, nameCamelCase);
            await createMain(location, componentName, nameCamelCase);
            await createTest(location, componentName, nameCamelCase);

            userInput.close();
        });
    });
})();
