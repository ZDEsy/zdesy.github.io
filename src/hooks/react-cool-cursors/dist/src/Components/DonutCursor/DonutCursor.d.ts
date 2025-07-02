import React from "react";
import "./DonutCursor.css";
interface Position {
    x: number;
    y: number;
}
export declare const useCursorDelay: (delay: number | undefined, initialPosition: Position) => {
    position: Position;
};
export declare const DonutCursor: React.FC<{
    delay?: number;
    size?: number;
    sizeDot?: number;
    sizeOutline?: number;
    color?: string;
    border?: string;
    useMixBlendDifference?: boolean;
    hideDefaultCursor?: boolean;
    opacity?: number;
}>;
export default DonutCursor;
