import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────

const GLOSSARY = [
  ["Disavowal", "The psychoanalytic structure by which something known is simultaneously not-known: acknowledged in principle, denied in practice. European modernity's relationship to its colonial and industrial history is often described in these terms."],
  ["Metabolic rift", "Marxist term, developed by John Foster and others, for the rupture between human social systems and the ecological conditions that sustain them, produced by capitalism's tendency to extract without restoring. Often used to 'rehabilitate' Marx as an ecological thinker."],
  ["Slow violence", "Rob Nixon's term for harm that accumulates gradually and invisibly: in soils, bodies, waterways, communities. Rather than arriving as a visible event that can be politically addressed, the harm accumulates — unevenly visible to those affected and those protected."],
  ["Sacrifice zones", "Areas and communities that disproportionately absorb the environmental costs of systems that benefit others, typically along lines of class, race and geography."],
  ["Ontology", "A set of fundamental beliefs about reality. In Anthropocene studies, someone's ontology refers to their fundamental worldview regarding how humans and nature exist and relate to one another. 'Pre-Apocalypse' and 'post-Apocalypse' modes of dealing with the Anthropocene are examples of two ontologies."],
  ["Ontological security", "The sense of biographical and cultural continuity that enables stable selfhood and political agency. Madeleine Fagan argues the Anthropocene disrupts this in ways that can produce denialism rather than action."],
  ["Nature-based solutions", "EU policy frameworks addressing climate and biodiversity through ecological restoration rather than purely technological means. Both a genuine tool and, critics argue, a way of avoiding more structural change."],
];

