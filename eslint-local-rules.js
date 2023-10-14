
module.exports = {
  'no-single-word-variable': {
    meta: {
      type: 'problem',
      docs: {
        description: 'disallow single word variable names',
      },
    },
    create(context) {
    // Define your desired minimum variable name length
      const minimumLength = 2; 

      return {
        VariableDeclarator(node) {
          const { id } = node;
          const isNotProper = id.type === 'Identifier' 
            && id.name.length < minimumLength;

          if (isNotProper) {
            context.report({
              loc: id.loc,
              message: `Use a proper name 🙄`,
            });
          }
        }
      };
    }
  },
};