
import  { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  duration: number;
  className?: string;
}

const TypingAnimation = ({ text, duration, className }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    interface TypeTextFunction {
      (index: number): void;
    }

    const typeText: TypeTextFunction = (index) => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        timer = setTimeout(() => typeText(index + 1), duration);
      } else {
        // Reset after completing the text
        timer = setTimeout(() => {
          setDisplayedText(""); // Clear the text
          typeText(0); // Restart typing
        }, 1000); // Pause before restarting
      }
    };

    // Start typing
    typeText(0);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, [text, duration]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;
