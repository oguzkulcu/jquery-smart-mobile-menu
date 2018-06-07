/***
 * @author Oguzhan Külcü - grafikcoder@gmail.com - oguzhankulcu.com
 * @version 1.1.0
 * http://oguzkulcu.github.io/smart-mobile-menu/
 */
(function ($) {
    "use strict";

    $.fn.smobileMenu = function (param) {
        // Start Code

        var thisContent = '__smobileMenuContent__menu';

        var data = $.extend({
            dropdown: true,
            getMenu: null,
            theme: 'default',
            dropdownIcon: '<i class="fa fa-angle-down"></i>',
            linkActiveClass: 'smm-active',
            activeAutoOpen: true,
            closeClickEvent: null, // function
            openClickEvent: null // function
        }, param);


        $('body').prepend('<div id="' + thisContent + '"></div>');

        var thisContentSelector = $('#' + thisContent),
            getMenuContent = $(data.getMenu).html(),
            theme_prefix = 'smobilemenu-theme-';


        thisContentSelector.html('<a href="#" id="smobileMenu-close-btn">X</a><ul>' + getMenuContent + '</ul>');

        thisContentSelector.find('ul,li').removeAttr('class');

        var ul = thisContentSelector.children('ul');

        ul.addClass(theme_prefix + data.theme);
        ul.find('ul[data-smm-hidden=true],li[data-smm-hidden=true]').hide();
        ul.find('ul').hide();

        //    var countLi = ul.children('li').not('[data-smm-hidden=true]').length;

        if (data.dropdown) {
            ul.find('li a + ul').not('ul[data-smm-dropdown=false]').prev('a').append(data.dropdownIcon);

            ul.find('li a + ul').not('ul[data-smm-dropdown=false]').prev('a').on('click', function (e) {
                $(this).next('ul').toggle(200);
                e.preventDefault();
            });
        }

        if (data.activeAutoOpen) {
            var active = ul.find('li a.' + data.linkActiveClass);
            active.next('ul').show();
            active.closest('ul').show();
        }

        // close button
        $('#smobileMenu-close-btn').on('click', function (e) {
            if (data.closeClickEvent == null) {
                thisContentSelector.hide(200);
            } else {
                data.closeClickEvent($(thisContentSelector));
            }
            e.preventDefault();
        });

        // data-smm-hidden

        $(this).on('click', function (e) {

            // openClickEvent

            if (data.openClickEvent == null) {
                thisContentSelector.show(200);
            } else {
                data.openClickEvent($(thisContentSelector));
            }
            e.preventDefault();
        });

        // End Code
    };

})(jQuery);

// version: 1.1.0
$('[data-smart-menu]').each(function () {
   var selector = $(this).data('smart-menu');
   var theme = $(this).data('smart-menu-theme');
   var dropdown = $(this).data('smart-menu-dropdown');
   var active = $(this).data('smart-menu-active-auto');

    $(selector).smobileMenu({
        dropdown: dropdown !== null && dropdown !== undefined ? dropdown : true,
        getMenu: $(this),
        theme: theme !== null && theme !== undefined ? theme : 'default',
        activeAutoOpen: active !== null && active !== undefined ? active : true,
    });
});