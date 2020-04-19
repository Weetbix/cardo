exports.handler = (event, context, callback) => {
  const error = new Error("Signup for Cardo is disabled");
  callback(error, event);
};
