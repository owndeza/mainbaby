<!DOCTYPE html><html lang="en-US" dir="ltr" class="h-full" data-applied-theme="system" data-theme="system"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/entry.client-CPl21qdE.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/index-CfaaGgfj.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/chunk-B7RQU5TL-CAaQ3Bw2.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/chunk-SKNKB5VI-CPQ7QJqX.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/root-0uArpRGa.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/root-8Qzx-KFn.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/chunk-7QCGHRGG-DWv2_Yjo.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/index-lBsTSuoM.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/Info.es-Z3j2h2X5.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/tooltip-WRze5UTK.js"/><link rel="modulepreload" href="https://frontend-www-ngrok.vercel.app/assets/index-ChLdeeIH.js"/><link rel="preconnect" href="https://assets.ngrok.com"/><link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Regular-WebS.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-RegularItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Medium-WebS.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-MediumItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/ibm-plex-mono/IBMPlexMono-Text.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/ibm-plex-mono/IBMPlexMono-TextItalic.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.woff" as="font" type="font/woff" crossorigin="anonymous"/><link rel="preload" href="https://assets.ngrok.com/fonts/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff" as="font" type="font/woff" crossorigin="anonymous"/><meta name="theme-color" content="#4a3066"/><meta name="robots" content="noindex, nofollow"/><meta name="author" content="ngrok"/><script nonce="6692ef002cd8a8ef6159a7d372ae8757">(function() {
	const RESOLVED = ["light","dark","light-high-contrast","dark-high-contrast"];
	const DEF = "system";
	const KEY = "mantle-ui-theme";
	const doc = document, root = doc.documentElement;

	function isTheme(v) {
		return typeof v === "string" && (v === "system" || RESOLVED.indexOf(v) > -1);
	}

	function readCookie(name){
		// Efficient single-pass cookie lookup: "; name=value"
		const all = "; " + doc.cookie, token = "; " + name + "=";
		const startIdx = all.indexOf(token);
		if (startIdx < 0) {
			return null;
		}
		const endIdx = all.indexOf(";", startIdx + token.length);
		const rawValue = all.slice(startIdx + token.length, endIdx < 0 ? void 0 : endIdx) || null;
		try { 
			return rawValue ? decodeURIComponent(rawValue) : null;
		} catch(_) { 
			return rawValue;
		}
	}

	function writeCookie(name, val) {
		try {
			const expires = new Date(); 
			expires.setFullYear(expires.getFullYear() + 1);
			const hostname = location.hostname;
			const protocol = location.protocol;
			const isDotNgrok = (hostname === "ngrok.com" || hostname.endsWith(".ngrok.com"));
			const domain = isDotNgrok ? "; domain=.ngrok.com" : "";
			const secure = protocol === "https:" ? "; Secure" : "";
			doc.cookie = name + "=" + encodeURIComponent(val) + "; expires=" + expires.toUTCString() + "; path=/" + domain + "; SameSite=Lax" + secure;
		} catch(_) {}
	}

	// 1) Read preference: cookie first, fallback to localStorage (migration support)
	let cookieTheme = null, lsTheme = null, storedTheme = null;
	try { 
		cookieTheme = readCookie(KEY);
	} catch(_) {}
	
	if (isTheme(cookieTheme)) { 
		storedTheme = cookieTheme;
	} else {
		try { 
			lsTheme = window.localStorage && window.localStorage.getItem(KEY);
		} catch(_) {}
		if (isTheme(lsTheme)) {
			storedTheme = lsTheme;
		}
	}

	const preference = isTheme(storedTheme) ? storedTheme : DEF;

	// 2) Resolve only when needed to avoid unnecessary media queries
	let resolvedTheme = preference;
	if (preference === "system") {
		const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
		const isHighContrast = matchMedia("(prefers-contrast: more)").matches;
		resolvedTheme = isHighContrast 
			? (isDark ? "dark-high-contrast" : "light-high-contrast")
			: (isDark ? "dark" : "light");
	}

	// 3) Only touch DOM if we actually need to change something (SSR optimization)
	if (root.dataset.appliedTheme !== resolvedTheme || root.dataset.theme !== preference) {
		// Remove all theme classes, add the correct one
		for (let i = 0; i < RESOLVED.length; i++) {
			root.classList.remove(RESOLVED[i]);
		}
		root.classList.add(resolvedTheme);
		root.dataset.appliedTheme = resolvedTheme;
		root.dataset.theme = preference;
	}

	// 4) Handle persistence/migration synchronously to prevent FOUC
	const hadValidCookie = isTheme(cookieTheme);
	try {
		// Migrate from localStorage to cookies if needed
		if (isTheme(lsTheme)) {
			writeCookie(KEY, lsTheme);
			try { 
				window.localStorage.removeItem(KEY);
			} catch(_) {}
		} else if (!hadValidCookie) {
			// Set default cookie if none existed
			writeCookie(KEY, preference);
		}
	} catch (_) {}
})();</script><link rel="stylesheet" href="https://frontend-www-ngrok.vercel.app/assets/root-DxC3F5dG.css"/></head><body class="bg-base h-dvh isolate"><section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section><h1 style="font-size:24px">404<!-- --> <!-- -->Not Found</h1><script>
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      </script><script nonce="6692ef002cd8a8ef6159a7d372ae8757">((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  })("react-router-scroll-positions", null)</script><script nonce="6692ef002cd8a8ef6159a7d372ae8757">window.__reactRouterContext = {"basename":"/","future":{"v8_middleware":false,"unstable_optimizeDeps":false,"unstable_splitRouteModules":false,"unstable_subResourceIntegrity":false,"unstable_viteEnvironmentApi":false},"routeDiscovery":{"mode":"lazy","manifestPath":"/__manifest"},"ssr":true,"isSpaMode":false};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());</script><script nonce="6692ef002cd8a8ef6159a7d372ae8757" type="module" async="">;
import * as route0 from "https://frontend-www-ngrok.vercel.app/assets/root-0uArpRGa.js";
  window.__reactRouterManifest = {
  "entry": {
    "module": "https://frontend-www-ngrok.vercel.app/assets/entry.client-CPl21qdE.js",
    "imports": [
      "https://frontend-www-ngrok.vercel.app/assets/index-CfaaGgfj.js",
      "https://frontend-www-ngrok.vercel.app/assets/chunk-B7RQU5TL-CAaQ3Bw2.js",
      "https://frontend-www-ngrok.vercel.app/assets/chunk-SKNKB5VI-CPQ7QJqX.js"
    ],
    "css": []
  },
  "routes": {
    "root": {
      "id": "root",
      "path": "",
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasClientMiddleware": false,
      "hasErrorBoundary": false,
      "module": "https://frontend-www-ngrok.vercel.app/assets/root-0uArpRGa.js",
      "imports": [
        "https://frontend-www-ngrok.vercel.app/assets/index-CfaaGgfj.js",
        "https://frontend-www-ngrok.vercel.app/assets/chunk-B7RQU5TL-CAaQ3Bw2.js",
        "https://frontend-www-ngrok.vercel.app/assets/chunk-SKNKB5VI-CPQ7QJqX.js",
        "https://frontend-www-ngrok.vercel.app/assets/root-8Qzx-KFn.js",
        "https://frontend-www-ngrok.vercel.app/assets/chunk-7QCGHRGG-DWv2_Yjo.js",
        "https://frontend-www-ngrok.vercel.app/assets/index-lBsTSuoM.js",
        "https://frontend-www-ngrok.vercel.app/assets/Info.es-Z3j2h2X5.js",
        "https://frontend-www-ngrok.vercel.app/assets/tooltip-WRze5UTK.js",
        "https://frontend-www-ngrok.vercel.app/assets/index-ChLdeeIH.js"
      ],
      "css": [
        "https://frontend-www-ngrok.vercel.app/assets/root-DxC3F5dG.css"
      ]
    },
    "routes/_index": {
      "id": "routes/_index",
      "parentId": "root",
      "index": true,
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasClientMiddleware": false,
      "hasErrorBoundary": false,
      "module": "https://frontend-www-ngrok.vercel.app/assets/_index-D-v-t2RE.js",
      "imports": [
        "https://frontend-www-ngrok.vercel.app/assets/chunk-B7RQU5TL-CAaQ3Bw2.js"
      ],
      "css": []
    }
  },
  "url": "https://frontend-www-ngrok.vercel.app/assets/manifest-602b1fe3.js",
  "version": "602b1fe3"
};
  window.__reactRouterRouteModules = {"root":route0};

import("https://frontend-www-ngrok.vercel.app/assets/entry.client-CPl21qdE.js");</script><!--$--><script nonce="6692ef002cd8a8ef6159a7d372ae8757">window.__reactRouterContext.streamController.enqueue("[{\"_1\":2,\"_3\":-5,\"_4\":5},\"loaderData\",{},\"actionData\",\"errors\",{\"_6\":7},\"root\",{\"_8\":9,\"_10\":11,\"_12\":13,\"_14\":15,\"_16\":17,\"_20\":21},\"status\",404,\"statusText\",\"Not Found\",\"internal\",true,\"data\",\"Error: No route matches URL \\\"/assets/manifest-c1650172.js\\\"\",\"error\",[\"SanitizedError\",18,19,-7],\"Error\",\"Unexpected Server Error\",\"__type\",\"RouteErrorResponse\"]\n");</script><!--$--><script nonce="6692ef002cd8a8ef6159a7d372ae8757">window.__reactRouterContext.streamController.close();</script><!--/$--><!--/$--></body></html>