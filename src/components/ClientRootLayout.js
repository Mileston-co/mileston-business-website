'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import Clarity from '@microsoft/clarity';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import '../app/globals.css';
import { BaseFramerAnimation, ScrollTriggeredAnimation } from '../components/Animation';

export default function ClientRootLayout({ children }) {
    useEffect(() => {
        Clarity.init('qxbsz4q3bp');
    }, []);

    useEffect(() => {
        try {
            const url = new URL(window.location.href);
            const ref = url.searchParams.get('ref');
            if (ref) localStorage.setItem('referralId', ref);
            const stored = localStorage.getItem('referralId');
            const api = process.env.REACT_APP_AFF_API_URL || 'https://user-service.mileston.co';
            if (stored && api) {
                fetch(`${api}/public/affiliate/clicks/${stored}`, { method: 'POST' });
            }
        } catch (e) { }
    }, []);

    return (
        <>
            <Script id="show-banner">
                {`!function () {var reb2b = window.reb2b = window.reb2b || []; if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"]; reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments); args.unshift(method);reb2b.push(args);return reb2b;};}; for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);} reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true; script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/E63P0H73Q2OW.js.gz"; var first = document.getElementsByTagName("script")[0]; first.parentNode.insertBefore(script, first);}; reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("E63P0H73Q2OW");}();`}
                {`var _smartsupp = _smartsupp || { };
                _smartsupp.key = '7b5d19b3cc18939a0021fb4531d8ee35b73feb55';
                window.smartsupp||(function(d) {
	var s,c,o=smartsupp=function(){o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);`}
            </Script>
            <GoogleAnalytics gaId="G-L2W78EFKMN" />
            <BaseFramerAnimation>
                <Header />
            </BaseFramerAnimation>
            {children}
            <ScrollTriggeredAnimation>
                <Footer />
            </ScrollTriggeredAnimation>
        </>
    );
}
