import React from "react";
interface HideCursorProps {
    hideDefaultCursor: boolean;
}
/**
 * HideCursor
 *
 * A component that hides the default cursor by adding a <style> tag to the
 * document head. This component doesn't render anything.
 *
 * @param {object} props
 * @param {boolean} [props.hideDefaultCursor=false] - If true, the default cursor will be hidden.
 * @returns {React.ReactElement}
 */
declare const HideCursor: React.FC<HideCursorProps>;
export default HideCursor;
