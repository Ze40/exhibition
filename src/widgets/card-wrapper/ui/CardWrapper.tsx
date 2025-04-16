import WorkCard from '../../../shared/ui/WorkCard';
import { vstack } from '../../../styled-system/patterns';
import { worksList } from '../model/works';

const CardWrapper = () => {
  return (
    <div className={vstack({ gap: '40px', padding: '40px 0' })}>
      {worksList.map((e) => (
        <WorkCard key={e.id} name={e.name} img={e.img} id={e.id} />
      ))}
    </div>
  );
};

export default CardWrapper;
