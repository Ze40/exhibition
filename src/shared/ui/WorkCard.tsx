'use client';

import { useCallback, useEffect, useState } from 'react';

import { css } from '../../styled-system/css';
import { IWork } from '../../widgets/card-wrapper/model/works';

interface WorkCardProps extends IWork {
  className?: string;
}

const WorkCard = ({ className, img, name, authors }: WorkCardProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  // Очищаем таймеры при размонтировании
  useEffect(() => {
    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [timeoutIds]);

  // Автоматическая смена изображений
  useEffect(() => {
    if (!Array.isArray(img) || img.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % img.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [img]);

  const showAuthors = useCallback(() => {
    if (visible || animating) return;

    setVisible(true);
    const id = setTimeout(() => {
      setAnimating(true);
    }, 100);
    setTimeoutIds((prev) => [...prev, id]);
  }, [visible, animating]);

  const hideAuthors = useCallback(() => {
    if (!visible || !animating) return;

    setAnimating(false);
    const id = setTimeout(() => {
      setVisible(false);
      setTimeoutIds((prev) => prev.filter((timeoutId) => timeoutId !== id));
    }, 300);
    setTimeoutIds((prev) => [...prev, id]);
  }, [visible, animating]);

  return (
    <div
      className={css({
        transitionDuration: '0.2s',
        _hover: {
          scale: '1.05',
          transitionDuration: '0.2s',
        },
      })}
      onMouseEnter={showAuthors}
      onMouseLeave={hideAuthors}
    >
      <div
        className={css({
          width: { sm: '600px', base: '100%' },
          position: 'relative',
          background: 'white',
          borderRadius: '0 0 10px 10px',
          border: 'primary',
        })}
      >
        <div
          className={css({
            width: '100%',
            aspectRatio: '16 / 9',
            position: 'relative',
            background: 'gray.100',
            overflow: 'hidden',
          })}
        >
          {!Array.isArray(img) ? (
            <>
              <img
                src={img}
                alt=''
                className={css({
                  position: 'absolute',
                  inset: 0,
                  filter: 'blur(5px)',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                })}
              />

              <img
                src={img}
                alt={name}
                className={css({
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 10,
                  position: 'relative',
                })}
              />
            </>
          ) : (
            <>
              <img
                src={img[currentImgIndex]}
                alt=''
                className={css({
                  position: 'absolute',
                  inset: 0,
                  filter: 'blur(5px)',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease',
                })}
              />

              <img
                src={img[currentImgIndex]}
                alt={name}
                className={css({
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 10,
                  position: 'relative',
                  transition: 'opacity 0.5s ease',
                })}
              />
            </>
          )}

          {/* Анимация списка авторов */}
          {visible && (
            <ul
              className={css({
                position: 'absolute',
                background: 'primary',
                top: 0,
                left: 0,
                zIndex: 100,
                height: '100%',
                padding: '20px 30px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                color: 'font',
                fontSize: 'normal',
                translate: 'auto',
                x: animating ? '0' : '-100%',
                transition: 'all 0.3s ease',
              })}
            >
              {authors.map((author, index) => (
                <li key={`${author}-${index}`}>{author}</li>
              ))}
            </ul>
          )}
        </div>

        <h3
          className={css({
            fontWeight: 'subtitle',
            textAlign: 'center',
            padding: '10px 0',
            borderTop: 'primary',
            fontSize: 'normal',
          })}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

export default WorkCard;
