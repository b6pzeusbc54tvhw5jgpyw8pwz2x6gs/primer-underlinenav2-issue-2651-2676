import { BaseStyles, ThemeProvider, theme, SSRProvider } from '@primer/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </BaseStyles>
    </ThemeProvider>
  );
}
