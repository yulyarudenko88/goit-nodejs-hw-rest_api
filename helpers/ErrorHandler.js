const ErrorHandler = async (asyncFunction) => {
  try {
    return await asyncFunction();
  } catch (error) {
    console.log(error);
  }
};

module.exports = ErrorHandler;
