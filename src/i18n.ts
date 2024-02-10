import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'de']

export default getRequestConfig(async ({locale}) => {
    const baseLocale = new Intl.Locale(locale).baseName;

    if (!locales.includes(baseLocale)) {
        return notFound()
    }
    
    return {
        messages: (await import (`../messages/${baseLocale}.json`)).default
    }
})
