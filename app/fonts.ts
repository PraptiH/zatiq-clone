import localFont from 'next/font/local'

export const standerd = localFont({
    src: [
        
        {
            path: '../public/Fonts/standerd-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/Fonts/standerd-500.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/Fonts/standerd-600.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/Fonts/standerd-700.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/Fonts/standerd-800.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/Fonts/standerd-900.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-standerd',
    display: 'swap',
})