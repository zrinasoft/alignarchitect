/**
 * Full-screen brand loader shown until the page finishes loading.
 *
 * Resilience by design:
 * - The overlay's critical layout (fixed, full-screen, paper background, z-top)
 *   is set via an inline `style` attribute, so it covers the screen on first
 *   parse even before the <style> block or the Tailwind/JS bundles apply.
 * - It is hidden by adding the `aa-hide` class (never removed from the DOM), so
 *   it never conflicts with React hydration.
 * - The inline script hides it on window `load` (after CSS + images, so no
 *   unstyled flash) with a minimum display time and a hard timeout cap, so it
 *   can never get stuck on screen.
 */
export function PageLoader() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
#aa-loader.aa-hide{opacity:0!important;visibility:hidden!important;pointer-events:none!important;}
#aa-loader .aa-logo{width:160px;height:auto;animation:aa-pulse 1.9s ease-in-out infinite;}
@keyframes aa-pulse{0%,100%{opacity:.72;}50%{opacity:1;}}
#aa-loader .aa-bar{position:relative;width:150px;height:2px;background:rgba(11,18,32,.1);border-radius:2px;overflow:hidden;}
#aa-loader .aa-bar i{position:absolute;left:-40%;top:0;width:40%;height:100%;background:#0FB5BA;border-radius:2px;animation:aa-slide 1.1s ease-in-out infinite;}
@keyframes aa-slide{0%{left:-40%;}100%{left:110%;}}
@media (prefers-reduced-motion:reduce){#aa-loader .aa-arch{animation:none;stroke-dashoffset:0;}#aa-loader .aa-bar i{animation:none;left:0;width:100%;opacity:.6;}}
`,
        }}
      />
      <div
        id="aa-loader"
        aria-hidden="true"
        role="presentation"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F9FB",
          transition: "opacity .5s ease, visibility .5s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="aa-logo"
            src="/images/logo-trim.png"
            alt="AlignArchitects"
            width={830}
            height={582}
            fetchPriority="high"
          />
          <div className="aa-bar">
            <i />
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var e=document.getElementById('aa-loader');if(!e)return;var s=Date.now(),MIN=450,CAP=6000,done=false;function hide(){if(done)return;done=true;var w=Math.max(0,MIN-(Date.now()-s));setTimeout(function(){e.classList.add('aa-hide');},w);}if(document.readyState==='complete'){hide();}else{window.addEventListener('load',hide);}setTimeout(hide,CAP);})();`,
        }}
      />
    </>
  );
}
