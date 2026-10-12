// CBRE Japan UI kit — サンプルデータ（実在しないブランド説明用データ）
window.CBRE_DATA = {
  // フィルター（type と一致させる） / filters must match `type`
  filters: ["すべて", "オフィス", "物流", "リテール", "レジデンス"],
  properties: [
    {
      id: "otemachi-tower", img: "../../assets/img/photography/building-reflection.jpg",
      status: "賃貸", statusTone: "green",
      title: "大手町タワー", address: "東京都千代田区大手町 1-5-5",
      type: "オフィス", grade: "A",
      specs: [{label:"募集階",value:"12F – 18F"},{label:"基準階",value:"1,240 ㎡"},{label:"グレード",value:"A"}],
      price: "¥38,200", priceUnit: "/ 坪・月",
    },
    {
      id: "shibuya-stream", img: "../../assets/img/photography/interior-staircase.jpg",
      status: "賃貸", statusTone: "green",
      title: "渋谷ストリーム", address: "東京都渋谷区渋谷 3-21-3",
      type: "オフィス", grade: "A",
      specs: [{label:"募集階",value:"9F"},{label:"基準階",value:"980 ㎡"},{label:"グレード",value:"A"}],
      price: "¥34,500", priceUnit: "/ 坪・月",
    },
    {
      id: "bay-logistics", img: "../../assets/img/photography/structure-ceiling.jpg",
      status: "新着", statusTone: "accent",
      title: "東京ベイ ロジスティクスセンター", address: "東京都江東区新木場",
      type: "物流", grade: "先進的",
      specs: [{label:"募集階",value:"1F – 3F"},{label:"延床",value:"24,800 ㎡"},{label:"天井高",value:"5.5m"}],
      price: "¥4,800", priceUnit: "/ 坪・月",
    },
    {
      id: "umeda-grand", img: "../../assets/img/photography/building-reflection.jpg",
      status: "申込あり", statusTone: "warning",
      title: "梅田グランフロント", address: "大阪府大阪市北区大深町 4-20",
      type: "オフィス", grade: "A",
      specs: [{label:"募集階",value:"22F"},{label:"基準階",value:"1,510 ㎡"},{label:"グレード",value:"A"}],
      price: "¥29,800", priceUnit: "/ 坪・月",
    },
    {
      id: "minato-retail", img: "../../assets/img/photography/interior-staircase.jpg",
      status: "賃貸", statusTone: "green",
      title: "港リテールポディウム", address: "東京都港区六本木 1-2-3",
      type: "リテール", grade: "プライム",
      specs: [{label:"募集階",value:"1F"},{label:"間口",value:"18m"},{label:"面積",value:"420 ㎡"}],
      price: "¥62,000", priceUnit: "/ 坪・月",
    },
    {
      id: "yokohama-mm", img: "../../assets/img/photography/structure-ceiling.jpg",
      status: "賃貸", statusTone: "green",
      title: "みなとみらいセンター", address: "神奈川県横浜市西区みなとみらい 2-3-1",
      type: "オフィス", grade: "B",
      specs: [{label:"募集階",value:"5F – 7F"},{label:"基準階",value:"760 ㎡"},{label:"グレード",value:"B"}],
      price: "¥21,400", priceUnit: "/ 坪・月",
    },
  ],
  stats: [
    { label: "グレードA空室率", value: "3.8", unit: "%", delta: "0.6pt", deltaDir: "down", caption: "前四半期比" },
    { label: "プライム賃料", value: "¥38", unit: "千", delta: "3.4%", deltaDir: "up", caption: "坪・月あたり" },
    { label: "投資額", value: "¥1.2", unit: "兆", delta: "11%", deltaDir: "up", caption: "2026年上期" },
    { label: "物流成約", value: "412", unit: "千㎡", delta: "2.1%", deltaDir: "down", caption: "首都圏" },
  ],
  insights: [
    { tag: "オフィス", title: "品質重視の動きが続き、東京のグレードA空室率が低下", date: "2026年6月" },
    { tag: "物流", title: "大阪圏の物流賃料が過去最高を更新", date: "2026年5月" },
    { tag: "キャピタルマーケット", title: "クロスボーダー投資が上期に回復", date: "2026年5月" },
  ],
};
