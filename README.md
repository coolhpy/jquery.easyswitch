#jquery.easyswitch

##概要

这个一个jQuery的插件，它可以让您轻松的创建开关按钮。

1. 兼容IE8+、FireFox、Chrome等
2. 轻量级，源码（含注释）还不到3K
3. 符合标准的html代码

##示例

http://demo.hpyer.cn/js/easyswitch/easyswitch.html

##使用

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <title>EsaySwitch Demo</title>
        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
        <link rel="stylesheet" type="text/css" href="jquery.easyswitch.css" />
        <script type="text/javascript" src="jquery.easyswitch.js"></script>
    </head>
    <body>
        <p>标准按钮：<span class="easyswitch"></span></p>
        <p>默认选中按钮：<span class="easyswitch" data-default="1"></span></p>
        <p>改变标签：<span class="easyswitch" data-default="1" data-label-on="启用" data-label-off="禁用"></span></p>
        <p>回调函数：<span class="easyswitch" data-callback="onSwitch"></span></p>
        <script>
        $('.easyswitch').easyswitch();

        function onSwitch(value, obj) {
            alert(value);
        }
        </script>
    </body>
    </html>
