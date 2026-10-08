import type { Config } from '@react-router/dev/config';

export default {
        appDirectory: 'src',
        buildDirectory: '../../dist/apps/web',
        ssr: true,
        prerender: ['/'],
} satisfies Config;