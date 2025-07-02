import React from "react";
import "./SimpleCursor.css";
interface SimpleCursorProps {
    size?: number;
    color?: string;
    opacity?: number;
    border?: string;
    TransitionTime?: number;
    hideDefaultCursor?: boolean;
}
declare const SimpleCursor: React.FC<SimpleCursorProps>;
export default SimpleCursor;
