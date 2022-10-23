import PulseLoader from 'react-spinners/PulseLoader';
import { Box } from './Loading.styled';

const Loading = () => {
  return (
    <Box>
      <PulseLoader
        color="#fa9805"
        cssOverride={{}}
        margin={8}
        speedMultiplier={1}
      />
    </Box>
  );
};
export default Loading;
