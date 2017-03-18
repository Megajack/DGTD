/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $, debounce) {
  'use strict';

  Drupal.behaviors.trimText = {
    attach: function (context, settings) {
      this.init($('.didactique__detail', context), 50);
    },
    init: function (el, count) {
      for (var i = 0, l = el.length; i < l; ++i) {
        this.trim($(el[i]), count);
      }
    },
    trim: function (el, count) {
      $(el).text($(el).text().substring(0, count - 3) + "...");
    }
  }

  // Drupal.attachBehaviors(el);

  // We pass the parameters of this anonymous function are the global variables
  // that this script depend on. For example, if the above script requires
  // jQuery, you should change (Drupal) to (Drupal, jQuery) in the line below
  // and, in this file's first line of JS, change function (Drupal) to
  // (Drupal, $)
})(Drupal, jQuery, Drupal.debounce);
