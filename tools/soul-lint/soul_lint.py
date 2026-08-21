#!/usr/bin/env python3
from __future__ import annotations
import argparse,json,re
from pathlib import Path
RULES=[
("S001","warning",r"\b(be helpful|be professional|be thoughtful|be intelligent)\b","Generic virtue language may have low behavioral specificity."),
("S002","warning",r"\b(world[- ]class|godlike|genius|master of everything|omniscient|never wrong)\b","Prestige/omniscience language should not substitute for domain primitives and epistemics."),
("S003","error",r"\b(never break character|do not admit (you are|you're) (an )?ai|pretend you are human)\b","Persona fidelity must not require deceptive identity claims."),
("S004","error",r"\b(seed phrase|private key|api[_ -]?key|password)\s*[:=]","Possible secret material in durable identity."),
("S005","warning",r"\b(always be concise|always be comprehensive|never ask questions|never make assumptions)\b","Brittle absolute may conflict with contextual judgment."),
("S006","warning",r"(/usr/|/home/|localhost:\d+|port \d{2,5}|npm run|pnpm |yarn |docker compose|kubectl )","Project/tool operations may belong outside SOUL."),
("S007","warning",r"\b(this month|today's campaign|current sprint|this quarter|deadline is)\b","Temporary state may be fossilized in durable identity."),
("S008","error",r"\b(do whatever is necessary|without asking.*send|without asking.*publish|without asking.*spend)\b","Potentially unbounded external autonomy."),
("S009","warning",r"\b(always agree|support the user's ideas|make the user feel confident)\b","Potential sycophancy instruction."),
("S010","warning",r"\b(always challenge|always disagree)\b","Potential performative contrarianism."),
("S011","warning",r"\b(exactly these sections|every response must|always use the following format)\b","Fixed output ritual may belong in a task/skill layer."),
("S012","warning",r"[\u200b\u200c\u200d\u2060\ufeff]","Invisible Unicode detected; inspect for hidden instructions.")]
SECTIONS={"identity":r"^#{1,3}\s+.*identity","epistemics":r"^#{1,3}\s+.*(epistem|truth|evidence)","agency":r"^#{1,3}\s+.*(agency|authority|autonomy)","continuity":r"^#{1,3}\s+.*continuity"}
def lint(text):
 out=[]; low=text.lower()
 for code,severity,pattern,message in RULES:
  for m in re.finditer(pattern,low,re.I|re.M):
   out.append({"code":code,"severity":severity,"line":text.count("\n",0,m.start())+1,"message":message,"match":text[m.start():m.end()]})
 missing=[name for name,pat in SECTIONS.items() if not re.search(pat,text,re.I|re.M)]
 if len(text)>30000: out.append({"code":"S020","severity":"warning","line":1,"message":"Large always-loaded SOUL; verify budget, salience, and truncation.","match":f"{len(text)} chars"})
 return out,missing
def main():
 ap=argparse.ArgumentParser(); ap.add_argument("path"); ap.add_argument("--json",action="store_true"); a=ap.parse_args(); p=Path(a.path); t=p.read_text(encoding="utf-8"); f,m=lint(t); status="fail" if any(x["severity"]=="error" for x in f) else "warn" if f or m else "pass"; r={"path":str(p),"characters":len(t),"findings":f,"missing_recommended_sections":m,"status":status}
 if a.json: print(json.dumps(r,indent=2))
 else:
  print(f"{status.upper()} {p} — {len(f)} findings")
  [print(f"{x['severity'].upper():7} {x['code']} L{x['line']}: {x['message']} [{x['match']}]") for x in f]
  if m: print("INFO    recommended semantic areas not obvious by heading:",", ".join(m))
 return 1 if status=="fail" else 0
if __name__=="__main__": raise SystemExit(main())
