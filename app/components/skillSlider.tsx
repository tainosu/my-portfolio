import { Progress } from '@nextui-org/react';

interface SliderProps {
  level: number;
};

const SkillSlider: React.FC<SliderProps> = ({ level }) => {
  return (
    <>
      <div className='text-right'>
        <span className='text-xl'>{level}</span>
        %
      </div>
      <Progress
        color="primary"
        value={level}
        aria-label='skillLevel'
      />
    </>
  )
}

export default SkillSlider;