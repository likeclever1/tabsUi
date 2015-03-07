/**
 * checkboxRadioUI v1.0.0
 * More information visit http://likeclever1.github.io/tabUi/
 * Copyright 2015, Yuriy Berezovskiy
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 * 
 * Usages: $(...).tabsUi();
 * 
 */

"use strict"
;(function() {
    var plugin = {};

    var defaults = {

        // CALLBACKS
        onChange: function() {}
    }

    $.fn.tabsUi = function(options) {
        if(this.length == 0) return this;

        if(this.length > 1) {
            this.each(function() {
                $(this).tabsUi(options);
            });
            return this;
        }

        // create the namespace to be throught the plugin
        var ui = {};

        // set the reference to out ui element
        ui.el = this,
        ui.$el = $(this);

        /**
         * ===================================================================================
         * = PRIVATE FUNCTIONS
         * ===================================================================================
         */
        
        /**
         * Initializes namespace settings to be used throughout plugin
         */
        
        var _init = function() {
            // merge user options with defaults
            ui.settings = $.extend({}, defaults, options);
            // determine touch events
            ui.touch = ("ontouchstart" in document.documentElement) ? true : false;
            // determine event types
            ui.eventTypes = {
                mousedown: (ui.touch) ? "touchstart" : "mousedown"
            };

            _setup();
        };

        /**
         * Performs all DOM and CSS modifications
         */
        
        var _setup = function() {

            // initialize events
            if(ui.$el.find(".tabs__nav a").length > 1) {
                _eventClick();
            }
        };

        /**
         * Event Methods _eventClick, _eventClickLabel
         */
        
        // method for event click on element
        function _eventClick() {
            ui.$el.find(".tabs__nav a").on(ui.eventTypes.mousedown, function(e) {
                e.preventDefault();
                
                var item = this.getAttribute("href");
                console.log(ui.$el.find(item)[0]);
                ui.$el.find(item).siblings().hide();
                ui.$el.find(item).fadeIn(200);

                return false;
            });
        };

        _init();
    }
})(jQuery);