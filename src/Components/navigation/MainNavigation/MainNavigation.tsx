import React from 'react';
import style from './style';

type Props = { style: any };

const MainNavigation: React.FunctionComponent<Props> = props => {
  return (
    <nav style={props.style}>
      <ul style={style.ulStyle}>
        <li style={style.liStyle}>
          <a href="/dashboard" style={style.activeLink}>
            Home
          </a>
        </li>
        <li style={{ marginRight: '10px', textAlign: 'center' }}>
          <a href="/send-invitations" style={style.defaultLink}>
            Send Invitations
          </a>
        </li>
        <li style={{ marginRight: '0', textAlign: 'center' }}>
          <a href="/logout" style={style.metroUILink}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
