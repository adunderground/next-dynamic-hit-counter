// next.config.js
module.exports = {
  outputFileTracingIncludes: {
    '/*': ['./src/database.json'],
  },
};

//Essentially, we're telling Next:
//Hey, this application requires this random JSON file,
//please upload it along with the compiled application during deployment.
