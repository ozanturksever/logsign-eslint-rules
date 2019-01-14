/**
 * @fileoverview dont depend upper layer classes
 * @author Ozan Turksever
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-dot-dot-import"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { sourceType: "module" } });
ruleTester.run("no-dot-dot-import", rule, {

    valid: [
        'import Test from "src/components/Test"'
      ],

    invalid: [
        {
            code: "import Test from '../test';",
            errors: [{
                message: "Wrong dependency hierarchy.If you depend to upper classes, use full path",
                type: "ImportDeclaration"
            }]
        }
    ]
});
