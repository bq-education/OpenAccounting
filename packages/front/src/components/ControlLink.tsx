import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const ControlLink: FC<{ url: string }> = ({ children, url }) => {
  const [link, setLink] = useState<boolean>(false);
  return (
    <Div
      tabIndex={0}
      link={link}
      onMouseOver={(e) => {
        e.ctrlKey && setLink(true);
      }}
      onMouseMove={(e) => {
        e.ctrlKey && setLink(true);
      }}
      onClick={(e) => e.ctrlKey && window.open(url, "_blank")}
      onMouseLeave={(e) => setLink(false)}
    >
      {children}
    </Div>
  );
};

const Div = styled.div<{ link: boolean }>`
  cursor: ${(props) => (props.link ? "pointer !important" : "default")};
`;

export default ControlLink;
