import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: blue;
  width: 100%;
  height: 100vh;
`;

function DashboardLayout({ children }) {
  return <Container>{children}</Container>;
}

export default DashboardLayout;
