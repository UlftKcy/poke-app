import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang='en'>
            <Head/>
            <body className='bg-indigo-300 dark:bg-black'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default Document;