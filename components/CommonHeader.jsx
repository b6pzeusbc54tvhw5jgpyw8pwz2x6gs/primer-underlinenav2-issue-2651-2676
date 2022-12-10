import { Box, Heading } from '@primer/react';
import { MyUnderlineNav } from './MyUnderlineNav';

const CONTENT_MAX_WIDTH = 1280;

export function CommonHeader() {
  return (
    <Box
      sx={{
        m: 0,
        pt: 3,
        pl: 4,
        pr: 4,
        borderBottomColor: 'border.default',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        bg: 'canvas.subtle',
      }}
    >
      <Box maxWidth={CONTENT_MAX_WIDTH} m="auto">
        <Box
          display="flex"
          flexGrow={1}
          flexDirection="row"
          alignItems="center"
        >
          <Heading sx={{ fontSize: 5 }}>Common Header</Heading>
        </Box>
        <MyUnderlineNav />
      </Box>
    </Box>
  );
}
