import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setcounter] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      "%cSe llego al valor maximo",
      "color:red; background-color:black;"
    );

    //* No recomendado *//
    // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
    //   .then(() => {
    //     gsap.to(counterElement.current, {
    //       y: 0,
    //       duration: 1,
    //       ease: "bounce.out",
    //     });
    //   });

    const tl = gsap.timeline();
    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
      
  }, [counter]);

  const handleClick = () => {
    setcounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };
  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}> {counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
