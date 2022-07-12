/*
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"
*/
let theName = 'john'

switch (theName) {
    case 'happy':
        console.log('good name');
        break;
    case 'joy':
        console.log(`The name is ${theName}, and the length is ${theName.length} `);
        console.log('Your name is too short');
        break;
    case 'john':
        console.log(theName.toUpperCase());
        break;
    default:
        console.log('you have a different name than we expected');

    
}