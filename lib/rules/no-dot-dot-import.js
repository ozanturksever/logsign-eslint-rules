/**
 * @fileoverview dont depend upper layer classes
 * @author Ozan Turksever
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "dont depend upper layer classes",
            category: "Fill me in",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ImportDeclaration(node) {
                if(node.source.value.indexOf('../')===0) {
                    context.report({
                        node: node,
                        message: "Wrong dependency hierarchy.If you depend to upper classes, use full path"
                    })
                }
            }
        };
    }
};


