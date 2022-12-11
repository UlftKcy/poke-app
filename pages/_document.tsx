import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang='en'>
            <Head/>
            <body className='min-h-screen bg-indigo-300 dark:bg-black px-5'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default Document;