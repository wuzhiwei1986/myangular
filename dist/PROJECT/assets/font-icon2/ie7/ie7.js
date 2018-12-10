/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'eastcomwater\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-export': '&#xe919;',
		'icon-generate-bills': '&#xe91a;',
		'icon-unfold-2': '&#xe918;',
		'icon-menu-2-1-2': '&#xe90c;',
		'icon-menu-2-1-1': '&#xe916;',
		'icon-menu-2-1-3': '&#xe917;',
		'icon-menu-6-2': '&#xe911;',
		'icon-menu-6-1': '&#xe912;',
		'icon-default': '&#xe913;',
		'icon-menu-6-4': '&#xe914;',
		'icon-menu-6-3': '&#xe915;',
		'icon-back': '&#xe90d;',
		'icon-forward': '&#xe90e;',
		'icon-fold': '&#xe90f;',
		'icon-unfold': '&#xe910;',
		'icon-menu-3-1': '&#xe900;',
		'icon-menu-4-1': '&#xe90a;',
		'icon-menu-4-3': '&#xe901;',
		'icon-menu-1-3': '&#xe902;',
		'icon-menu-1-1': '&#xe903;',
		'icon-menu-1-4': '&#xe904;',
		'icon-menu-1-5': '&#xe905;',
		'icon-menu-2-1': '&#xe906;',
		'icon-menu-2-2': '&#xe907;',
		'icon-menu-4-2': '&#xe908;',
		'icon-menu-3-2': '&#xe909;',
		'icon-menu-1-2': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
