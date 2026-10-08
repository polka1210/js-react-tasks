import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
  componentDidMount() {
    const { onContentChange } = this.props;

    this.editor = new Editor({
      el: this.container,
      hideModeSwitch: true,
    });

    this.editor.addHook('change', () => {
      const content = this.editor.getMarkdown();
      onContentChange(content);
    });
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  render() {
    return (
      <div ref={(el) => { this.container = el; }}></div>
    );
  }
}

export default MarkdownEditor;
// END
