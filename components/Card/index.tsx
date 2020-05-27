import React from "react";
import classNames from "classnames";
import Link from 'next/link';

interface Props {
  className?: string,
  children?: React.ReactChildren | string,
  image?: string,
  link?: string,
  title?: string,
  content?: HTMLElement | string, 
  actions?: HTMLElement | string, 
  isRecommend?: boolean,
}

function Card({
  className,
  children,
  image,
  link,
  title,
  content,
  actions,
  isRecommend = true
}: Props) {
  return (
    <div
      className={classNames(className, {
        card: true,
        isRecommend: isRecommend
      })}
    >
      <div className="eventItem">
        <div className="eventItemCover">
          <Link href={link}>
            <img src={image} alt={title} />
          </Link>
        </div>
      </div>
      <div className="content">
        <h2 className="contentTitle">
          <Link href={link}><a>{title}</a></Link>
        </h2>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
      {children}
      <style jsx>{`
        .card {
          background: #fff;
          overflow: hidden;
          border-radius: 2px;
          box-sizing: border-box;
          box-shadow: none;
          border-bottom: 1px solid #f0f2f7;
        }

        .card.isRecommend {
          padding: 20px;
        }
        
        .eventItemCover {
          position: relative;
          display: block;
          width: 100%;
          height: 160px;
          border-radius: 4px;
          overflow: hidden;
          transform: translateZ(0);
          margin-bottom: 10px;
        }

        .eventItemCover img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
        
        .contentTitle {
          font-size: 18px;
          font-weight: 600;
          font-synthesis: style;
          line-height: 1.6;
          color: #1a1a1a;
          margin-top: -4px;
          margin-bottom: -4px;
        }
        
        .content {
          margin-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 27px;
        }
        
        .actions {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          margin: 0 -20px -10px;
          color: #646464;
          background: #fff;
          clear: both;
        }
      `}
      </style>
    </div>
  );
}

export default Card;
