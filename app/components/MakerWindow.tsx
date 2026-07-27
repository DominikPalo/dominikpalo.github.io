import type { PointerEventHandler, RefObject } from "react";
import type { PageCopy } from "../content/copy";
import type { MakerWindowPosition } from "../types";

type MakerWindowProps = {
  t: PageCopy;
  open: boolean;
  dragging: boolean;
  position: MakerWindowPosition | null;
  windowRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  onDragStart: PointerEventHandler<HTMLDivElement>;
  onDragMove: PointerEventHandler<HTMLDivElement>;
  onDragEnd: PointerEventHandler<HTMLDivElement>;
};

export function MakerWindow({
  t,
  open,
  dragging,
  position,
  windowRef,
  onClose,
  onDragStart,
  onDragMove,
  onDragEnd,
}: MakerWindowProps) {
  if (!open) {
    return null;
  }

  return (
    <aside
      ref={windowRef}
      className={`maker-easter-egg${dragging ? " is-dragging" : ""}`}
      aria-live="polite"
      style={
        position
          ? {
              top: position.y,
              left: position.x,
              right: "auto",
              bottom: "auto",
            }
          : undefined
      }
    >
      <div
        className="easter-egg-header"
        title={t.easterEgg.drag}
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerCancel={onDragEnd}
      >
        <span>DP://SECRET_WORKBENCH</span>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.easterEgg.close}
        >
          ×
        </button>
      </div>
      <strong>{t.easterEgg.title}</strong>
      <div className="easter-egg-output">
        {t.easterEgg.lines.map((line) => (
          <span key={line}>
            <b aria-hidden="true">&gt;</b> {line}
          </span>
        ))}
        <span className="easter-egg-cursor" aria-hidden="true">_</span>
      </div>
      <div className="easter-egg-sparks" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </aside>
  );
}
