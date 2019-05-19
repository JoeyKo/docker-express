import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({
  className,
  children,
  image,
  link,
  title,
  content,
  actions,
  isRecommend = true
}) {
  return (
    <div
      className={classNames(className, {
        [styles.card]: true,
        [styles.isRecommend]: isRecommend
      })}
    >
      <div className={styles.eventItem}>
        <Link
          className={styles.eventItemCover}
          to={link}
          target="_blank"
        >
          <img
            src={image}
            alt={title}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>
          <Link to={link}>{title}</Link>
        </h2>
        <div className={styles.content}>{content}</div>
        <div className={styles.actions}>{actions}</div>
      </div>
      {children}
    </div>
  );
}

export default Card;
