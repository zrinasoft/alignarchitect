/**
 * Full-screen brand loader shown until the app hydrates.
 *
 * Resilience by design:
 * - Markup + CSS are inline (no dependency on the Tailwind or JS bundle), so it
 *   paints on first byte even over a slow network.
 * - It is hidden by adding the `aa-hide` class (never removed from the DOM), so
 *   it never conflicts with React hydration.
 * - <LoaderDismiss> hides it the moment React hydrates (fast path); the inline
 *   script hides it on window `load` and after a hard 10s timeout (fallbacks),
 *   so it can never get stuck on screen.
 */
export function PageLoader() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
#aa-loader{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#F7F9FB;transition:opacity .5s ease,visibility .5s ease;}
#aa-loader.aa-hide{opacity:0;visibility:hidden;pointer-events:none;}
#aa-loader .aa-box{display:flex;flex-direction:column;align-items:center;gap:20px;}
#aa-loader svg{overflow:visible;}
#aa-loader .aa-base{stroke:#0B1220;}
#aa-loader .aa-inner{stroke:#9aa6b6;}
#aa-loader .aa-arch{stroke:#0FB5BA;stroke-dasharray:100;animation:aa-draw 1.7s cubic-bezier(.22,1,.36,1) infinite;}
@keyframes aa-draw{0%{stroke-dashoffset:100;}55%{stroke-dashoffset:0;}100%{stroke-dashoffset:-100;}}
#aa-loader .aa-word{font-family:var(--font-space-grotesk),ui-sans-serif,system-ui,sans-serif;font-weight:600;font-size:15px;letter-spacing:.01em;color:#0B1220;}
#aa-loader .aa-word b{color:#0FB5BA;font-weight:600;}
#aa-loader .aa-bar{position:relative;width:150px;height:2px;background:rgba(11,18,32,.1);border-radius:2px;overflow:hidden;}
#aa-loader .aa-bar i{position:absolute;left:-40%;top:0;width:40%;height:100%;background:#0FB5BA;border-radius:2px;animation:aa-slide 1.1s ease-in-out infinite;}
@keyframes aa-slide{0%{left:-40%;}100%{left:110%;}}
@media (prefers-reduced-motion:reduce){#aa-loader .aa-arch{animation:none;stroke-dashoffset:0;}#aa-loader .aa-bar i{animation:none;left:0;width:100%;opacity:.6;}}
`,
        }}
      />
      <div id="aa-loader" aria-hidden="true" role="presentation">
        <div className="aa-box">
          <svg width="46" height="46" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <line className="aa-base" x1="3" y1="22" x2="25" y2="22" strokeWidth="1.6" strokeLinecap="round" />
            <path className="aa-inner" d="M8.5 22 Q14 10 19.5 22" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path
              className="aa-arch"
              pathLength={100}
              d="M5 22 Q14 4 23 22"
              strokeWidth="1.9"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="aa-word">
            Align<b>Architect</b>
          </div>
          <div className="aa-bar">
            <i />
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var e=document.getElementById('aa-loader');if(!e)return;var h=function(){e.classList.add('aa-hide');};window.__aaHideLoader=h;if(document.readyState==='complete'){setTimeout(h,300);}else{window.addEventListener('load',h);}setTimeout(h,10000);})();`,
        }}
      />
    </>
  );
}
