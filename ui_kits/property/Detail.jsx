// CBRE Japan — property detail screen
function Detail({ property, onBack }) {
  const { Eyebrow, Badge, Button, Tabs, StatCard, Card } = window.CBREJapanDesignSystem_2c7200;
  const p = property;
  const [tab, setTab] = React.useState("概要");
  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 1200, margin: "0 auto", padding: "24px 32px 48px" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--cbre-green)", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, cursor: "pointer", padding: 0, marginBottom: 18 }}>← 検索結果に戻る</button>

      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", height: 320, position: "relative", marginBottom: 24 }}>
        <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 16, left: 16 }}><Badge tone={p.statusTone} variant="solid">{p.status}</Badge></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 40 }}>
        <div>
          <Eyebrow>{p.type} · グレード {p.grade}</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-jp)", fontSize: 34, fontWeight: 500, letterSpacing: "0.01em", margin: "10px 0 6px", color: "var(--text-strong)" }}>{p.title}</h1>
          <div style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 24 }}>{p.address}</div>

          <Tabs tabs={["概要","フロアプラン","ロケーション","資料"]} value={tab} onChange={setTab} style={{ marginBottom: 22 }} />
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-body)", maxWidth: 560 }}>
            日本でも有数の人気サブマーケットに位置する、{p.grade === "先進的" ? "先進的な" : "グレード" + p.grade + "の"}{p.type}アセット。効率的な基準階、ハイグレードな仕様、優れた交通アクセスを備え、事業の集約・拡大を目指すテナントにとって象徴的な機会となります。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 28 }}>
            {p.specs.map((s,i) => (
              <Card key={i} tone="sunken" padding={16}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "var(--text-strong)" }}>{s.value}</div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card padding={24} style={{ position: "sticky", top: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>募集賃料</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "8px 0 20px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, color: "var(--text-strong)" }}>{p.price}</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{p.priceUnit}</span>
            </div>
            <Button variant="primary" fullWidth style={{ marginBottom: 10 }}>内見を予約する</Button>
            <Button variant="secondary" fullWidth>資料をダウンロード</Button>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--cbre-celadon-tint)" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-strong)" }}>佐藤 健司</div>
                <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>Director, Office Advisory</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.Detail = Detail;
