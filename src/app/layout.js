import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

import Footer from '../layouts/Footer';
import './globals.css';
import Header from '../layouts/Header';
import { BaseFramerAnimation, ScrollTriggeredAnimation } from '../components/Animation';

export const metadata = {
    title: 'Mileston',
    description: 'Crypto transactions made simple',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script id="show-banner">
                {`!function () {var reb2b = window.reb2b = window.reb2b || []; if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"]; reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments); args.unshift(method);reb2b.push(args);return reb2b;};}; for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);} reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true; script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/E63P0H73Q2OW.js.gz"; var first = document.getElementsByTagName("script")[0]; first.parentNode.insertBefore(script, first);}; reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("E63P0H73Q2OW");}();`}
            </Script>
            <GoogleAnalytics gaId="G-L2W78EFKMN" />
            <body>
                <BaseFramerAnimation>
                    <Header />
                </BaseFramerAnimation>
                {children}
                <ScrollTriggeredAnimation>
                    <Footer />
                </ScrollTriggeredAnimation>
            </body>
        </html>
    );
}
