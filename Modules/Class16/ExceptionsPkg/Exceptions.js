const MyClass = require("./MyClass");


const mc = new MyClass();

const num = 20;

try {

    num = 10;
    
    mc.showSeasonName('may');

    // mc.showSeasonName('jjj');

    console.log('Hello World');

} catch (e) {
    // console.log(e);
    console.log("Exception caught");
} finally {
    console.log('\nIn finally block\n');
}


/**
 * try-catch block
 * 
 *      is use to handle exceptions.
 * 
 * In try block:
 *      we write code which may/mayNot throw exception
 * In catch block:
 *      we write the code to execute in case exception happens
 * 
 * In try block, we may write multiple lines of code
 * as soon as exception happens in the try-block; 
 *      javascript jumps in catch-block
 * 
 * If no-exception occurs in try-block, javascript will never go in catch block
 * 
 * 
 * try {
 *      code which may/mayNot throw exception
 * } catch (e) {
 *      code to execute in case exception happens in try block
 * } finally {
 *      code to execute in finally block
 * }
 * 
 * Javascript vs Java:
 *  In js:
 *      we can have only-one catch block with a try block
 *  In java:
 *      we can have multiple-catch blocks with a try block
 * 
 * try {
 *      code
 * } catch (exception1) {
 * 
 * } catch (exception2) {
 * 
 * } catch (exception3 or exception4) {
 *  
 * }
 * 
 * 
 * finally:
 *      It an optional code block associated with try-catch block.
 *      Code in finally will always execute whether exception occurs in try-block or not
 * 
 * 
 * finally vs final(const)
 *      final: is a keyword in JAVa to create constant variable
 *      In js: we use const for the same purpose.
 * 
 *      finally: is an optional code block associated with try-catch block
 *      Code in finally will always execute whether exception occurs in try-block or not
 * 
 */

/**
 * whenever we connect with any external system
 * 
 *  1. create connection with external system
 *  2. use the external system based on the need
 *  3. if (connectExists) disconnect with external system
 * 
 */





