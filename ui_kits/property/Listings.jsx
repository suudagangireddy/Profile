// CBRE Japan — Properties search + listings screen
function Listings({ onOpen }) {
  const { Eyebrow, Input, Select, Button, Badge, PropertyCard } = window.CBREJapanDesignSystem_2c7200;
  const data = window.CBRE_DATA;
  const [type, setType] = React.useState("すべて");
  const filters = data.filters || ["すべて"];
  const list = type === "すべて" ? data.properties : data.properties.filter(p => p.type === type);

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Hero search band */}
      <div style={{ background: "var(--cbre-dark-green) url('../../assets/brand/gradients/gradient-A-16x9.png') center/cover", padding: "44px 32px 36px", color: "#fff" }}>
        <Eyebrow tone="accent">事業用不動産 · 日本</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-jp)", fontSize: 40, fontWeight: 500, lineHeight: 1.3, letterSpacing: "0.01em", margin: "12px 0 22px", maxWidth: 680 }}>
          ビジネスを前進させる　空間を見つける
        </h1>
        <div style={{ display: "flex", gap: 12, background: "#fff", padding: 12, borderRadius: "var(--radius-lg)", maxWidth: 760, boxShadow: "var(--shadow-lg)" }}>
          <div style={{ flex: 2 }}><Input placeholder="エリア・建物名・住所" iconLeft={<span>⌕</span>} /></div>
          <div style={{ flex: 1 }}><Select options={["オフィス","物流","リテール","レジデンス"]} /></div>
          <Button variant="primary">検索</Button>
        </div>
      </div>

      {/* Filter row + results */}
      <div style={{ padding: "26px 32px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setType(f)} style={{
              border: type === f ? "1px solid var(--cbre-green)" : "1px solid var(--border-default)",
              background: type === f ? "var(--cbre-green)" : "#fff",
              color: type === f ? "#fff" : "var(--text-body)",
              fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
              padding: "8px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
            }}>{f}</button>
          ))}
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--text-muted)" }}>{list.length} 件</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {list.map(p => (
            <PropertyCard key={p.id} {...p} image={p.img} onClick={() => onOpen(p)} />
          ))}
        </div>
      </div>
    </div>
  );
}
window.Listings = Listings;
