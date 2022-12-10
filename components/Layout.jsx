import { PageLayout, Box, Text } from '@primer/react';
import { CommonHeader } from './CommonHeader';

export function PageLayoutFullWidth(props) {
  const { children, minWidth = 360 } = props;

  return (
    <PageLayout
      padding="none"
      containerWidth="full"
      rowGap="none"
      columnGap="none"
      sx={{ pb: 4 }}
    >
      <PageLayout.Header>
        <CommonHeader />
      </PageLayout.Header>
      <PageLayout.Content width="full" sx={{ p: 4, minWidth }}>
        {children}
      </PageLayout.Content>
    </PageLayout>
  );
}
