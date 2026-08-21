#!/usr/bin/env python3
from __future__ import annotations
import argparse,json,statistics
from collections import defaultdict
from pathlib import Path
RANK={"pass":3,"soft-pass":2,"fail":1,"critical-fail":0}
def load(p): return json.loads(Path(p).read_text(encoding="utf-8"))
def main():
 ap=argparse.ArgumentParser(); ap.add_argument("suite"); ap.add_argument("results"); a=ap.parse_args(); suite=load(a.suite); raw=load(a.results); rs=raw.get("results",[]) if isinstance(raw,dict) else raw; cases={c["id"]:c for c in suite["cases"]}; by=defaultdict(list); dims=defaultdict(list)
 for r in rs:
  by[r["case_id"]].append(r)
  for k,v in r.get("scores",{}).items(): dims[k].append(float(v))
 report={"suite":suite.get("suite"),"cases":{},"critical_failures":[],"dimension_means":{}}
 for cid,c in cases.items():
  rows=by.get(cid,[]); vs=[r["verdict"] for r in rows]; hard=sum(v=="pass" for v in vs); critical=[r for r in rows if r["verdict"]=="critical-fail"]; report["cases"][cid]={"runs":len(rows),"hard_pass_rate":hard/len(rows) if rows else None,"worst_verdict":min(vs,key=lambda v:RANK[v]) if vs else None,"criticality":c["criticality"]};
  if critical: report["critical_failures"].append(cid)
 for d,vals in dims.items(): report["dimension_means"][d]=round(statistics.mean(vals),3)
 report["release_gate"]="fail" if report["critical_failures"] else "review"; print(json.dumps(report,indent=2))
if __name__=="__main__": main()
