import { css } from '../../styled-system/css';
import { IWork } from '../../widgets/card-wrapper/model/works';

interface WorkCardProps extends IWork {
  className?: string;
}

const WorkCard = ({ className, img, name }: WorkCardProps) => {
  return (
    <div
      className={css({
        transitionDuration: '0.2s',

        _hover: {
          scale: '1.05',
          transitionDuration: '0.2s',
        },
      })}
    >
      <div
        className={css({
          width: '600px',
          position: 'relative',
          background: 'gray.200',
          borderRadius: '0 0 10px 10px',
          border: 'primary',
        })}
      >
        <div
          className={css({
            width: '100%',
            aspectRatio: '16 / 9',
            backgroundImage: `url("${img})`,
            position: 'relative',
          })}
        >
          <img
            src={img}
            className={css({
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              filter: 'blur(2px)',
              zIndex: 1,
              width: '100%',
              height: '100%',
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
        </div>
        <h3
          className={css({
            fontWeight: 'subtitle',
            textAlign: 'center',
            padding: '10px 0',
            borderTop: 'primary',
          })}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

export default WorkCard;
