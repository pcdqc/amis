amis.define('docs/zh-CN/components/calendar.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Calendar 日历日程",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Calendar 日历日程",
    "icon": null,
    "order": 36,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>设置 <code>schedules</code> 属性</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"calendar\",\n    \"value\": \"1638288000\",\n    \"schedules\": [\n      {\n        \"startTime\": \"2021-12-11 05:14:00\",\n        \"endTime\": \"2021-12-11 06:14:00\",\n        \"content\": \"这是一个日程1\"\n      },\n      {\n        \"startTime\": \"2021-12-21 05:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义颜色</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"calendar\",\n    \"value\": \"1638288000\",\n    \"schedules\": [\n      {\n        \"startTime\": \"2021-12-11 05:14:00\",\n        \"endTime\": \"2021-12-11 06:14:00\",\n        \"content\": \"这是一个日程1\",\n        \"className\": \"bg-success\"\n      },\n      {\n        \"startTime\": \"2021-12-21 05:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程2\",\n        \"className\": \"bg-info\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E7%A8%8B%E5%B1%95%E7%A4%BA\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E7%A8%8B%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义日程展示</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"calendar\",\n    \"value\": \"1638288000\",\n    \"schedules\": [\n      {\n        \"startTime\": \"2021-12-11 05:14:00\",\n        \"endTime\": \"2021-12-11 06:14:00\",\n        \"content\": \"这是一个日程1\"\n      },\n      {\n        \"startTime\": \"2021-12-21 05:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程2\"\n      }\n    ],\n    \"scheduleAction\": {\n      \"actionType\": \"drawer\",\n      \"drawer\": {\n        \"title\": \"日程\",\n        \"body\": {\n          \"type\": \"table\",\n          \"columns\": [\n            {\n              \"name\": \"time\",\n              \"label\": \"时间\"\n            },\n            {\n              \"name\": \"content\",\n              \"label\": \"内容\"\n            }\n          ],\n          \"data\": \"${scheduleData}\"\n        }\n      }\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%BA%90%E4%B8%AD%E8%8E%B7%E5%8F%96%E6%97%A5%E7%A8%8B\" href=\"#%E6%94%AF%E6%8C%81%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%BA%90%E4%B8%AD%E8%8E%B7%E5%8F%96%E6%97%A5%E7%A8%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持从数据源中获取日程</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"data\": {\n      \"schedules\": [\n        {\n          \"startTime\": \"2021-12-11 05:14:00\",\n          \"endTime\": \"2021-12-11 06:14:00\",\n          \"content\": \"这是一个日程1\"\n        },\n        {\n          \"startTime\": \"2021-12-21 05:14:00\",\n          \"endTime\": \"2021-12-22 05:14:00\",\n          \"content\": \"这是一个日程2\"\n        }\n      ]\n    },\n    \"body\": [\n      {\n        \"type\": \"calendar\",\n        \"value\": \"1638288000\",\n        \"schedules\": \"${schedules}\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%94%BE%E5%A4%A7%E6%A8%A1%E5%BC%8F\" href=\"#%E6%94%BE%E5%A4%A7%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>放大模式</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"calendar\",\n    \"value\": \"1638288000\",\n    \"largeMode\": true,\n    \"schedules\": [\n      {\n        \"startTime\": \"2021-12-10 23:59:59\",\n        \"endTime\": \"2021-12-11 00:00:00\",\n        \"content\": \"这是一个日程1\"\n      },\n      {\n        \"startTime\": \"2021-12-12 00:00:00\",\n        \"endTime\": \"2021-12-13 00:00:01\",\n        \"content\": \"这是一个日程2\"\n      },\n      {\n        \"startTime\": \"2021-12-20 05:14:00\",\n        \"endTime\": \"2021-12-21 05:14:00\",\n        \"content\": \"这是一个日程3\"\n      },\n      {\n        \"startTime\": \"2021-12-21 05:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程4\"\n      },\n      {\n        \"startTime\": \"2021-12-22 02:14:00\",\n        \"endTime\": \"2021-12-23 05:14:00\",\n        \"content\": \"这是一个日程5\"\n      },\n      {\n        \"startTime\": \"2021-12-22 02:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程6\"\n      },\n      {\n        \"startTime\": \"2021-12-22 02:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程7\"\n      },\n      {\n        \"startTime\": \"2021-12-25 12:00:00\",\n        \"endTime\": \"2021-12-25 15:00:00\",\n        \"content\": \"这是一个日程8\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BB%8A%E6%97%A5%E9%AB%98%E4%BA%AE%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89\" href=\"#%E4%BB%8A%E6%97%A5%E9%AB%98%E4%BA%AE%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>今日高亮样式自定义</h2><blockquote>\n<p>2.1.1 及以上版本</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"calendar\",\n    \"value\": \"NOW()\",\n    \"todayActiveStyle\": {\n      \"backgroundColor\": \"#ef4444 !important\",\n      \"color\": \"#f8f9fa\",\n      \"border\": \"none\",\n      \"borderRadius\": \"15px\"\n    },\n    \"schedules\": [\n      {\n        \"startTime\": \"2021-12-11 05:14:00\",\n        \"endTime\": \"2021-12-11 06:14:00\",\n        \"content\": \"这是一个日程1\"\n      },\n      {\n        \"startTime\": \"2021-12-21 05:14:00\",\n        \"endTime\": \"2021-12-22 05:14:00\",\n        \"content\": \"这是一个日程2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"calendar-%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#calendar-%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Calendar 属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;calendar&quot;</code></td>\n<td>指定为 calendar 渲染器</td>\n</tr>\n<tr>\n<td>schedules</td>\n<td><code>Array&lt;{startTime: string, endTime: string, content: any, className?: string}&gt; | string</code></td>\n<td></td>\n<td>日历中展示日程，可设置静态数据或从上下文中取数据，startTime 和 endTime 格式参考<a href=\"https://momentjs.com/docs/#/parsing/string/\">文档</a>，className 参考<a href=\"https://baidu.gitee.io/amis/zh-CN/style/background/background-color\">背景色</a></td>\n</tr>\n<tr>\n<td>scheduleClassNames</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td><code>[&#39;bg-warning&#39;, &#39;bg-danger&#39;, &#39;bg-success&#39;, &#39;bg-info&#39;, &#39;bg-secondary&#39;]</code></td>\n<td>日历中展示日程的颜色，参考<a href=\"https://baidu.gitee.io/amis/zh-CN/style/background/background-color\">背景色</a></td>\n</tr>\n<tr>\n<td>scheduleAction</td>\n<td><code>SchemaNode</code></td>\n<td></td>\n<td>自定义日程展示</td>\n</tr>\n<tr>\n<td>largeMode</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>放大模式</td>\n</tr>\n<tr>\n<td>todayActiveStyle</td>\n<td><code>Record&lt;string, any&gt;</code></td>\n<td></td>\n<td>今日激活时的自定义样式</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>来获取事件产生的数据（<code>&lt; 2.3.2 及以下版本 为 ${event.data.[事件参数名]}</code>），详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>value: string</code> 组件的值</td>\n<td>时间值变化时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的值</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "自定义颜色",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",
          "level": 2
        },
        {
          "label": "自定义日程展示",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E7%A8%8B%E5%B1%95%E7%A4%BA",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E7%A8%8B%E5%B1%95%E7%A4%BA",
          "level": 2
        },
        {
          "label": "支持从数据源中获取日程",
          "fragment": "%E6%94%AF%E6%8C%81%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%BA%90%E4%B8%AD%E8%8E%B7%E5%8F%96%E6%97%A5%E7%A8%8B",
          "fullPath": "#%E6%94%AF%E6%8C%81%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%BA%90%E4%B8%AD%E8%8E%B7%E5%8F%96%E6%97%A5%E7%A8%8B",
          "level": 2
        },
        {
          "label": "放大模式",
          "fragment": "%E6%94%BE%E5%A4%A7%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E6%94%BE%E5%A4%A7%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "今日高亮样式自定义",
          "fragment": "%E4%BB%8A%E6%97%A5%E9%AB%98%E4%BA%AE%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89",
          "fullPath": "#%E4%BB%8A%E6%97%A5%E9%AB%98%E4%BA%AE%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89",
          "level": 2
        },
        {
          "label": "Calendar 属性表",
          "fragment": "calendar-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#calendar-%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
