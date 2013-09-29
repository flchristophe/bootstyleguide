/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-pinterest' : '&#xe004;',
			'icon-linkedin' : '&#xe006;',
			'icon-behance' : '&#xe008;',
			'icon-instagram' : '&#xe00b;',
			'icon-dropbox' : '&#xe00c;',
			'icon-evernote' : '&#xe00d;',
			'icon-circles' : '&#xe011;',
			'icon-stumbleupon' : '&#xe013;',
			'icon-smashing' : '&#xe015;',
			'icon-phone' : '&#xe016;',
			'icon-mobile' : '&#xe017;',
			'icon-mail' : '&#xe018;',
			'icon-paperclip' : '&#xe019;',
			'icon-printer' : '&#xe01a;',
			'icon-user' : '&#xe01b;',
			'icon-export' : '&#xe01c;',
			'icon-location' : '&#xe01d;',
			'icon-target' : '&#xe01e;',
			'icon-rss' : '&#xe01f;',
			'icon-info' : '&#xe020;',
			'icon-help' : '&#xe021;',
			'icon-warning' : '&#xe022;',
			'icon-pictures' : '&#xe023;',
			'icon-video' : '&#xe024;',
			'icon-download' : '&#xe025;',
			'icon-upload' : '&#xe026;',
			'icon-upload-2' : '&#xe027;',
			'icon-install' : '&#xe028;',
			'icon-share' : '&#xe029;',
			'icon-chat' : '&#xe02c;',
			'icon-comment' : '&#xe02d;',
			'icon-link' : '&#xe02e;',
			'icon-wordpress' : '&#xe032;',
			'icon-youtube' : '&#xf167;',
			'icon-linux' : '&#xf17c;',
			'icon-trello' : '&#xf181;',
			'icon-foursquare' : '&#xe033;',
			'icon-xing' : '&#xf168;',
			'icon-adn' : '&#xf170;',
			'icon-paypal' : '&#xe034;',
			'icon-css3' : '&#xe036;',
			'icon-html5' : '&#xe035;',
			'icon-chrome' : '&#xe037;',
			'icon-firefox' : '&#xe038;',
			'icon-IE' : '&#xe039;',
			'icon-opera' : '&#xe03a;',
			'icon-lanyrd' : '&#xe03b;',
			'icon-google-drive' : '&#xe03c;',
			'icon-delicious' : '&#xe03d;',
			'icon-stackoverflow' : '&#xe03e;',
			'icon-wikipedia' : '&#xe02f;',
			'icon-myspace' : '&#xe030;',
			'icon-dailymotion' : '&#xe031;',
			'icon-viadeo' : '&#xe03f;',
			'icon-youtube-2' : '&#xe040;',
			'icon-apple' : '&#xe041;',
			'icon-windows8' : '&#xe042;',
			'icon-android' : '&#xe043;',
			'icon-github' : '&#xe044;',
			'icon-facebook' : '&#xe009;',
			'icon-twitter' : '&#xe000;',
			'icon-vimeo' : '&#xe045;',
			'icon-flickr' : '&#xe046;',
			'icon-tumblr' : '&#xe001;',
			'icon-dribbble' : '&#xe002;',
			'icon-picassa' : '&#xe005;',
			'icon-thumbs-up' : '&#xf164;',
			'icon-thumbs-down' : '&#xf165;',
			'icon-minus' : '&#xe00a;',
			'icon-plus' : '&#xe00f;',
			'icon-cross' : '&#xe010;',
			'icon-soundcloud' : '&#xe012;',
			'icon-skype' : '&#xe007;',
			'icon-lastfm' : '&#xe00e;',
			'icon-file-pdf' : '&#xe014;',
			'icon-google-plus' : '&#xe02a;',
			'icon-arrow-right' : '&#xe003;',
			'icon-arrow-up' : '&#xe02b;',
			'icon-arrow-down' : '&#xe047;',
			'icon-arrow-left' : '&#xe048;',
			'icon-arrow-left-2' : '&#xe049;',
			'icon-arrow-down-2' : '&#xe04a;',
			'icon-arrow-up-2' : '&#xe04b;',
			'icon-untitled' : '&#xe04c;',
			'icon-arrow-left-3' : '&#xe04d;',
			'icon-arrow-up-3' : '&#xe04e;',
			'icon-arrow-down-3' : '&#xe04f;',
			'icon-arrow-right-2' : '&#xe050;',
			'icon-arrow-down-4' : '&#xe051;',
			'icon-arrow-up-4' : '&#xe052;',
			'icon-arrow-right-3' : '&#xe053;',
			'icon-arrow-left-4' : '&#xe054;',
			'icon-plus-2' : '&#xe055;',
			'icon-minus-2' : '&#xe056;',
			'icon-checkmark' : '&#xe057;',
			'icon-arrow-left-5' : '&#xe058;',
			'icon-arrow-down-5' : '&#xe059;',
			'icon-arrow-up-5' : '&#xe05a;',
			'icon-arrow-right-4' : '&#xe05b;',
			'icon-arrow-left-6' : '&#xe05c;',
			'icon-arrow-down-6' : '&#xe05d;',
			'icon-arrow-up-6' : '&#xe05e;',
			'icon-arrow-right-5' : '&#xe05f;',
			'icon-reply' : '&#xe060;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};