const STOPS = [
  {
    id: 1,
    title: "Three Mills Island",
    location: "Three Mill Lane, E3 3DU",
    time: "9:30 – 10:15",
    orientation: "The House Mill has been tidal-powered since before the Domesday Book of 1086. It ground grain and produced gin by using the Thames tide, but is now a heritage site. That transition — from industrial engine to listed building — is the first disavowal you encounter today. The standard Anthropocene origin story begins with the Industrial Revolution in Northern Europe, and this mill is part of that story. Does beginning the story here (rather than in the plantation, the mine, the colony) change the picture? Whose labour and whose land made this mill's production possible, and what did early industrial technology like this make possible in the world?",
    questions: [
      {
        id: "1a",
        type: "REFLECTION",
        text: "The mill operated as an industrial engine for centuries before it became a heritage site. What does the category 'heritage' do to that history? What does it make safe, and what does it make invisible?",
      },
    ],
    layers: {
      site: "Three Mills Island",
    },
    bifurcation: {
      a: {
        label: "A — Continuity",
        sub: "Green reform, remediation, European governance. The past is a problem being solved.",
        prompt: "Describe Three Mills Island as a site of European environmental heritage: a place where pre-industrial relationships with tidal energy are preserved and celebrated.",
      },
      b: {
        label: "B — Rupture",
        sub: "Post-apocalyptic. The same structures persist under new names.",
        prompt: "Describe Three Mills Island as a site where the origins of metabolic extraction are aestheticised and neutralised: where the beginning of the Anthropocene is repackaged as charm.",
      },
      debrief: "After writing: where exactly does the disavowal happen in position A? At what word, image or idea does the difficult history drop out?",
    },
  },
  {
    id: 2,
    title: "Carpenter's Road Lock",
    location: "Carpenter's Road Lock, E20 2ST",
    time: "10:20 – 11:00",
    orientation: "We are looking at what used to be the Bow Back Rivers: a network of channels redirected and functionally erased across two centuries of industrial use. We've been walking beside a river system that has been infrastructurally consumed. Carpenter's Road Lock marks where this buried hydrological history meets the Olympic Park, whose construction required the largest post-industrial land decontamination in British history.",
    questions: [
      {
        id: "2a",
        type: "OBSERVATION",
        text: "The Channelsea is present but barely legible as a river. What sensory details (smell? colour?) make it feel like water, and which make it feel like infrastructure? Write three specific observations.",
      },
      {
        id: "2b",
        type: "REFLECTION",
        text: "Rob Nixon's concept of 'slow violence' describes harm that unfolds gradually and invisibly over time: accumulating in bodies, soils and waterways rather than arriving as a legible event. The contamination buried under the Olympic Park is a case of buried slow violence. Who historically absorbed that harm? Is the remediation a reckoning with slow violence, or another version of it?",
      },
      {
        id: "2c",
        type: "GROUP DISCUSSION",
        text: "Where exactly does the disavowal happen in the official Olympic legacy narrative? Find the precise word, phrase or image where the difficult history drops out. What replaces it?",
      },
    ],
    layers: {
      site: "Carpenter's Road Lock",
    },
    bifurcation: {
      a: {
        label: "A — Continuity",
        sub: "Green reform, remediation, European governance. The past is a problem being solved.",
        prompt: "Describe the Olympic decontamination as an act of European environmental governance: an industrial sacrifice zone restored, a post-industrial landscape returned to ecological health through legislative will and technical expertise.",
      },
      b: {
        label: "B — Rupture",
        sub: "Post-apocalyptic. The same structures persist under new names. Something has to break.",
        prompt: "Describe the Olympic decontamination as a continuation of the same logic that produced the contamination: a landscape cleaned up for a global audience at the expense of the communities that lived there, the harm made invisible rather than addressed.",
      },
      debrief: "After writing: where exactly does the disavowal happen in position A? At what word, image or idea does the difficult history drop out?",
    },
  },
  {
    id: 3,
    title: "Olympic Park — Wetland Margins",
    location: "Eastern wetland edge, enter from Carpenters Road",
    time: "11:05 – 11:50",
    orientation: "The wetland margins of the Olympic Park are among the most biodiverse urban habitats in London. Every species, water channel and landform was installed by landscape architects over contaminated ground. This is what Anthropocene 'nature' often looks like: real ecology, genuinely alive, installed over buried harm.",
    questions: [
      {
        id: "3a",
        type: "REFLECTION",
        text: "Madeleine Fagan argues that the Anthropocene concept can generate ontological anxiety: a destabilisation of the biographical and cultural continuity on which stable selfhood depends. This paradoxically contributes to denialism rather than action. A 'healed' landscape like this solicits a particular emotional response: reassurance. Does that reassurance feel like real resilience, or like a more sophisticated form of the disavowal you have been tracking all morning?",
      },
      {
        id: "3b",
        type: "GROUP DISCUSSION",
        text: "The European Green Deal frames ecological restoration as central to European Anthropocene governance. Is there something distinctively European about the values embedded in this landscape, or is this a globally 'generic' ecological modernism that happens to have a European address? And if the 'green continuity' story (position A) amounts to saving a planet whose basic structures of injustice remain intact, what would position B actually require? What would have to break, and who would decide?",
      },
      {
        id: "3c",
        type: "PRACTICAL TASK — FOR UCL EAST",
        text: "Before leaving: agree as a group on one moment from today where the two positions felt genuinely irresolvable — not because the question was unclear, but because both answers were simultaneously true. Bring this to the workshop.",
      },
    ],
    layers: {
      site: "the Olympic Park wetland",
    },
    bifurcation: {
      a: {
        label: "A — Continuity",
        sub: "Green reform, remediation, European governance. The past is a problem being solved.",
        prompt: "Describe this wetland as evidence that European environmental governance works: that nature-based solutions, ecological restoration and green infrastructure can reclaim post-industrial landscapes and produce genuine biodiversity. A model for the world.",
      },
      b: {
        label: "B — Rupture",
        sub: "Post-apocalyptic. The same structures persist under new names. Something has to break.",
        prompt: "Describe this wetland as a simulation of nature installed over unresolved harm: where the beauty of the ecology functions to make the buried contamination, the displacement of communities, and the continuation of extractive structures aesthetically tolerable.",
      },
      debrief: "After writing: where exactly does the disavowal happen in position A? At what word, image or idea does the difficult history drop out?",
    },
  },
];

const LAYER_ROWS = [
  "What you can see",
  "What was removed to make this visible",
  "What lies beneath (physically)",
  "What story the visible layer tells",
  "What that story disavows",
];

