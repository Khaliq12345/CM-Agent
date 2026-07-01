<template>
    <div class="wrap">
        <div class="row">
            <div class="phone">
                <div class="ph">
                    <div class="ph-n">01</div>
                    <div class="ph-t">de contenu</div>
                </div>
                <div class="pb">
                    <div class="ttl">Publication régulière</div>
                    <div class="sub">Sans intervention · Automatisé</div>
                    <hr class="hr" />
                    <div style="position: relative; height: 88px">
                        <canvas
                            id="c1"
                            width="186"
                            height="88"
                            style="width: 100%; height: 88px"
                        ></canvas>
                    </div>
                    <div
                        id="sched"
                        style="
                            display: flex;
                            justify-content: space-between;
                            padding: 0 4px;
                        "
                    ></div>
                    <div class="bdg-row">
                        <div class="bdg">12× <small>posts/mois</small></div>
                        <div class="bdg">0h <small>manuelle</small></div>
                    </div>
                    <div
                        style="
                            font-size: 9px;
                            color: #888;
                            text-align: center;
                            line-height: 1.5;
                        "
                    >
                        Contenu pertinent · Automatisé<br />Sans intervention
                        humaine
                    </div>
                    <div class="cta">PUBLIER · PLANIFIER</div>
                </div>
            </div>

            <div class="phone">
                <div class="ph">
                    <div class="ph-n">02</div>
                    <div class="ph-t">d'audience</div>
                </div>
                <div class="pb">
                    <div class="ttl">Engagement ciblé</div>
                    <div class="sub">
                        Interactions ciblées · Abonnés qualifiés
                    </div>
                    <hr class="hr" />
                    <div style="position: relative; height: 88px">
                        <canvas
                            id="c2"
                            width="186"
                            height="88"
                            style="width: 100%; height: 88px"
                        ></canvas>
                    </div>
                    <div
                        style="display: flex; flex-direction: column; gap: 5px"
                    >
                        <div>
                            <div class="lbl">Portée organique</div>
                            <div
                                style="
                                    height: 5px;
                                    border-radius: 3px;
                                    background: #eee;
                                    overflow: hidden;
                                "
                            >
                                <div
                                    id="b1"
                                    style="
                                        height: 100%;
                                        background: #111;
                                        width: 0;
                                        border-radius: 3px;
                                        transition: width 0.8s ease;
                                    "
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div class="lbl">Taux d'engagement</div>
                            <div
                                style="
                                    height: 5px;
                                    border-radius: 3px;
                                    background: #eee;
                                    overflow: hidden;
                                "
                            >
                                <div
                                    id="b2"
                                    style="
                                        height: 100%;
                                        background: #111;
                                        width: 0;
                                        border-radius: 3px;
                                        transition: width 0.8s 0.15s ease;
                                    "
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div class="lbl">Abonnés qualifiés</div>
                            <div
                                style="
                                    height: 5px;
                                    border-radius: 3px;
                                    background: #eee;
                                    overflow: hidden;
                                "
                            >
                                <div
                                    id="b3"
                                    style="
                                        height: 100%;
                                        background: #111;
                                        width: 0;
                                        border-radius: 3px;
                                        transition: width 0.8s 0.3s ease;
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat">
                            <div class="big">+68%</div>
                            <div class="sm">portée</div>
                        </div>
                        <div class="stat">
                            <div class="big">×3</div>
                            <div class="sm">abonnés</div>
                        </div>
                    </div>
                    <div
                        style="
                            font-size: 9px;
                            color: #888;
                            text-align: center;
                            line-height: 1.5;
                        "
                    >
                        Interactions ciblées pour<br />attirer des abonnés
                        qualifiés
                    </div>
                    <div class="cta">CIBLER · ENGAGER</div>
                </div>
            </div>

            <div class="phone">
                <div class="ph">
                    <div class="ph-n">03</div>
                    <div class="ph-t">&amp; Prospection</div>
                </div>
                <div class="pb">
                    <div class="ttl">Identifier · Contacter</div>
                    <div class="sub">Convertir · Tunnel de vente</div>
                    <hr class="hr" />
                    <div
                        id="funnel"
                        style="
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 0;
                        "
                    ></div>
                    <div
                        id="chat"
                        style="
                            display: flex;
                            flex-direction: column;
                            gap: 5px;
                            min-height: 64px;
                        "
                    ></div>
                    <div class="stat-row">
                        <div class="stat">
                            <div class="big">DM</div>
                            <div class="sm">auto</div>
                        </div>
                        <div class="stat">
                            <div class="big">J+3</div>
                            <div class="sm">suivi</div>
                        </div>
                        <div class="stat">
                            <div class="big">€</div>
                            <div class="sm">vente</div>
                        </div>
                    </div>
                    <div
                        style="
                            font-size: 9px;
                            color: #888;
                            text-align: center;
                            line-height: 1.5;
                        "
                    >
                        Tunnel de vente via messagerie<br />directe et suivi
                        rigoureux
                    </div>
                    <div class="cta">PROSPECTER · VENDRE</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

