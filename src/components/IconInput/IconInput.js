import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_SIZE = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const INPUT_SIZE = {
  small: {
    "--font-size": "0.875rem",
    "--border-width": "1px",
    "--padding": "4px 16px 4px 24px",
  },
  large: {
    "--font-size": "1.125rem",
    "--border-width": "2px",
    "--padding": "8px 24px 8px 36px",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegate
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} {...ICON_SIZE[size]} />
      </IconWrapper>
      <label htmlFor="id">
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <TextInput
        id="id"
        placeholder={placeholder}
        style={{ ...INPUT_SIZE[size], "--width": width }}
        {...delegate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  pointer-events: none;
`;

const TextInput = styled.input`
  padding: var(--padding);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  width: var(--width);

  border-color: ${COLORS.black};
  border-width: 0;
  border-bottom-width: var(--border-width);

  &:focus-visible {
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
