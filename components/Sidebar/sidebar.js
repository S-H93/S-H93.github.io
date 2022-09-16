import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarItem from './sidebarItem';
import styles from './Sidebar.module.scss'




function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className={`${styles.screen} ${isSidebarOpen ? styles.screen__open : ''}`} onClick={ toggleSidebar }></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
          <span className={styles.iconCnt} onClick = { toggleSidebar }>
              <FontAwesomeIcon className={styles.icon__closed} icon={faBars} />
              <FontAwesomeIcon className={styles.icon__open} icon={faTimes} />
          </span>
          <div className={styles.content}>
              <ul className={styles.list}>
                  <SidebarItem link="/" title="Home" toggleSidebar = { toggleSidebar } />
                  <SidebarItem link="/nonogram" title="Nonogram" toggleSidebar = { toggleSidebar } />
              </ul>
          </div>
      </div>
  </>
  );
}

export default Sidebar