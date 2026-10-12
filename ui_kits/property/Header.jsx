// CBRE Japan — site header / global nav
function Header({ active, onNav }) {
  const { Button } = window.CBREJapanDesignSystem_2c7200;
  const nav = [
    { key: "Properties", label: "物件を探す" },
    { key: "Research", label: "リサーチ" },
    { key: "Services", label: "サービス" },
    { key: "About", label: "会社情報" },
  ];
  return (
    <header style={{
      display: "flex", alignItems: "center", gap: 32,
      padding: "0 32px", height: 68, background: "var(--cbre-green)",
      color: "#fff", fontFamily: "var(--font-sans)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => onNav("Properties")}>
        <img src="../../assets/brand/CBRE_white.svg" alt="CBRE" style={{ height: 22 }} />
        <span style={{ width: 1, height: 22, background: "rgba(255,255,255,0.3)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cbre-celadon-tint)" }}>Japan</span>
      </div>
      <nav style={{ display: "flex", gap: 4, flex: 1 }}>
        {nav.map((n) => (
          <button key={n.key} onClick={() => onNav(n.key)} style={{
            background: "transparent", border: "none", cursor: "pointer",
            color: active === n.key ? "#fff" : "var(--cbre-celadon-tint)",
            fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: active === n.key ? 600 : 500,
            padding: "8px 14px", borderBottom: active === n.key ? "2px solid var(--cbre-accent-green)" : "2px solid transparent",
          }}>{n.label}</button>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--cbre-celadon-tint)", cursor: "pointer" }}>EN</span>
        <Button variant="accent" size="sm">物件を掲載する</Button>
      </div>
    </header>
  );
}
window.Header = Header;
