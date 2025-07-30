import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Step_1_title_inputProps {
  onTitleChange?: (length: number) => void;
  maxLength?: number;
}

const Step_1_title_input = ({ onTitleChange, maxLength = 100 }: Step_1_title_inputProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Spring Boot Flashcard Series: Quick & Handy Learning");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
    if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newTitle = e.target.value;
    
    // Prevent input beyond maxLength
    if (newTitle.length > maxLength) {
      return;
    }
    
    // If input is cleared, set default to "Title"
    if (newTitle.trim() === "") {
      newTitle = "Title";
    }
    
    setTitle(newTitle);
    onTitleChange?.(newTitle.length);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  // Report title length changes
  useEffect(() => {
    onTitleChange?.(title.length);
  }, [onTitleChange, title.length]);

  // Focus the input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (isEditing && inputRef.current) {
      const textarea = inputRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [isEditing, title]);

  if (isEditing) {
    return (
      <textarea
        ref={inputRef}
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        maxLength={maxLength}
        rows={1}
        className={cn(
          "text-4xl font-bold bg-transparent border-none outline-none p-0 w-full",
          "focus:ring-0 focus:border-none focus:outline-none",
          "resize-none overflow-hidden leading-tight"
        )}
        style={{ 
          fontFamily: 'inherit',
          lineHeight: '1.1',
          minHeight: 'auto'
        }}
      />
    );
  }

  return (
    <h1 
      className="text-4xl font-bold cursor-pointer transition-colors leading-tight" 
      onClick={handleClick}
      title="Click to edit"
      style={{
        lineHeight: '1.1'
      }}
    >
      {title}
    </h1>
  );
};

export default Step_1_title_input;
