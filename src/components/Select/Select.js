import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <SelectedValue>
        {displayedValue}

        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </SelectedValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  appearance: none;
  inset: 0;
  border: 0;
`;

const SelectedValue = styled.span`
  display: inline-flex;
  font-size: 1rem;
  line-height: 1;
  margin-right: 18px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.gray50};
  padding: 12px 10px 12px 16px;
  border-radius: 8px;
  align-items: center;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  margin-left: 18px;
`;

export default Select;