// ── Styles ────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F0EDE6;
    --surface: #FFFFFF;
    --ink: #1A1A1A;
    --mid: #555555;
    --faint: #D0CCC4;
    --rule: #1A1A1A;
    --mono: 'IBM Plex Mono', monospace;
    --sans: 'IBM Plex Sans', sans-serif;
  }

  body { background: var(--bg); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }

  .app { max-width: 480px; margin: 0 auto; min-height: 100vh; }

  /* ── NAV ── */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--ink);
    padding: 11px 16px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-title { font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #AAAAAA; }
  .nav-actions { display: flex; gap: 8px; }
  .nav-btn {
    font-family: var(--mono); font-size: 11px; font-weight: 600;
    padding: 4px 10px; border: 1.5px solid #555555; background: transparent;
    cursor: pointer; color: #AAAAAA; border-radius: 2px; transition: all 0.15s;
  }
  .nav-btn:hover { border-color: #FFFFFF; color: #FFFFFF; }
  .nav-btn.active { border-color: #FFFFFF; background: #FFFFFF; color: var(--ink); }

  /* ── COVER ── */
  .cover { padding: 28px 20px 60px; }
  .cover-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mid); margin-bottom: 10px; }
  .cover-title { font-family: var(--sans); font-size: 26px; font-weight: 600; line-height: 1.15; margin-bottom: 6px; }
  .cover-sub { font-family: var(--sans); font-size: 14px; color: var(--mid); margin-bottom: 24px; }
  .cover-rule { border: none; border-top: 2px solid var(--ink); margin-bottom: 22px; }

  .framing { margin-bottom: 28px; }
  .framing p { font-size: 14px; line-height: 1.7; color: var(--ink); margin-bottom: 12px; }
  .framing em { font-style: italic; color: var(--mid); }
  .framing strong { font-weight: 600; }

  .route-section { margin-bottom: 32px; }
  .section-label { font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--mid); margin-bottom: 12px; }

  .stop-btn {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 14px 16px; margin-bottom: 8px;
    background: var(--surface); border: 1.5px solid var(--faint);
    text-align: left; cursor: pointer; border-radius: 3px;
    transition: border-color 0.15s;
  }
  .stop-btn:hover { border-color: var(--ink); }
  .stop-btn-left {}
  .stop-btn-num { font-family: var(--mono); font-size: 11px; color: var(--mid); margin-bottom: 3px; }
  .stop-btn-title { font-size: 15px; font-weight: 600; color: var(--ink); }
  .stop-btn-arrow { font-size: 18px; color: var(--faint); }
  .stop-btn:hover .stop-btn-arrow { color: var(--ink); }

  .progress-dots { display: flex; gap: 6px; align-items: center; margin-bottom: 28px; }
  .pdot { width: 8px; height: 8px; border-radius: 50%; background: var(--faint); transition: background 0.2s; }
  .pdot.done { background: var(--ink); }
  .progress-label { font-family: var(--mono); font-size: 11px; color: var(--mid); margin-left: 4px; }

  /* ── STOP VIEW ── */
  .stop-view { padding: 0 0 80px; }

  .stop-header { padding: 20px 20px 0; }
  .stop-back { font-family: var(--mono); font-size: 11px; color: var(--mid); background: none; border: none; cursor: pointer; padding: 0 0 12px; display: block; }
  .stop-back:hover { color: var(--ink); }
  .stop-tag { font-family: var(--mono); font-size: 11px; font-weight: 600; background: var(--ink); color: var(--bg); padding: 2px 8px; border-radius: 2px; display: inline-block; margin-bottom: 8px; }
  .stop-title-main { font-size: 20px; font-weight: 600; line-height: 1.2; margin-bottom: 4px; }
  .stop-meta { font-family: var(--mono); font-size: 11px; color: var(--mid); margin-bottom: 16px; }
  .stop-rule { border: none; border-top: 2px solid var(--ink); margin: 0 20px 0; }

  .inner-tabs {
    display: flex; overflow-x: auto;
    border-bottom: 1.5px solid var(--faint);
    padding: 0 20px;
    scrollbar-width: none; -webkit-overflow-scrolling: touch;
  }
  .inner-tabs::-webkit-scrollbar { display: none; }
  .inner-tab {
    font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
    padding: 12px 14px; border: none; background: none; cursor: pointer;
    color: var(--mid); white-space: nowrap;
    border-bottom: 2px solid transparent; margin-bottom: -1.5px;
    transition: color 0.15s;
  }
  .inner-tab.active { color: var(--ink); border-bottom-color: var(--ink); }

  .tab-content { padding: 22px 20px; }

  .orientation {
    font-size: 14px; line-height: 1.75; color: var(--mid);
    font-style: italic; padding: 14px 16px;
    border-left: 3px solid var(--ink); margin-bottom: 24px;
    background: var(--surface);
  }

  /* Questions */
  .q-block { margin-bottom: 24px; }
  .q-type { font-family: var(--mono); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mid); margin-bottom: 6px; }
  .q-text { font-size: 15px; line-height: 1.65; color: var(--ink); margin-bottom: 10px; }
  .q-textarea {
    width: 100%; padding: 10px 12px;
    border: 1.5px solid var(--faint); border-radius: 3px;
    background: var(--surface); color: var(--ink);
    font-family: var(--sans); font-size: 15px; line-height: 1.55;
    resize: vertical; min-height: 96px;
    transition: border-color 0.15s;
  }
  .q-textarea:focus { outline: none; border-color: var(--ink); }
  .q-textarea::placeholder { color: #BBBBBB; }
  .q-divider { border: none; border-top: 1px solid var(--faint); margin: 24px 0; }

  /* Layers */
  .layers-intro { font-size: 14px; color: var(--mid); font-style: italic; margin-bottom: 16px; line-height: 1.65; }
  .layer-row { margin-bottom: 12px; }
  .layer-label { font-family: var(--mono); font-size: 11px; font-weight: 600; color: var(--ink); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.04em; }
  .layer-row.last .layer-label { color: var(--ink); }
  .layer-textarea {
    width: 100%; padding: 8px 12px;
    border: 1.5px solid var(--faint); border-radius: 3px;
    background: var(--surface); color: var(--ink);
    font-family: var(--sans); font-size: 14px; line-height: 1.55;
    resize: vertical; min-height: 68px;
    transition: border-color 0.15s;
  }
  .layer-textarea:focus { outline: none; border-color: var(--ink); }
  .layer-textarea::placeholder { color: #BBBBBB; }
  .layer-row.last .layer-textarea { border-color: var(--ink); min-height: 80px; }

  /* Bifurcation */
  .bif-intro { font-size: 14px; color: var(--mid); font-style: italic; margin-bottom: 18px; line-height: 1.65; }
  .bif-col { border: 1.5px solid var(--ink); border-radius: 3px; overflow: hidden; margin-bottom: 16px; }
  .bif-head { background: var(--ink); color: var(--surface); padding: 10px 14px; }
  .bif-head-label { font-family: var(--mono); font-size: 13px; font-weight: 600; color: #FFFFFF; }
  .bif-head-sub { font-size: 12px; color: #AAAAAA; margin-top: 3px; }
  .bif-prompt { font-size: 13px; line-height: 1.65; color: var(--mid); font-style: italic; padding: 12px 14px; border-bottom: 1px solid var(--faint); background: var(--bg); }
  .bif-textarea {
    width: 100%; padding: 10px 14px;
    border: none; border-radius: 0; background: var(--surface); color: var(--ink);
    font-family: var(--sans); font-size: 14px; line-height: 1.6;
    resize: vertical; min-height: 110px; display: block;
  }
  .bif-textarea:focus { outline: none; }
  .bif-textarea::placeholder { color: #BBBBBB; }

  .bif-debrief { border: 1.5px solid var(--faint); border-radius: 3px; padding: 14px; background: var(--surface); }
  .bif-debrief-label { font-family: var(--mono); font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mid); margin-bottom: 6px; }
  .bif-debrief-text { font-size: 13px; line-height: 1.65; color: var(--mid); font-style: italic; margin-bottom: 10px; }
  .bif-debrief-textarea {
    width: 100%; padding: 8px 10px;
    border: 1.5px solid var(--faint); border-radius: 3px;
    background: var(--bg); color: var(--ink);
    font-family: var(--sans); font-size: 14px; line-height: 1.55;
    resize: vertical; min-height: 72px;
  }
  .bif-debrief-textarea:focus { outline: none; border-color: var(--ink); }
  .bif-debrief-textarea::placeholder { color: #BBBBBB; }

  /* Glossary */
  .gloss-intro { font-size: 14px; color: var(--mid); line-height: 1.65; margin-bottom: 20px; font-style: italic; }
  .gloss-item { padding: 14px 0; border-bottom: 1px solid var(--faint); }
  .gloss-term { font-family: var(--mono); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ink); margin-bottom: 5px; }
  .gloss-def { font-size: 14px; line-height: 1.7; color: var(--mid); }

  /* Save modal */
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.6);
    display: flex; align-items: flex-end; z-index: 200;
  }
  .modal {
    background: var(--surface); width: 100%; max-width: 480px; margin: 0 auto;
    border-radius: 8px 8px 0 0; padding: 24px 20px 40px;
    max-height: 85vh; overflow-y: auto;
  }
  .modal-title { font-size: 17px; font-weight: 600; margin-bottom: 6px; }
  .modal-sub { font-size: 14px; color: var(--mid); margin-bottom: 20px; line-height: 1.55; }
  .modal-preview {
    background: var(--bg); border-radius: 3px; padding: 14px;
    font-family: var(--mono); font-size: 12px; line-height: 1.65;
    color: var(--ink); white-space: pre-wrap; max-height: 200px;
    overflow-y: auto; margin-bottom: 20px; border: 1px solid var(--faint);
  }
  .modal-actions { display: flex; flex-direction: column; gap: 10px; }
  .modal-btn {
    width: 100%; padding: 14px; border-radius: 3px;
    font-family: var(--sans); font-size: 15px; font-weight: 600;
    cursor: pointer; border: none; transition: opacity 0.15s;
  }
  .modal-btn:active { opacity: 0.8; }
  .modal-btn.primary { background: var(--ink); color: var(--surface); }
  .modal-btn.secondary { background: var(--bg); color: var(--ink); border: 1.5px solid var(--faint); }
  .modal-close { background: none; border: none; font-family: var(--mono); font-size: 11px; color: var(--mid); cursor: pointer; width: 100%; text-align: center; padding: 12px; }
  .copy-flash { color: #2A7A2A; font-size: 13px; text-align: center; font-family: var(--mono); margin-top: 4px; }
`;

// ── Helpers ───────────────────────────────────────────────────────────────

function buildSaveText(inputs) {
  const lines = [];
  lines.push("EUROPE IN THE ANTHROPOCENE — RIVER LEA WALK");
  lines.push("UCL-Fulda Summer School, June 2026");
  lines.push("═".repeat(44));

  STOPS.forEach(stop => {
    lines.push(`\nSTOP ${stop.id}: ${stop.title.toUpperCase()}`);
    lines.push("─".repeat(40));

    stop.questions.forEach(q => {
      const val = inputs[q.id];
      if (val && val.trim()) {
        lines.push(`\n[${q.type}]`);
        lines.push(val.trim());
      }
    });

    const layerVals = LAYER_ROWS.map((label, i) => {
      const key = `layer-${stop.id}-${i}`;
      return inputs[key] && inputs[key].trim() ? `${label}: ${inputs[key].trim()}` : null;
    }).filter(Boolean);
    if (layerVals.length) {
      lines.push("\n[LAYERING TASK]");
      layerVals.forEach(l => lines.push(l));
    }

    const bA = inputs[`bif-${stop.id}-a`];
    const bB = inputs[`bif-${stop.id}-b`];
    const bD = inputs[`bif-${stop.id}-debrief`];
    if ((bA && bA.trim()) || (bB && bB.trim())) {
      lines.push("\n[BIFURCATION]");
      if (bA && bA.trim()) lines.push(`A — Continuity:\n${bA.trim()}`);
      if (bB && bB.trim()) lines.push(`\nB — Rupture:\n${bB.trim()}`);
      if (bD && bD.trim()) lines.push(`\nDisavowal moment:\n${bD.trim()}`);
    }
  });

  lines.push("\n" + "═".repeat(44));
  lines.push("Notes compiled from River Lea Walk worksheet");
  return lines.join("\n");
}

function hasAnyContent(inputs) {
  return Object.values(inputs).some(v => v && v.trim().length > 0);
}

// ── Save Modal ────────────────────────────────────────────────────────────

function SaveModal({ inputs, onClose }) {
  const [copied, setCopied] = useState(false);
  const text = buildSaveText(inputs);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("River Lea Walk — my notes");
    const body = encodeURIComponent(text);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-title">Save your notes</div>
        <div className="modal-sub">Copy to clipboard and paste into your notes app, or send to your own email address to have it ready for the workshop.</div>
        <div className="modal-preview">{text}</div>
        <div className="modal-actions">
          <button className="modal-btn primary" onClick={handleEmail}>Send to my email</button>
          <button className="modal-btn secondary" onClick={handleCopy}>
            {copied ? "Copied ✓" : "Copy to clipboard"}
          </button>
          {copied && <div className="copy-flash">Paste into your notes app to save.</div>}
        </div>
        <button className="modal-close" onClick={onClose}>close</button>
      </div>
    </div>
  );
}

// ── Screens ───────────────────────────────────────────────────────────────

function Cover({ onSelectStop, inputs }) {
  const filled = STOPS.map(s => {
    const keys = [
      ...s.questions.map(q => q.id),
      ...LAYER_ROWS.map((_, i) => `layer-${s.id}-${i}`),
      `bif-${s.id}-a`, `bif-${s.id}-b`,
    ];
    return keys.some(k => inputs[k] && inputs[k].trim());
  });
  const doneCount = filled.filter(Boolean).length;

  return (
    <div className="cover">
      <div className="cover-eyebrow">UCL-Fulda Summer School · June 2026</div>
      <div className="cover-title">Europe in the Anthropocene</div>
      <div className="cover-sub">River Lea Workshop Walk</div>
      <hr className="cover-rule" />

      <div className="framing">
        <p>This walk is an argument about <strong>superimposed ontologies of the Anthropocene</strong>. The landscape you will move through today carries at least two incompatible stories simultaneously — and the central task is to hold both in your mind without resolving them prematurely.</p>
        <p>European modernity has a particular habit of imagining that it has left its difficult history behind — that the 'bad' period is over and a reformed version has taken its place. The Anthropocene makes that habit visible as a habit. Each stop on this walk is a site where the disavowal can be located precisely.</p>
        <p><strong>A — Continuity:</strong> Europe is cleaning up. Legislation is in place, habitats are being restored, the past is being addressed. <em>'How to save the planet.'</em></p>
        <p><strong>B — Rupture:</strong> The same structures that generated the damage persist under new names. No real rupture, no real alternative world. <em>'A billion black Anthropocenes or none.'</em></p>
        <p><em>At each stop: think about the layers of the landscape, and write about the same site from both positions.</em></p>
      </div>

      <div className="route-section">
        <div className="section-label">Stops</div>
        {STOPS.map((s, i) => (
          <button key={s.id} className="stop-btn" onClick={() => onSelectStop(s.id)}>
            <div className="stop-btn-left">
              <div className="stop-btn-num">Stop {s.id}  ·  {s.time}</div>
              <div className="stop-btn-title">{s.title}</div>
            </div>
            <div className="stop-btn-arrow">{filled[i] ? "✓" : "›"}</div>
          </button>
        ))}
        <button className="stop-btn" onClick={() => onSelectStop("glossary")}>
          <div className="stop-btn-left">
            <div className="stop-btn-num">Reference</div>
            <div className="stop-btn-title">Concept Glossary</div>
          </div>
          <div className="stop-btn-arrow">›</div>
        </button>
      </div>

      {doneCount > 0 && (
        <div className="progress-dots">
          {filled.map((done, i) => <div key={i} className={`pdot${done ? " done" : ""}`} />)}
          <span className="progress-label">{doneCount} of 3 stops started</span>
        </div>
      )}
    </div>
  );
}

function QuestionsTab({ stop, inputs, onChange }) {
  return (
    <div className="tab-content">
      <div className="orientation">{stop.orientation}</div>
      {stop.questions.map((q, i) => (
        <div key={q.id}>
          <div className="q-block">
            <div className="q-type">{q.type}</div>
            <div className="q-text">{q.text}</div>
            <textarea
              className="q-textarea"
              placeholder="Your notes…"
              value={inputs[q.id] || ""}
              onChange={e => onChange(q.id, e.target.value)}
              rows={4}
            />
          </div>
          {i < stop.questions.length - 1 && <hr className="q-divider" />}
        </div>
      ))}
    </div>
  );
}

function LayersTab({ stop, inputs, onChange }) {
  return (
    <div className="tab-content">
      <p className="layers-intro">At {stop.layers.site}, work through each layer. Be as concrete and specific as you can.</p>
      {LAYER_ROWS.map((label, i) => {
        const key = `layer-${stop.id}-${i}`;
        const isLast = i === LAYER_ROWS.length - 1;
        return (
          <div key={key} className={`layer-row${isLast ? " last" : ""}`}>
            <div className="layer-label">{label}</div>
            <textarea
              className="layer-textarea"
              placeholder={isLast ? "Name the disavowal as precisely as you can…" : ""}
              value={inputs[key] || ""}
              onChange={e => onChange(key, e.target.value)}
              rows={2}
            />
          </div>
        );
      })}
    </div>
  );
}

function BifurcationTab({ stop, inputs, onChange }) {
  const { bifurcation: bif } = stop;
  return (
    <div className="tab-content">
      <p className="bif-intro">Write the same landscape from both positions. Don't resolve the tension — that gap is the point.</p>

      {[
        { key: `bif-${stop.id}-a`, side: bif.a },
        { key: `bif-${stop.id}-b`, side: bif.b },
      ].map(({ key, side }) => (
        <div key={key} className="bif-col">
          <div className="bif-head">
            <div className="bif-head-label">{side.label}</div>
            <div className="bif-head-sub">{side.sub}</div>
          </div>
          <div className="bif-prompt">{side.prompt}</div>
          <textarea
            className="bif-textarea"
            placeholder="Write here…"
            value={inputs[key] || ""}
            onChange={e => onChange(key, e.target.value)}
            rows={5}
          />
        </div>
      ))}

      <div className="bif-debrief">
        <div className="bif-debrief-label">After writing</div>
        <div className="bif-debrief-text">{bif.debrief}</div>
        <textarea
          className="bif-debrief-textarea"
          placeholder="Name the exact word or image…"
          value={inputs[`bif-${stop.id}-debrief`] || ""}
          onChange={e => onChange(`bif-${stop.id}-debrief`, e.target.value)}
          rows={3}
        />
      </div>
    </div>
  );
}

function GlossaryView({ onBack }) {
  return (
    <div className="stop-view">
      <div className="stop-header">
        <button className="stop-back" onClick={onBack}>← back</button>
        <div className="stop-tag">Reference</div>
        <div className="stop-title-main">Concept Glossary</div>
        <div className="stop-meta">Read this before starting the walk</div>
      </div>
      <hr className="stop-rule" />
      <div className="tab-content">
        <p className="gloss-intro">These terms appear across all three stops. Familiarise yourself with them before you set off — you will encounter them in the landscape.</p>
        {GLOSSARY.map(([term, def]) => (
          <div key={term} className="gloss-item">
            <div className="gloss-term">{term}</div>
            <div className="gloss-def">{def}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StopView({ stopId, inputs, onChange, onBack }) {
  const [innerTab, setInnerTab] = useState("questions");
  const stop = STOPS.find(s => s.id === stopId);
  if (!stop) return null;

  return (
    <div className="stop-view">
      <div className="stop-header">
        <button className="stop-back" onClick={onBack}>← back</button>
        <div className="stop-tag">Stop {stop.id}</div>
        <div className="stop-title-main">{stop.title}</div>
        <div className="stop-meta">{stop.location}  ·  {stop.time}</div>
      </div>
      <hr className="stop-rule" />

      <div className="inner-tabs">
        {[["questions", "Questions"], ["layers", "Layers"], ["bifurcation", "A / B"]].map(([id, label]) => (
          <button key={id} className={`inner-tab${innerTab === id ? " active" : ""}`} onClick={() => setInnerTab(id)}>
            {label}
          </button>
        ))}
      </div>

      {innerTab === "questions"    && <QuestionsTab    stop={stop} inputs={inputs} onChange={onChange} />}
      {innerTab === "layers"       && <LayersTab       stop={stop} inputs={inputs} onChange={onChange} />}
      {innerTab === "bifurcation"  && <BifurcationTab  stop={stop} inputs={inputs} onChange={onChange} />}
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState("cover");
  const [inputs, setInputs] = useState({});
  const [showSave, setShowSave] = useState(false);

  const handleChange = (key, val) => setInputs(prev => ({ ...prev, [key]: val }));

const handleNavigate = (destination) => {
  setView(destination);
  window.scrollTo(0, 0);
};

  const currentStopNum = typeof view === "number" ? view : null;

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="nav">
          <span className="nav-title">
            {view === "cover" ? "River Lea Walk" : view === "glossary" ? "Glossary" : `Stop ${view}`}
          </span>
          <div className="nav-actions">
            {view !== "cover" && (
              <button className="nav-btn" onClick={() => handleNavigate("cover")}>Home</button>
            )}
            {hasAnyContent(inputs) && (
              <button className="nav-btn active" onClick={() => setShowSave(true)}>Save notes</button>
            )}
          </div>
        </div>

        {view === "cover"    && <Cover onSelectStop={handleNavigate} inputs={inputs} />}
        {view === "glossary" && <GlossaryView onBack={() => handleNavigate("cover")} />}
        {typeof view === "number" && (
          <StopView stopId={view} inputs={inputs} onChange={handleChange} onBack={() => setView("cover")} />
        )}

        {showSave && <SaveModal inputs={inputs} onClose={() => setShowSave(false)} />}
      </div>
    </>
  );
}
