import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * A circle that trails the mouse while it's inside the parent element.
 * The parent needs `relative isolate overflow-hidden`; the circle sits behind
 * the parent's content. It grows while hovering a link or button.
 */
export default function CursorCircle() {
  const circleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const card = circle?.parentElement;
    if (!circle || !card) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(circle, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    const moveX = gsap.quickTo(circle, "x", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(circle, "y", { duration: 0.5, ease: "power3.out" });

    const position = (e: MouseEvent) => {
      const box = card.getBoundingClientRect();
      return { x: e.clientX - box.left, y: e.clientY - box.top };
    };

    const onEnter = (e: MouseEvent) => {
      const { x, y } = position(e);
      // Jump to the entry point so the circle doesn't fly in from the last exit.
      gsap.set(circle, { x, y });
      gsap.to(circle, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" });
    };

    let overAction = false;

    const onMove = (e: MouseEvent) => {
      const { x, y } = position(e);
      moveX(x);
      moveY(y);
      // Only links/buttons inside the card count — the card itself may be a link.
      const action = (e.target as HTMLElement).closest("a, button");
      const isOver = !!action && action !== card && card.contains(action);
      if (isOver !== overAction) {
        overAction = isOver;
        gsap.to(circle, {
          scale: isOver ? 1.8 : 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const onLeave = () => {
      overAction = false;
      gsap.to(circle, { scale: 0, opacity: 0, duration: 0.35, ease: "power2.in" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(circle);
    };
  }, []);

  return (
    <span
      ref={circleRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 -z-10 h-28 w-28 rounded-full border-2 border-brand-primary bg-brand-primary/20 opacity-0"
    />
  );
}
