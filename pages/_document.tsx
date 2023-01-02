import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang='en'>
            <Head/>
            <body className='min-h-screen bg-slate-300 dark:bg-black px-5 pb-20'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default Document;