import React from "react";
import "./WaveCursor.css";
interface WaveCursorProps {
    size?: number;
    color?: string;
    opacity?: number;
    border?: string;
    innerBorderColor?: string;
    TransitionTime?: number;
}
declare const WaveCursor: React.FC<WaveCursorProps>;
export default WaveCursor;
