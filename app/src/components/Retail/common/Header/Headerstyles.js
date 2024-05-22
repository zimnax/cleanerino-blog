import { css } from "@emotion/react";

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 1640px;
  max-width: 100%;
  padding: 10px 0;
  gap: 30px;
`;
export const navListStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const navItemStyle = css`
  text-decoration: none;
  padding: 14px 16px;
`;

export const dropdownStyle = css`
  font-size: 16px;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 19px;
  font-weight: 600;
  line-height: 22.99px;
  text-align: left;
  color: rgba(72, 102, 66, 1);
`;
