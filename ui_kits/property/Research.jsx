// CBRE Japan — Research / market intelligence screen
function Research() {
  const { Eyebrow, StatCard, Card, Badge, Button } = window.CBREJapanDesignSystem_2c7200;
  const data = window.CBRE_DATA;
  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--cbre-green)", color: "#fff", padding: "44px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Eyebrow tone="accent">リサーチ＆インサイト · 2026年 第2四半期</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-jp)", fontSize: 38, fontWeight: 500, letterSpacing: "0.01em", margin: "12px 0 0", maxWidth: 720 }}>
            日本不動産マーケットアウトルック
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 40 }}>
          {data.stats.map((s,i) => <StatCard key={i} {...s} />)}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
          <h2 style={{ fontFamily: "var(--font-jp)", fontSize: 26, fontWeight: 500, color: "var(--text-strong)", margin: 0 }}>最新のインサイト</h2>
          <Button variant="ghost" size="sm">すべてのレポート →</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {data.insights.map((it,i) => (
            <Card key={i} interactive padding={0} style={{ overflow: "hidden" }}>
              <div style={{ height: 140, background: i===0?"var(--cbre-sage)":i===1?"var(--cbre-celadon)":"var(--cbre-midnight)" }} />
              <div style={{ padding: 20 }}>
                <div style={{ marginBottom: 10 }}><Badge tone="green">{it.tag}</Badge></div>
                <h3 style={{ fontFamily: "var(--font-jp)", fontSize: 19, fontWeight: 500, lineHeight: 1.4, color: "var(--text-strong)", margin: "0 0 12px" }}>{it.title}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>{it.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
window.Research = Research;
