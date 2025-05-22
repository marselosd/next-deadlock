import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { routing } from '../i18n/routing';
import { FavoritesProvider } from '../context/FavoritesContext';
import Header from '../components/organisms/header/Header';
import Footer from '../components/organisms/footer/Footer';
import '../globals.css';

export default async function LocaleLayout({
  children,
  params
  }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }

    const messages = (await import(`../messages/${locale}.json`)).default;

    return (
      <html lang={locale}>
         <body
            style={{
            backgroundImage: "url('/img/background/deadlock-main-background.webp')",
            backgroundSize: "cover",        
            backgroundPosition: "center",      
            backgroundRepeat: "no-repeat",     
            backgroundAttachment: "fixed",     
            backgroundColor: "#000000",       
          }}
          >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <FavoritesProvider>
              <Header/>
              {children}
              <Footer/>
            </FavoritesProvider>
            </NextIntlClientProvider>
        </body>
      </html>
    );
}