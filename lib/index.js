/**
 * @fileoverview dont depend upper layer classes
 * @author Ozan Turksever
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



module.exports.configs = {
  recommended: {
    rules: {
      'logsign/no-dot-dot-import': 2,
    },
  },
};
