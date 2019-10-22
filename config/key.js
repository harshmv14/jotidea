// If the webapp is deployed then it gets the key from the deplyment site that you used. You have to enter the key of your following online database their. I used MongoDb Atlas. 

if (process.env.NODE_ENV === 'production') {
    module.exports = { MongoURI: process.env.MongoURI };
} else {
    module.exports = { MongoURI: 'Your Local MongoDB URL of database' };
}