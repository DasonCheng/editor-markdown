# editor-markdown


#### npm--[editor-markdown](https://www.npmjs.com/package/editor-markdown) 
*install*
```bash
npm install editor-markdown
```

*import*
```javascript
import 'editor-markdown/dist/editor-markdown.css'
import 'editor-markdown/dist/editor-markdown.js'
```

#### unpkg--[editor-markdown](https://unpkg.com/editor-markdown/dist)

*style*
```html
<link rel="stylesheet" herf="https://unpkg.com/editor-markdown/dist/editor-markdown.css" />
```

*script*
```html
<script src="https://unpkg.com/editor-markdown/dist/editor-markdown.js"></script>
```


*HTML*
```html
<div id="editor-markdown"></div>
<div class="btns">
  <button type="button" class="btn-c">完成</button>
  <button type="button" class="btn-e">编辑</button>
  <button type="button" class="btn-p">预览</button>
</div>
```


#### init
```javascript
var ed = new EditorMarkdown('editor-markdown', '# editor-markdown')
    document.querySelector('.btn-e').onclick = function () {
      ed.edit()
    }
    document.querySelector('.btn-p').onclick = function () {
      ed.preview()
    }
    document.querySelector('.btn-c').onclick = function () {
      alert(ed.getMarkdown())
    }
    alert(EditorMarkdown.md2html('# editor-markdown'))
```

#### doc
```javascript
//不附带类容的编辑器 {{id_name}}为即将填充的容器的id名称
new EditorMarkdown({{id_name}})

//编辑原有markdown {{origin_markdown}}为要传入的markdown字符串
new EditorMarkdown({{id_name}}, {{origin_markdown}})

/**
 * editor-markdown 拥有 4 个对象方法和 1 静态方法
 * 
 * 对象方法:         -- 需在new出的对象上调用
 * getMarkdown()    获取编辑器markdown字符串
 * getHtml()        获取编辑器由markdown转换的html
 * preview()        预览模式
 * edit()           编辑模式
 * 
 * 静态方法:         -- 直接调用
 * md2html(md)      将markdown字符串参数转换为html
 */
```
#### demo
[editor-markdown](https://codepen.io/dasoncheng/pen/qjreEV)