const CYCLE = 4800;

onMounted(() => {
    /* ── CARD 01 – AI canvas ── */
    const cv1 = document.getElementById("c1");
    if (!cv1) return; // Guard clause to prevent errors if element isn't ready
    const ctx1 = cv1.getContext("2d");
    const days = ["Lun", "Mer", "Ven", "Dim"];
    const sched = document.getElementById("sched");

    // Clear dynamic elements to prevent duplicate appending during hot-reloads
    sched.innerHTML = "";

    days.forEach((d, i) => {
        const el = document.createElement("div");
        el.style.cssText =
            "display:flex;flex-direction:column;align-items:center;gap:3px";
        el.innerHTML = `<div class="dot" data-i="${i}" style="width:10px;height:10px;border-radius:50%;background:${i < 3 ? "#111" : "transparent"};border:${i < 3 ? "none" : "1.5px solid #999"}"></div><div style="font-size:8px;color:#888">${d}</div>`;
        sched.appendChild(el);
    });

    function drawCard1(t) {
        const W = 186,
            H = 88;
        ctx1.clearRect(0, 0, W, H);
        const cx = W / 2,
            cy = 22,
            r = 18;

        ctx1.fillStyle = "#111";
        ctx1.beginPath();
        ctx1.arc(cx, cy, r, 0, Math.PI * 2);
        ctx1.fill();
        ctx1.fillStyle = "#fff";
        ctx1.font = "bold 9px sans-serif";
        ctx1.textAlign = "center";
        ctx1.textBaseline = "middle";
        ctx1.fillText("AI", cx, cy);

        const targets = [
            { x: 40, y: 72 },
            { x: 93, y: 76 },
            { x: 148, y: 72 },
        ];
        const dashLen = 4,
            dashGap = 3,
            dashTotal = dashLen + dashGap;
        const offset = (t / 18) % dashTotal;

        targets.forEach((tgt) => {
            const dx = tgt.x - cx,
                dy = tgt.y - cy;
            ctx1.save();
            ctx1.strokeStyle = "#444";
            ctx1.lineWidth = 1.2;
            ctx1.setLineDash([dashLen, dashGap]);
            ctx1.lineDashOffset = -offset;
            ctx1.beginPath();
            ctx1.moveTo(cx, cy + r);
            ctx1.lineTo(tgt.x, tgt.y - 8);
            ctx1.stroke();
            ctx1.restore();
            const cardW = 40,
                cardH = 18;
            ctx1.fillStyle = tgt.x === 93 ? "#222" : "#e8e8e8";
            roundRect(
                ctx1,
                tgt.x - cardW / 2,
                tgt.y - cardH / 2,
                cardW,
                cardH,
                4,
            );
            ctx1.fill();
        });

        const pulsR = r + 4 + Math.sin(t / 400) * 4;
        ctx1.strokeStyle =
            "rgba(0,0,0," + (0.15 + 0.1 * Math.sin(t / 400)) + ")";
        ctx1.lineWidth = 1.5;
        ctx1.beginPath();
        ctx1.arc(cx, cy, pulsR, 0, Math.PI * 2);
        ctx1.stroke();

        const dotEls = sched.querySelectorAll(".dot");
        const dotIdx = Math.floor(((t % CYCLE) / CYCLE) * 3) % 3;
        dotEls.forEach((d, i) => {
            if (i < 3)
                d.style.boxShadow =
                    i === dotIdx ? "0 0 0 3px rgba(0,0,0,.18)" : "";
        });
    }

    /* ── CARD 02 – network canvas ── */
    const cv2 = document.getElementById("c2");
    const ctx2 = cv2.getContext("2d");
    const nodes = [
        { x: 93, y: 44, r: 18, label: "@", dark: true },
        { x: 40, y: 12, r: 13, label: "+1", dark: false },
        { x: 148, y: 12, r: 13, label: "+1", dark: false },
        { x: 46, y: 72, r: 13, label: "+1", dark: false },
        { x: 150, y: 68, r: 11, label: "+1", dark: false, faded: true },
    ];
    const edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
    ];
    const b1 = document.getElementById("b1"),
        b2 = document.getElementById("b2"),
        b3 = document.getElementById("b3");
    let barsShown = false;

    function drawCard2(t) {
        ctx2.clearRect(0, 0, 186, 88);
        const prog = (t % CYCLE) / CYCLE;

        edges.forEach(([a, b], ei) => {
            const na = nodes[a],
                nb = nodes[b];
            ctx2.strokeStyle = nb.faded ? "#ccc" : "#bbb";
            ctx2.lineWidth = 1;
            if (nb.faded) {
                ctx2.setLineDash([3, 2]);
            } else {
                ctx2.setLineDash([]);
            }
            const ripProg = (prog * 3 - ei * 0.15 + 10) % 1;
            ctx2.beginPath();
            ctx2.moveTo(na.x, na.y);
            ctx2.lineTo(nb.x, nb.y);
            ctx2.stroke();
            ctx2.setLineDash([]);
            if (!nb.faded) {
                const rx = na.x + (nb.x - na.x) * ripProg,
                    ry = na.y + (nb.y - na.y) * ripProg;
                const alpha = ripProg < 0.5 ? ripProg * 2 : (1 - ripProg) * 2;
                ctx2.fillStyle = `rgba(0,0,0,${alpha * 0.7})`;
                ctx2.beginPath();
                ctx2.arc(rx, ry, 3, 0, Math.PI * 2);
                ctx2.fill();
            }
        });

        nodes.forEach((n) => {
            const bounce = n.dark
                ? Math.sin(t / 600 + n.x) * 2
                : Math.sin(t / 500 + n.x) * 2.5;
            const alpha = n.faded ? 0.35 : 1;
            ctx2.globalAlpha = alpha;
            ctx2.fillStyle = n.dark ? "#111" : "#fff";
            ctx2.strokeStyle = n.dark ? "#111" : "#222";
            ctx2.lineWidth = 1.4;
            ctx2.beginPath();
            ctx2.arc(n.x, n.y + bounce, n.r, 0, Math.PI * 2);
            n.dark ? ctx2.fill() : (ctx2.fill(), ctx2.stroke());
            ctx2.fillStyle = n.dark ? "#fff" : "#111";
            ctx2.font = `bold ${n.dark ? 11 : 9}px sans-serif`;
            ctx2.textAlign = "center";
            ctx2.textBaseline = "middle";
            ctx2.fillText(n.label, n.x, n.y + bounce);
            ctx2.globalAlpha = 1;
        });
    }

    function syncBars(t) {
        const p = (t % CYCLE) / CYCLE;
        if (p > 0.15 && !barsShown) {
            b1.style.width = "70%";
            b2.style.width = "55%";
            b3.style.width = "85%";
            barsShown = true;
        }
        if (p < 0.1 && barsShown) {
            b1.style.width = "0";
            b2.style.width = "0";
            b3.style.width = "0";
            b1.style.transition = "none";
            b2.style.transition = "none";
            b3.style.transition = "none";
            barsShown = false;
            requestAnimationFrame(() => {
                b1.style.transition = "width .8s ease";
                b2.style.transition = "width .8s .15s ease";
                b3.style.transition = "width .8s .3s ease";
            });
        }
    }

    /* ── CARD 03 – funnel + chat ── */
    const funnelEl = document.getElementById("funnel");
    const chatEl = document.getElementById("chat");

    funnelEl.innerHTML = "";
    const fLayers = [
        { label: "PROSPECTS", w: "100%", bg: "#ddd", fg: "#111" },
        { label: "CONTACTS", w: "80%", bg: "#bbb", fg: "#111" },
        { label: "QUALIFIÉS", w: "60%", bg: "#888", fg: "#fff" },
        { label: "CLIENTS", w: "38%", bg: "#333", fg: "#fff" },
    ];
    fLayers.forEach((l, i) => {
        const d = document.createElement("div");
        d.id = "fl" + i;
        d.style.cssText = `width:${l.w};background:${l.bg};color:${l.fg};display:flex;align-items:center;justify-content:center;height:18px;font-size:8px;font-weight:700;letter-spacing:.06em;transition:transform .3s ease;border-radius:1px`;
        d.textContent = l.label;
        funnelEl.appendChild(d);
    });

    const msgs = [
        { text: "Bonjour [prénom]…", left: true },
        { text: "Intéressé !", left: false },
        { text: "Suivi J+3 · Call ?", left: true },
    ];
    let chatState = -1;
    const chatTimers = [];

    function resetChat() {
        chatEl.innerHTML = "";
        chatState = -1;
        chatTimers.forEach(clearTimeout);
        chatTimers.length = 0;
    }

    function showNextMsg() {
        chatState++;
        if (chatState >= msgs.length) return;
        const m = msgs[chatState];
        const b = document.createElement("div");
        b.style.cssText = `border-radius:12px;padding:6px 10px;font-size:9px;font-weight:500;max-width:80%;opacity:0;transform:translateY(6px);transition:opacity .35s ease,transform .35s ease;align-self:${m.left ? "flex-start" : "flex-end"};background:${m.left ? "#111" : "#eee"};color:${m.left ? "#fff" : "#222"};border-${m.left ? "bottom-left" : "bottom-right"}-radius:2px`;
        chatEl.style.display = "flex";
        chatEl.style.flexDirection = "column";
        chatEl.appendChild(b);
        requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                b.style.opacity = "1";
                b.style.transform = "translateY(0)";
                b.textContent = m.text;
            }),
        );
        if (chatState < msgs.length - 1)
            chatTimers.push(setTimeout(showNextMsg, 900));
    }

    function animFunnel(t) {
        const p = (t % CYCLE) / CYCLE;
        fLayers.forEach((l, i) => {
            const el = document.getElementById("fl" + i);
            if (!el) return;
            const wave = Math.sin(t / 700 + i * 0.8) * 0.03;
            el.style.transform = `scaleX(${1 + wave})`;
            const lit = p > 0.35 && p < 0.65 ? 1.12 : 1;
            el.style.filter = `brightness(${lit})`;
        });
    }

    function syncChat(t) {
        const p = (t % CYCLE) / CYCLE;
        if (p < 0.05 && chatState >= 0) resetChat();
        if (p > 0.3 && chatState < 0) showNextMsg();
    }

    function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    /* ── main loop ── */
    let start = null;
    let animationFrameId;

    function loop(ts) {
        if (!start) start = ts;
        const t = ts - start;
        drawCard1(t);
        drawCard2(t);
        syncBars(t);
        animFunnel(t);
        syncChat(t);
        animationFrameId = requestAnimationFrame(loop);
    }
    animationFrameId = requestAnimationFrame(loop);
});
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.wrap {
    width: 100%;
    padding: 2rem 0 3rem;
    overflow: hidden;
}
.sup {
    text-align: center;
    letter-spacing: 0.25em;
    font-size: 11px;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}
