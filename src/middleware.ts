import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of alllocales that are supported
    locales: ['en', 'de'],
    
    // Used when no locale mathes
    defaultLocale: 'en',
})

export const config = {
    // Match only internationalized pathnames
    matcher: [    
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(de|en)/:path*',

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
}