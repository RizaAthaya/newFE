import { Button } from '@mui/material';
import { animated, config, useSpring } from 'react-spring';
// import { useSpring, animated } from '@react-spring/web'

export default function Test2({ data = [1, 2, 3] }) {
  const spring = useSpring({
    from: { y: 0 },
    to: [
      { y: -10, config: config.default },
      {
        y: 0,
        config: {
          tension: 200,
          friction: 12,
        },
      },
    ],
    loop: true,
  });
  return (
    <animated.div
          style={{
            ...spring,
          }}>
          <div className="flex justify-center">
            <Button sx={{ marginX: 'auto' }} variant="contained" style={{ outline: 'none' }}>
              Halo
            </Button>
          </div>
        </animated.div>
  );
}