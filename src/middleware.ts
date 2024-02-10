import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales, pathnames } from './navigation'

export default createMiddleware({
    // Used when no locale mathes
    defaultLocale: 'en',

    localePrefix,
    locales,
    pathnames
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