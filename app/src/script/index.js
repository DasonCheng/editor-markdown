import markdownit from 'markdown-it'
import hljs from 'highlight.js'
import CodeMirror from 'codemirror/lib/codemirror.js'

import 'normalize.css'

import 'highlight.js/styles/vs2015.css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/gfm/gfm.js'

window.EditorMarkdown = class EditorMarkdown {
  constructor(id, markdown = '') {
    this.el = document.getElementById(id);
    this.el.className = 'editor-markdown-conatiner'
    this.el.innerHTML = `
    <form>
      <textarea id="markdown_code">${markdown}</textarea>
    </form>
    <div class="preview"></div>
    `
    this.editor = CodeMirror.fromTextArea(this.el.querySelector('#markdown_code'), {
      mode: "gfm",
      styleActiveLine: true,
      lineNumbers: false,
      lineWrapping: true,
      theme: 'base16-light',
    });
  }
  getMarkdown() {
    return this.editor.getValue()
  }
  getHtml() {
    return markdownit({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        return ''; // use external default escaping
      }
    }).render(this.getMarkdown());
  }
  preview() {
    this.el.className = 'editor-markdown-conatiner markdown-previewed'
    this.el.querySelector('.preview').innerHTML = this.getHtml();
  }
  edit() {
    this.el.className = 'editor-markdown-conatiner'
  }
  static md2html(md){
    return markdownit({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        return ''; // use external default escaping
      }
    }).render(md);
  }
}
