import React, { useState, useEffect} from "react";

function MyComponent() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (hovered) {
      timeoutId = setTimeout(() => {
        
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [hovered]);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over me
      </button>
    </div>
  );
}
export default MyComponent;
