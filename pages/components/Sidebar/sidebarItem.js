import React,  { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from './Sidebar.module.scss'

function SidebarItem(props) {
  const { link, title, toggleSidebar } = props;
  const [getPath, setPath] = useState(null);
  const isExternalLink = link ? link.startsWith('http') | link.startsWith('www') : false;

  useEffect(() => {
    if (typeof window !== 'undefined') {
    setPath(window.location.pathname);
    }
  });
  
  return (
      <li className={styles.item + " nav-item"} onClick = { toggleSidebar }>
          {isExternalLink ? (
              <a href={link} className={styles.link} target="_blank">
                  {title}
              </a>
          ) : (
                <Link href={link}>
                    <a  className={`${styles.link} ${getPath == link ? styles.current : ''}`}>{title}</a>
                </Link>
          )}
      </li>
  );
}

export default SidebarItem