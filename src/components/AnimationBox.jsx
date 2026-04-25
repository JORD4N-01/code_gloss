import LottieAnimation from './LottieAnimation';

const AnimationBox = ({ animationType, isPlaying }) => {
  return (
    <LottieAnimation 
      animationType={animationType} 
      isPlaying={isPlaying} 
    />
  );
};

export default AnimationBox;
