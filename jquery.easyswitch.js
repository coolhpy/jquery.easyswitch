/**
 * jquery.easyswitch.js
 * 这个一个jQuery的插件，它可以让您轻松的创建开关按钮。
 * 
 * -- REQUIRE: jQuery --
 * 
 * @author	Hpyer
 * @home	http://hpyer.cn
 * @version	1.0
 * @release	2015-03-22
 */

/*
USAGE:

<html>
<head>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<link rel="stylesheet" type="text/css" href="jquery.easyswitch.css" />
<script type="text/javascript" src="jquery.easyswitch.js"></script>
</head>
<body>
<div class="easyswitch"></div>
<script>$('.easyswitch').easyswitch();</script>
</body>
</html>
*/

(function($) {
	$.fn.easyswitch = function(options) {
		var default_options = {
			'label-on' : 'ON',	// 标签on的文字
			'label-off' : 'OFF',	// 标签off的文字
			'name' : 'easyswitch',	// 生成的表单元素名称
			'default' : 0,	// 生成的表单元素的默认值，程序根据该值来判断默认是ON还是OFF
			'callback' : '',	// 切换后的回调函数
			'class-on' : 'on',	// on时的class
			'class-off' : 'off',	// off时的class
			'class-slider' : 'easyswitch-slider',	// 滑块的class
			'class-label' : 'easyswitch-label'	// 标签的class
		};
		options = $.extend(default_options, options);

		this.each(function(i, item) {
			var self = $(item), opts = {}, html = '';

			$.each(options, function(k, v) {
				var custom = self.attr('data-'+k);
				opts[k] = (custom == undefined ? v : custom);
			});

			html = '<span class="'+opts['class-slider']+'"></span>\
					<span class="'+opts['class-label']+'">'+opts['label-on']+'</span>\
					<span class="'+opts['class-label']+'">'+opts['label-off']+'</span>';
			if (opts['name']) {
				html += '<input type="hidden" id="easyswitch-'+opts['name']+'" name="'+opts['name']+'" value="" />';
			}
			try {
				opts['callback'] = eval('('+opts['callback']+')');
			} catch (e) {
				opts['callback'] = function(){};
			}

			self.append(html).click(function() {
				var value;
				if (self.hasClass(opts['class-off'])) {
					self.removeClass(opts['class-off']).addClass(opts['class-on']);
					value = 1;
				} else {
					self.removeClass(opts['class-on']).addClass(opts['class-off']);
					value = 0;
				}
				$('#easyswitch-'+opts['name']).val(value);
				opts['callback'](value, self);
			});

			if (opts['default']) {
				self.addClass(opts['class-on']);
				$('#easyswitch-'+opts['name']).val(1);
			} else {
				self.addClass(opts['class-off']);
				$('#easyswitch-'+opts['name']).val(0);
			}
		});
	}
})(jQuery);