.row {
    display: flex;
    gap: 18px;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 0 0.5rem;
}
.phone {
    width: 210px;
    flex-shrink: 0;
    border-radius: 26px;
    background: #fff;
    border: 1.5px solid #1a1a1a;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.ph {
    background: #111;
    color: #fff;
    text-align: center;
    padding: 12px 10px 8px;
}
.ph-n {
    font-size: 17px;
    font-weight: 700;
}
.ph-t {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.07em;
    margin-top: 1px;
}
.pb {
    padding: 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fff;
    flex: 1;
}
.ttl {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    text-align: center;
    line-height: 1.2;
}
.sub {
    font-size: 10px;
    color: #777;
    text-align: center;
    letter-spacing: 0.03em;
}
.hr {
    border: none;
    border-top: 1px solid #eee;
}
.cta {
    background: #111;
    color: #fff;
    border-radius: 20px;
    padding: 9px 0;
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.1em;
    margin-top: auto;
}
.lbl {
    font-size: 10px;
    color: #555;
}
.stat-row {
    display: flex;
    gap: 6px;
}
.stat {
    flex: 1;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 7px 5px;
    text-align: center;
}
.stat .big {
    font-size: 15px;
    font-weight: 700;
    color: #111;
}
.stat .sm {
    font-size: 8px;
    color: #888;
    margin-top: 1px;
}
.bdg-row {
    display: flex;
    gap: 6px;
    justify-content: center;
}
.bdg {
    background: #111;
    color: #fff;
    border-radius: 7px;
    padding: 7px 12px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
}
.bdg small {
    display: block;
    font-size: 9px;
    font-weight: 400;
    color: #aaa;
    margin-top: 1px;
}
</style>
