# First automation test with WebdriverIO
## _GreenKart app_


For the first automation test, the task is to buy mango and  pass the all assertions.
Below you can find the steps on how to do the task

1. Open the "https://rahulshettyacademy.com/seleniumPractise/#/"  page
2. On search bar type mango 
3. Select it
4. Check the quantity and price 
5. Add to cart
6. Check the order table
7. Choose the country
8. Agree with conditions
9. Proceed
- ✨Magic ✨



## Installation
Prerequisites of the Setup Configuration
-Node. js (comes bundled with npm, i.e. Node package manager). For those comfortable with using Maven in Java, consider this to be the equivalent package manager for JS.
-Any IDE to write the code.
**Step 1:Install Node.js npm**
One can download Node.js and npm, then check that it is installed by running the following commands in the terminal.

               *node -v*  (to check Node.js is installed) 
               *npm -v* (to check npm is installed)
Once the user has installed Node.js, they will get access to the npm, an inbuilt package manager which will be used to install Selenium for JS.

**Step 2: Install WebdriverIO**
One can download WebdriverIO, and install it by running the following command in the terminal by using the Node’s built-in package manager (NPM) to get the package.
Follow step by step
*npm init*
*npm install webdriverio*
*npm install @wdio/cli*
*npm install chai*
*npm init wdio .*
After comlete wdio config file

You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

__ npx wdio run ./wdio.conf.js
If you like to run specific test files you can add a --spec parameter:

__ npx wdio run ./wdio.conf.js --spec example.e2e.js
or define suites in your config file and run just the test files defined by in a suite:

__ npx wdio run ./wdio.conf.js --suite exampleSuiteName

**Step 3: Install Eclipse**
To perform Automation Testing, IDE is a platform that is required to write the test script and run the downloaded file.


## run test with npx wdio command
