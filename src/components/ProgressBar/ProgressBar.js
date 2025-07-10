/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import { Divide } from "react-feather";

const SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--border-radius": "8px",
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const id = "progess";
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZES[size]}
    >
      <ProgressIndicatorWrapper>
        <ProgressIndicator
          value={value}
          style={{
            "--width": `${value}%`,
          }}
        />
      </ProgressIndicatorWrapper>
      <VisuallyHidden>{value} %</VisuallyHidden>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  height: var(--height, 12px);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius, 4px);
  box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
  padding: var(--padding, 0);
`;

const ProgressIndicatorWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const ProgressIndicator = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 100%;
  width: var(--width);
`;

const NativeProgress = styled.progress`
  appearance: none;
  height: var(--height, 12px);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--border-radius, 4px);
    box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
    padding: var(--padding, 0);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.max === p.value ? "4px" : "4px 0 0 4px")};
  }
`;

export default ProgressBar;
