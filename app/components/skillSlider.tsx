import { Progress } from '@nextui-org/react';

interface SliderProps {
  level: number;
};

const SkillSlider: React.FC<SliderProps> = ({ level }) => {
  return (
    <>
      <div className='text-right'>
        <span>{level}%</span>
      </div>
      <Progress
        color="primary"
        value={level}
      />
    </>
  )
}

export default SkillSlider;