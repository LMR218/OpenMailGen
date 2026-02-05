import bundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(
  withNextIntl({
    reactStrictMode: false,
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/dates'],
    },
  })
);
