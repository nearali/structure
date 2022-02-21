
import { ReactNode } from 'react';

import { LayoutStyled } from './Layout.styles';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="flex justify-between">
        <p>
          Prime Lab
        </p>
      </header>
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;