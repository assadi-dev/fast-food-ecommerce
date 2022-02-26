import React from "react";
import styled from "styled-components";

export const Commander = styled.button`
  border-radius: 12px;
  padding: 0.5rem 1rem;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
  :hover {
    ::before {
      width: 100%;
      background: rgba(40, 40, 40, 0.5);
    }
  }
`;
