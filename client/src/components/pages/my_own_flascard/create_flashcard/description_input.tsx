import { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

// Comment format registration removed - no longer needed

const Description_input = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  useEffect(() => {
    const editorElement = editorRef.current;
    let timeoutId: NodeJS.Timeout | null = null;
    
    if (editorElement && !quillRef.current && !editorElement.querySelector('.ql-container')) {
      // Clear any existing content from the element
      editorElement.innerHTML = '';

      // Small delay to ensure DOM is ready
      timeoutId = setTimeout(() => {
        // Double-check that we still don't have a Quill instance
        if (!quillRef.current && editorElement) {
          // Custom toolbar configuration with all requested options
      const toolbarOptions = [
        // Headers and paragraph
        [{ 'header': [1, 2, 3, 4, false] }],
        
        // Text formatting
        ['bold', 'italic', 'underline'],
        
        // Subscript and superscript
        [{ 'script': 'sub'}, { 'script': 'super' }],
        
        // Quote
        ['blockquote'],
        
        // Lists
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        
        // Link
        ['link'],
        
        // Clean formatting
        ['clean']
      ];

      // Initialize Quill
      quillRef.current = new Quill(editorElement, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions,
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: true
          }
        },
        placeholder: 'Write a detailed description for your flashcard series...',
        formats: [
          'header', 'bold', 'italic', 'underline', 'script',
          'blockquote', 'list', 'bullet', 'link'
        ]
      });

      // Set initial content or handle content changes
      quillRef.current.on('text-change', () => {
        if (quillRef.current) {
          const text = quillRef.current.getText();
          const trimmedText = text.trim();
          setCharCount(trimmedText.length);
          
          // Here you can handle the content change, e.g., update parent component state
          console.log('Content changed:', { text: trimmedText, length: trimmedText.length });
        }
      });
        }
      }, 10); // Small delay to prevent race conditions
    }

    // Cleanup
    return () => {
      // Clear timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      if (quillRef.current) {
        // Clear the editor content and remove event listeners
        quillRef.current.off('text-change');
        
        // Clear the reference
        quillRef.current = null;
      }
      
      // Clear the DOM element to prevent duplicate toolbars
      if (editorElement) {
        editorElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        ref={editorRef}
        className="min-h-[200px] bg-white rounded-lg border border-gray-300"
        style={{ fontFamily: 'inherit' }}
      />
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <p>Provide a clear description of what learners will gain from this flashcard series.</p>
        <p className={charCount > maxChars ? 'text-red-500' : ''}>
          {charCount} / {maxChars}
        </p>
      </div>
      
      {/* Custom styles for Quill editor */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .ql-editor {
            font-family: inherit;
            line-height: 1.6;
          }
          
          .ql-container {
            border-radius: 0 0 8px 8px;
          }
          
          .ql-toolbar {
            border-radius: 8px 8px 0 0;
            border-color: #d1d5db;
          }
        `
      }} />
    </div>
  );
};

export default Description_input;