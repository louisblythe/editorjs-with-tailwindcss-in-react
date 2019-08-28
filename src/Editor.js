import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import React from 'react'

export default class Editor extends React.Component {
  render() {
    return <div id="editor-container" />
  }

  initEditor() {
    this.editor = new EditorJS({
      holderId: 'editor-container',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link'],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
    })
  }

  componentDidMount() {
    this.initEditor()
  }
}
