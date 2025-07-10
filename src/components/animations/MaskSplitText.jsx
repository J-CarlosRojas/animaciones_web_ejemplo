import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const MaskSplitText = ({ text = "Hello, world!" }) => {
  const el = useRef(null);

  useEffect(() => {
    const split = new SplitText(el.current, { type: "chars" });

    gsap.from(split.chars, {
      duration: 0.8,
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.05,
      
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={el}
      style={{
        display: "inline-block",
        overflow: "hidden",
        fontSize: "3rem",
        fontWeight: "bold",
      }}
    >
      {text}
    </h1>
  );
};

export default MaskSplitText;