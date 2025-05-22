import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images: {
        domains: ['assets-bucket.deadlock-api.com'],
    }
};
 
const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');
export default withNextIntl(nextConfig);