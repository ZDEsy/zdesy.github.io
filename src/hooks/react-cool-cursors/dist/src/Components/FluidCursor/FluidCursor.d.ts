import React from "react";
import "./FluidCursor.css";
interface FluidCursorProps {
    size?: number;
    color?: string;
    opacity?: number;
    border?: string;
    TransitionTime?: number;
    hideDefaultCursor?: boolean;
}
declare const FluidCursor: React.FC<FluidCursorProps>;
export default FluidCursor;
