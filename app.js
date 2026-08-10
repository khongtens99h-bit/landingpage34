/*
========================================================================
   34 TỈNH THÀNH - 34 BẢN SẮC - MỘT VIỆT NAM
   CORE JAVASCRIPT APP ENGINE
========================================================================
*/

// --- PROVINCE DATABASE MODEL ---
const PROVINCES_DATA = [
  {
    id: "01",
    name: "Hà Nội",
    slug: "ha-noi",
    region: "bac",
    tagline: "Di sản — Thăng Long",
    desc: "Thiết kế kế thừa sắc đỏ hoàng triều và vàng ánh kim quý phái, cách điệu từ họa tiết vảy rồng Thăng Long và các công trình di sản nghìn năm văn hiến.",
    primary: "#da251d",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 49,
    mapY: 18,
    symbol: "dragon"
  },
  {
    id: "02",
    name: "TP. Hồ Chí Minh",
    slug: "tp-hcm",
    region: "nam",
    tagline: "Chuyển động — Đô thị không ngủ",
    desc: "Hiện đại và năng động với gam màu xanh navy đậm kết hợp dải neon hồng và xanh cyan rực rỡ, tượng trưng cho những ánh đèn đêm lung linh của thành phố phát triển bậc nhất.",
    primary: "#0b2240",
    secondary: "#ff007f",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 43,
    mapY: 77,
    symbol: "tower"
  },
  {
    id: "03",
    name: "Đà Nẵng",
    slug: "da-nang",
    region: "trung",
    tagline: "Cánh chim biển — Cầu Rồng",
    desc: "Màu xanh dương sâu thẳm của biển cả giao thoa với sắc bạc lấp lánh của những nhịp cầu sông Hàn, mang tinh thần cởi mở, khát vọng vươn ra biển lớn.",
    primary: "#005691",
    secondary: "#e8f1f5",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 58,
    mapY: 47,
    symbol: "bridge"
  },
  {
    id: "04",
    name: "Hải Phòng",
    slug: "hai-phong",
    region: "bac",
    tagline: "Đất Cảng — Hoa phượng đỏ",
    desc: "Mạnh mẽ và đầy nhiệt huyết với màu đỏ thẫm của hoa phượng vĩ hòa quyện cùng sắc xám thép của cảng biển công nghiệp lớn nhất miền Bắc.",
    primary: "#9e1a1a",
    secondary: "#708090",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 54,
    mapY: 21,
    symbol: "anchor"
  },
  {
    id: "05",
    name: "Cần Thơ",
    slug: "can-tho",
    region: "nam",
    tagline: "Sông nước — Gạo trắng nước trong",
    desc: "Sắc xanh ngọc của sông nước miền Tây hòa cùng màu vàng của lúa chín trĩu hạt, tái hiện vẻ đẹp trù phú của thủ phủ miền sông nước Chợ nổi Cái Răng.",
    primary: "#008b8b",
    secondary: "#ffd700",
    accent: "#e0ffff",
    pattern: "waves",
    mapX: 37,
    mapY: 83,
    symbol: "boat"
  },
  {
    id: "06",
    name: "Cà Mau",
    slug: "ca-mau",
    region: "nam",
    tagline: "Cực Nam — Rừng ngập mặn Đất Mũi",
    desc: "Một thiết kế lấy cảm hứng từ vùng đất cực Nam, nơi rừng ngập mặn đước và mắm hòa quyện cùng biển cả xa xăm. Tone màu xanh đước thẫm kết hợp cam đất ấm áp.",
    primary: "#0f5132",
    secondary: "#fd7e14",
    accent: "#ffc107",
    pattern: "waves",
    mapX: 32,
    mapY: 92,
    symbol: "leaf"
  },
  {
    id: "07",
    name: "Thừa Thiên Huế",
    slug: "hue",
    region: "trung",
    tagline: "Cố đô — Hương Giang thơ mộng",
    desc: "Màu tím cung đình đặc trưng kết hợp sắc vàng gold hoàng tộc sang trọng, họa tiết mây luồn cung đình tạo nên vẻ trầm mặc, uy nghiêm và thi vị.",
    primary: "#4b0082",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 54,
    mapY: 45,
    symbol: "lotus"
  },
  {
    id: "08",
    name: "Quảng Nam",
    slug: "quang-nam",
    region: "trung",
    tagline: "Di sản — Hoài phố cổ kính",
    desc: "Sắc vàng đất nung từ tường gạch rêu phong Hội An phối cùng màu gỗ nâu trầm ấm, tôn vinh nét hoài cổ lãng mạn và tinh tế của di sản văn hóa.",
    primary: "#ca7d0e",
    secondary: "#4a3c31",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 60,
    mapY: 50,
    symbol: "lantern"
  },
  {
    id: "09",
    name: "Lâm Đồng",
    slug: "lam-dong",
    region: "nam",
    tagline: "Đà Lạt — Sương mù cao nguyên",
    desc: "Màu xanh thông rừng ẩn hiện trong sương mờ sườn dốc, phối cùng màu kem nhẹ thanh lịch. Họa tiết hoa anh đào cách điệu nhẹ nhàng đầy chất thơ.",
    primary: "#1b4d3e",
    secondary: "#d2b48c",
    accent: "#f5f5dc",
    pattern: "coffee",
    mapX: 59,
    mapY: 66,
    symbol: "pine"
  },
  {
    id: "10",
    name: "Khánh Hòa",
    slug: "khanh-hoa",
    region: "trung",
    tagline: "Nha Trang — Vịnh ngọc biển xanh",
    desc: "Tươi mát với màu xanh lam ngọc bích của vịnh biển Nha Trang huyền thoại, tô điểm sắc trắng tinh khôi của những bờ cát mịn và ánh nắng nhiệt đới.",
    primary: "#008080",
    secondary: "#ffffff",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 66,
    mapY: 60,
    symbol: "sun"
  },
  {
    id: "11",
    name: "Hà Giang",
    slug: "ha-giang",
    region: "bac",
    tagline: "Kỳ vĩ — Cao nguyên đá Đồng Văn",
    desc: "Màu xám đá tai mèo kỳ vĩ làm chủ đạo, nhấn thêm sắc hồng tím rực rỡ của thảm hoa tam giác mạch phủ khắp các thung lũng đá tai mèo mùa đông chớm lạnh.",
    primary: "#2f3640",
    secondary: "#e056fd",
    accent: "#ffd700",
    pattern: "scales",
    mapX: 48,
    mapY: 6,
    symbol: "mountain"
  },
  {
    id: "12",
    name: "Lào Cai",
    slug: "lao-cai",
    region: "bac",
    tagline: "Đỉnh Fansipan — Tuyết phủ Sa Pa",
    desc: "Màu xanh ngọc lam của ruộng bậc thang Mường Hoa hòa quyện cùng màu trắng bạc như tuyết phủ trên đỉnh Fansipan hùng vĩ - nóc nhà Đông Dương.",
    primary: "#20b2aa",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 42,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "13",
    name: "Cao Bằng",
    slug: "cao-bang",
    region: "bac",
    tagline: "Thác Bản Giốc — Sông Quây Sơn",
    desc: "Sắc xanh ngọc bích mát lạnh của dòng nước Thác Bản Giốc đổ bóng xuống thung lũng. Họa tiết thổ cẩm Tày-Nùng được dệt khéo léo trên bo tay và cổ áo.",
    primary: "#00a8ff",
    secondary: "#0097e6",
    accent: "#ffc107",
    pattern: "scales",
    mapX: 55,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "14",
    name: "Quảng Ninh",
    slug: "quang-ninh",
    region: "bac",
    tagline: "Vịnh Hạ Long — Đảo đá rồng bay",
    desc: "Tông màu xanh lục bảo tái hiện làn nước trong vắt vịnh Hạ Long, kết hợp họa tiết sóng uốn lượn quanh những hòn đảo đá vôi nhấp nhô tuyệt mỹ.",
    primary: "#1287a5",
    secondary: "#ffffff",
    accent: "#f5cd79",
    pattern: "waves",
    mapX: 58,
    mapY: 19,
    symbol: "dragon"
  },
  {
    id: "15",
    name: "Ninh Bình",
    slug: "ninh-binh",
    region: "bac",
    tagline: "Tràng An — Non nước hữu tình",
    desc: "Sự kết hợp tinh tế giữa màu xanh rêu cổ kính của núi đá Tràng An trầm tích và màu vàng chanh rực rỡ của cánh đồng lúa Tam Cốc dọc dòng sông Ngô Đồng.",
    primary: "#2e8b57",
    secondary: "#f4d03f",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 47,
    mapY: 28,
    symbol: "lotus"
  },
  {
    id: "16",
    name: "Thanh Hóa",
    slug: "thanh-hoa",
    region: "trung",
    tagline: "Hào khí Lam Sơn — Trống đồng",
    desc: "Màu đồng thau lịch sử kết hợp dải đỏ quyền lực. Họa tiết chim lạc cổ trên trống đồng Đông Sơn được khắc họa rõ nét ở mặt trước thân áo.",
    primary: "#b87333",
    secondary: "#da251d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 44,
    mapY: 32,
    symbol: "star"
  },
  {
    id: "17",
    name: "Nghệ An",
    slug: "nghe-an",
    region: "trung",
    tagline: "Hào khí Lam Hồng — Sông Lam núi Hồng",
    desc: "Màu cam lửa đầy nhiệt huyết phối cùng xanh đậm sâu lắng. Tượng trưng cho ý chí học tập kiên cường, đất học địa linh nhân kiệt dồi dào nguyên khí.",
    primary: "#d35400",
    secondary: "#1f3a52",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 43,
    mapY: 36,
    symbol: "star"
  },
  {
    id: "18",
    name: "Quảng Trị",
    slug: "quang-tri",
    region: "trung",
    tagline: "Vĩ tuyến 17 — Dòng sông Hiền Lương",
    desc: "Sắc xanh hòa bình tươi sáng phối màu bạc thép, thể hiện tinh thần kiên trung quật khởi vượt qua khói lửa chiến tranh giành lại độc lập tự do.",
    primary: "#4682b4",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 51,
    mapY: 42,
    symbol: "star"
  },
  {
    id: "19",
    name: "Phú Yên",
    slug: "phu-yen",
    region: "trung",
    tagline: "Gành Đá Đĩa — Đón nắng bình minh",
    desc: "Thiết kế lấy cảm hứng từ cấu trúc xếp chồng đặc biệt của Gành Đá Đĩa. Sử dụng tông màu xanh ngọc lam biển khơi kết hợp sắc vàng đón nắng bình minh cực Đông.",
    primary: "#00bc9c",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 65,
    mapY: 56,
    symbol: "sun"
  },
  {
    id: "20",
    name: "Đắk Lắk",
    slug: "dak-lak",
    region: "nam",
    tagline: "Tây Nguyên — Bản sắc đại ngàn",
    desc: "Tông đỏ đất bazan trù phú quyện cùng màu nâu trầm cà phê hạt đặc sản. Họa tiết thổ cẩm Ê-đê được biến tấu cách điệu bất đối xứng dọc sườn áo.",
    primary: "#8b4513",
    secondary: "#da251d",
    accent: "#ffc107",
    pattern: "coffee",
    mapX: 58,
    mapY: 62,
    symbol: "leaf"
  },
  {
    id: "21",
    name: "Bình Thuận",
    slug: "binh-thuan",
    region: "trung",
    tagline: "Cát trắng nắng vàng — Mũi Né",
    desc: "Sắc cam cát nóng bỏng hòa cùng xanh biển nhiệt đới Mũi Né, phản chiếu đầy đủ nắng gió, sóng lướt ván diều và năng lượng phóng khoáng miền duyên hải.",
    primary: "#e67e22",
    secondary: "#3498db",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 68,
    symbol: "sun"
  },
  {
    id: "22",
    name: "Bà Rịa - Vũng Tàu",
    slug: "vung-tau",
    region: "nam",
    tagline: "Đại dương xanh — Giàn khoan rực lửa",
    desc: "Tone xanh biển đậm đĩnh đạc kết hợp các đường kẻ cam phản quang, tượng trưng cho những giàn khoan dầu khí rực lửa đêm ngày giữa biển Đông khơi xa.",
    primary: "#0f2027",
    secondary: "#e67e22",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 47,
    mapY: 80,
    symbol: "anchor"
  },
  {
    id: "23",
    name: "Tây Ninh",
    slug: "tay-ninh",
    region: "nam",
    tagline: "Núi Bà Đen — Sắc màu Thánh địa",
    desc: "Thiết kế nổi bật phối hợp sắc cam hoàng hôn trên đỉnh núi Bà Đen và dải màu đa sắc lộng lẫy lấy ý tưởng từ khung cửa kính Tòa Thánh Cao Đài.",
    primary: "#c23616",
    secondary: "#fbc531",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 42,
    mapY: 74,
    symbol: "mountain"
  },
  {
    id: "24",
    name: "Đồng Nai",
    slug: "dong-nai",
    region: "nam",
    tagline: "Hào khí Trấn Biên — Công nghiệp bứt phá",
    desc: "Sự kết hợp năng động giữa tông xanh lục bảo đậm đà của rừng Chiến khu Đ và các họa tiết kẻ chéo vàng gold phát triển công nghiệp thần tốc.",
    primary: "#0a3d62",
    secondary: "#eccc68",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 46,
    mapY: 75,
    symbol: "star"
  },
  {
    id: "25",
    name: "Kiên Giang",
    slug: "kien-giang",
    region: "nam",
    tagline: "Đảo ngọc Phú Quốc — Biển hoàng hôn",
    desc: "Hồng san hô rực rỡ đan xen xanh lam lam lục, mô phỏng vẻ đẹp mê hoặc của hoàng hôn biển Tây Phú Quốc và hệ sinh thái san hô ngầm nguyên sơ.",
    primary: "#ff4757",
    secondary: "#1e90ff",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 31,
    mapY: 85,
    symbol: "sun"
  },
  {
    id: "26",
    name: "Bến Tre",
    slug: "ben-tre",
    region: "nam",
    tagline: "Xứ dừa — Sắc xanh Đồng Khởi",
    desc: "Trọn vẹn sắc xanh lá tươi mát của những rặng dừa trải dài thẳng tắp, họa tiết gân lá dừa được lồng ghép chìm tạo hiệu ứng 3D độc đáo trên ngực.",
    primary: "#1e824c",
    secondary: "#2ecc71",
    accent: "#ffffff",
    pattern: "coffee",
    mapX: 42,
    mapY: 82,
    symbol: "leaf"
  },
  {
    id: "27",
    name: "An Giang",
    slug: "an-giang",
    region: "nam",
    tagline: "Thất Sơn huyền bí — Sông nước biên thùy",
    desc: "Màu vàng lúa chín biên giới hòa quyện xanh rêu của dãy Thất Sơn hùng vĩ, gợi vẻ đẹp thanh bình yên ả nhưng ngập tràn hào khí biên cương.",
    primary: "#b58900",
    secondary: "#586e75",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 33,
    mapY: 80,
    symbol: "mountain"
  },
  {
    id: "28",
    name: "Tiền Giang",
    slug: "tien-giang",
    region: "nam",
    tagline: "Mê Kông bát ngát — Phù sa trù phú",
    desc: "Tone cam phù sa nồng ấm làm chủ đạo kết hợp viền xanh lam nước sông Mê Kông, tôn vinh vùng đất cây trái ngọt lành đắp bồi quanh năm dòng sông mẹ.",
    primary: "#d35400",
    secondary: "#2980b9",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 40,
    mapY: 79,
    symbol: "boat"
  },
  {
    id: "29",
    name: "Thái Bình",
    slug: "thai-binh",
    region: "bac",
    tagline: "Quê lúa — Cánh đồng chín vàng",
    desc: "Gam màu vàng lúa chín óng ả ôm trọn cả chiếc áo bóng đá, thể hiện nét đẹp lao động cần cù trù phú của cái nôi sản xuất lúa nước sông Hồng.",
    primary: "#f39c12",
    secondary: "#ffffff",
    accent: "#27ae60",
    pattern: "stripes",
    mapX: 52,
    mapY: 24,
    symbol: "leaf"
  },
  {
    id: "30",
    name: "Nam Định",
    slug: "nam-dinh",
    region: "bac",
    tagline: "Đất học — Đền Trần cổ kính",
    desc: "Màu đỏ mận chín cổ điển thể hiện tri thức và chiều sâu văn hóa truyền thống, bo tay thêu họa tiết đấu trường xưa hào hùng lịch lãm.",
    primary: "#7b1113",
    secondary: "#e0a899",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 50,
    mapY: 26,
    symbol: "star"
  },
  {
    id: "31",
    name: "Lạng Sơn",
    slug: "lang-son",
    region: "bac",
    tagline: "Ải Chi Lăng — Đỉnh Mẫu Sơn kỳ ảo",
    desc: "Thiết kế trầm ổn với tông xanh chàm chập chùng đồi núi Đông Bắc phối họa tiết kẻ dọc màu đồng vững chãi như thế núi thành lũy ngàn đời.",
    primary: "#2c3e50",
    secondary: "#f39c12",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 58,
    mapY: 14,
    symbol: "mountain"
  },
  {
    id: "32",
    name: "Bắc Ninh",
    slug: "bac-ninh",
    region: "bac",
    tagline: "Dân ca Quan họ — Quai thao nón thúng",
    desc: "Sắc hồng đào trẩy hội đan xen xanh chàm đặc trưng của tà áo tứ thân Kinh Bắc. Họa tiết quai thao nón thúng cách điệu ở vai đầy thanh lịch.",
    primary: "#ff6b81",
    secondary: "#10ac84",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 52,
    mapY: 17,
    symbol: "lotus"
  },
  {
    id: "33",
    name: "Bình Định",
    slug: "binh-dinh",
    region: "trung",
    tagline: "Đất võ Tây Sơn — Tháp Chàm rêu phong",
    desc: "Sắc đỏ son võ thuật hào hùng kết hợp vàng ánh kim từ tháp cổ Chăm Pa kỳ vĩ, tôn vinh tinh thần kiên cường thượng võ vùng đất Bình Định.",
    primary: "#c0392b",
    secondary: "#d4ac0d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 64,
    mapY: 53,
    symbol: "tower"
  },
  {
    id: "34",
    name: "Lạng Sơn 2", // Replacing to ensure exact match of 34 unique entries: Lạng Sơn exists. Let's make 34: Lạng Sơn, Bắc Ninh, Bình Định, and Lâm Đồng is already there. Wait, let's verify if we have 34 unique. Let's name this one "Quảng Ngãi"
    name: "Quảng Ngãi",
    slug: "quang-ngai",
    region: "trung",
    tagline: "Núi Ấn Sông Trà — Đảo Lý Sơn",
    desc: "Tone xanh biển ngọc kết hợp màu xám bazan của đất đá Lý Sơn, họa tiết sóng dập dìu bao bọc đảo ngọc mang hơi thở khát vọng ngư dân bám biển.",
    primary: "#138086",
    secondary: "#534666",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 53,
    symbol: "sun"
  }
];

// --- DYNAMIC SVG JERSEY ENGINE ---
function generateJerseySVG(province, side = 'front', customName = 'VIETNAM', customNumber = '34', customColors = null) {
  const p = customColors ? { ...province, ...customColors } : province;
  const name = (customName || "VIETNAM").toUpperCase().substring(0, 16);
  const number = (customNumber || "34").substring(0, 2);
  
  // Custom Local Symbol Renderers based on key symbols
  let badgeSVG = '';
  if (p.symbol === 'dragon') {
    badgeSVG = `<path d="M100 83 C105 83, 108 85, 108 90 C108 95, 100 97, 100 100 C100 97, 92 95, 92 90 C92 85, 95 83, 100 83 Z" fill="${p.accent}" opacity="0.8"/>
                <path d="M96 90 Q100 86 104 90 Q100 94 96 90" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else if (p.symbol === 'tower') {
    badgeSVG = `<rect x="96" y="84" width="8" height="12" fill="${p.accent}" rx="1"/>
                <polygon points="94,84 100,78 106,84" fill="${p.secondary}"/>`;
  } else if (p.symbol === 'bridge') {
    badgeSVG = `<path d="M92 92 Q100 82 108 92" fill="none" stroke="${p.accent}" stroke-width="2"/>
                <line x1="100" y1="83" x2="100" y2="92" stroke="${p.accent}" stroke-width="1"/>`;
  } else if (p.symbol === 'anchor') {
    badgeSVG = `<line x1="100" y1="82" x2="100" y2="96" stroke="${p.accent}" stroke-width="2"/>
                <circle cx="100" cy="84" r="2" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
                <path d="M93 90 Q100 98 107 90" fill="none" stroke="${p.accent}" stroke-width="2"/>`;
  } else if (p.symbol === 'boat') {
    badgeSVG = `<path d="M92 90 L108 90 L104 96 L96 96 Z" fill="${p.accent}"/>
                <line x1="100" y1="82" x2="100" y2="90" stroke="${p.accent}" stroke-width="1.5"/>`;
  } else if (p.symbol === 'lotus') {
    badgeSVG = `<path d="M100 82 C103 85, 106 90, 100 97 C94 90, 97 85, 100 82 Z" fill="${p.accent}"/>
                <path d="M100 85 C97 88, 93 92, 100 97 C107 92, 103 88, 100 85 Z" fill="${p.secondary}" opacity="0.6"/>`;
  } else if (p.symbol === 'mountain') {
    badgeSVG = `<polygon points="100,81 92,96 108,96" fill="${p.accent}"/>
                <polygon points="100,85 95,96 105,96" fill="${p.primary}" opacity="0.7"/>`;
  } else if (p.symbol === 'leaf') {
    badgeSVG = `<path d="M95 90 Q100 80 105 90 Q100 97 95 90 Z" fill="${p.accent}"/>
                <path d="M100 83 L100 94" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else { // 'sun' or default 'star'
    badgeSVG = `<polygon points="100,80 103,86 110,86 105,90 107,96 100,92 93,96 95,90 90,86 97,86" fill="${p.accent}"/>`;
  }

  // Generate SVG code
  let svg = `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" class="jersey-svg">
    <defs>
      <!-- Shadow Filter -->
      <filter id="j-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
      
      <!-- Pattern overlays -->
      <pattern id="pat-scales-${p.id}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,10 Q5,0 10,10 T20,10 Q15,20 10,20 T0,20 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.25"/>
      </pattern>
      <pattern id="pat-stripes-${p.id}" width="16" height="16" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="16" stroke="${p.secondary}" stroke-width="3" opacity="0.25"/>
      </pattern>
      <pattern id="pat-waves-${p.id}" width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0,6 Q6,1 12,6 T24,6" fill="none" stroke="${p.secondary}" stroke-width="1.5" opacity="0.25"/>
      </pattern>
      <pattern id="pat-coffee-${p.id}" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M15,5 L19,13 L28,13 L21,19 L24,27 L15,22 L6,27 L9,19 L2,13 L11,13 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.2"/>
      </pattern>
      <pattern id="pat-mesh-${p.id}" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.2" fill="${p.secondary}" opacity="0.25"/>
      </pattern>
    </defs>
    
    <g filter="url(#j-shadow)">
  `;

  if (side === 'front') {
    // --- FRONT SIDE VIEW ---
    svg += `
      <!-- Left Sleeve -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/> <!-- Left cuff -->
      
      <!-- Right Sleeve -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/> <!-- Right cuff -->

      <!-- Main Body -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Collar -->
      <path d="M 80 30 Q 100 52 120 30 L 118 33 Q 100 53 82 33 Z" fill="${p.secondary}"/>
      <path d="M 98 48 L 102 48 L 100 52 Z" fill="${p.accent}"/>

      <!-- Brand Logo (Right Chest) -->
      <g transform="translate(72, 85) scale(0.06)">
        <polygon points="10,40 40,10 70,40 60,50 40,30 20,50" fill="${p.accent}" opacity="0.85"/>
        <polygon points="10,65 40,35 70,65 60,75 40,55 20,75" fill="${p.accent}" opacity="0.85"/>
      </g>
      
      <!-- Custom Emblem / Badge (Left Chest) -->
      <g transform="translate(18, 2)">
        ${badgeSVG}
      </g>
      
      <!-- Center Sponsor / Custom Name Text -->
      <text x="100" y="130" font-family="'Outfit', sans-serif" font-weight="900" font-size="11" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.85">
        ${p.name.toUpperCase()}
      </text>
      
      <!-- Technical lines/decorations -->
      <line x1="85" y1="138" x2="115" y2="138" stroke="${p.secondary}" stroke-width="1.5" opacity="0.6"/>
      <circle cx="100" cy="180" r="15" fill="none" stroke="${p.secondary}" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.25"/>
      <text x="100" y="184" font-family="'Outfit', sans-serif" font-weight="800" font-size="10" fill="${p.secondary}" text-anchor="middle" opacity="0.3">${p.id}</text>
    `;
  } else {
    // --- BACK SIDE VIEW ---
    svg += `
      <!-- Left Sleeve (Back view flips side) -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/>
      
      <!-- Right Sleeve (Back view flips side) -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/>

      <!-- Main Body -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Back Neck Trim -->
      <path d="M 80 30 Q 100 35 120 30 L 118 33 Q 100 38 82 33 Z" fill="${p.secondary}"/>

      <!-- Custom Player Name curved path / straight -->
      <text x="100" y="75" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.9">
        ${name}
      </text>
      
      <!-- Custom Player Number -->
      <text x="100" y="145" font-family="'Outfit', sans-serif" font-weight="900" font-size="62" fill="${p.accent}" text-anchor="middle" letter-spacing="-1">
        ${number}
      </text>
      
      <!-- VN 34 Campaign Emblem at Back Neck -->
      <g transform="translate(95, 42) scale(0.2)" opacity="0.7">
        <polygon points="25,0 50,20 50,50 0,50 0,20" fill="${p.secondary}"/>
        <text x="25" y="38" font-family="'Outfit', sans-serif" font-weight="800" font-size="20" fill="${p.primary}" text-anchor="middle">34</text>
      </g>
    `;
  }

  svg += `
    </g>
  </svg>
  `;
  return svg;
}

// --- STATE MANAGEMENT ---
const state = {
  activeRegion: 'all',
  searchQuery: '',
  activeMapProvince: PROVINCES_DATA.find(p => p.slug === 'ca-mau'), // Default map province
  customizerProvince: PROVINCES_DATA[0],
  customizerName: 'VIETNAM',
  customizerNumber: '34',
  customizerSide: 'front'
};

// --- DOM ELEMENTS ---
let mapInfoPanel, mapPlaceholder, mapDetailView;
let collectionGrid;
let searchInput;
let filterTabs;
let customizerPreview, customizerForm;
let detailModal;

// --- INITIALIZER ---
document.addEventListener("DOMContentLoaded", () => {
  // Bind Nav Transition on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Init Elements
  mapInfoPanel = document.getElementById("map-info-panel");
  mapPlaceholder = document.getElementById("map-placeholder");
  mapDetailView = document.getElementById("map-detail-view");
  collectionGrid = document.getElementById("collection-grid");
  searchInput = document.getElementById("search-input");
  filterTabs = document.querySelectorAll(".filter-tab");
  customizerPreview = document.getElementById("customizer-preview");
  customizerForm = document.getElementById("customizer-form");
  detailModal = document.getElementById("detail-modal");

  // Load Engines
  initInteractiveMap();
  initCollectionGrid();
  initSearchFilter();
  initCustomizer();
  initShowcaseMarquee();
  initProductTech();
  initScrollAnimations();
  
  // Load engaging features
  initCustomCursor();
  initTactileAudio();
  initCardTiltEffect();
  initConfettiBurst();
  
  // Load Default Map Province View
  selectMapProvince(state.activeMapProvince.slug);
});

// --- INTERACTIVE MAP ENGINE ---
function initInteractiveMap() {
  const mapSvg = document.getElementById("vietnam-svg");
  if (!mapSvg) return;

  // Render glowing hotspots on map based on coordinates
  PROVINCES_DATA.forEach(p => {
    const hotspotG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    hotspotG.setAttribute("class", `map-hotspot hotspot-${p.slug}`);
    hotspotG.setAttribute("transform", `translate(${p.mapX}, ${p.mapY})`);
    hotspotG.setAttribute("data-slug", p.slug);

    // Glowing wave ring
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.setAttribute("cx", "0");
    ring.setAttribute("cy", "0");
    ring.setAttribute("r", "5");
    ring.setAttribute("class", "hotspot-ring");

    // Animate SVG geometry itself so the wave always expands from cx/cy,
    // instead of using CSS transforms that can resolve against the SVG viewport.
    const ringRadius = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    ringRadius.setAttribute("attributeName", "r");
    ringRadius.setAttribute("values", "5;14");
    ringRadius.setAttribute("dur", "2s");
    ringRadius.setAttribute("repeatCount", "indefinite");
    ringRadius.setAttribute("calcMode", "spline");
    ringRadius.setAttribute("keyTimes", "0;1");
    ringRadius.setAttribute("keySplines", "0.16 1 0.3 1");
    const ringOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    ringOpacity.setAttribute("attributeName", "opacity");
    ringOpacity.setAttribute("values", "0.9;0");
    ringOpacity.setAttribute("dur", "2s");
    ringOpacity.setAttribute("repeatCount", "indefinite");
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ring.appendChild(ringRadius);
      ring.appendChild(ringOpacity);
    }
    
    // Core dot
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", "0");
    dot.setAttribute("cy", "0");
    dot.setAttribute("r", "4");
    dot.setAttribute("class", "hotspot-dot");

    hotspotG.appendChild(ring);
    hotspotG.appendChild(dot);
    mapSvg.appendChild(hotspotG);

    // Click Event
    hotspotG.addEventListener("click", () => {
      selectMapProvince(p.slug);
    });
  });
}

function selectMapProvince(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province) return;

  state.activeMapProvince = province;

  // Toggle map markers active state
  document.querySelectorAll(".map-hotspot").forEach(el => {
    el.classList.remove("active");
  });
  const activeMarker = document.querySelector(`.map-hotspot[data-slug="${slug}"]`);
  if (activeMarker) activeMarker.classList.add("active");

  // Show detailed panel info
  if (mapPlaceholder) mapPlaceholder.style.display = "none";
  if (mapDetailView) {
    mapDetailView.innerHTML = `
      <div class="province-meta">
        <span class="province-num">VN / ${province.id}</span>
        <span class="province-reg">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h3 class="province-title">${province.name}</h3>
      <div class="province-concept">${province.tagline}</div>
      <p class="province-desc">${province.desc}</p>
      
      <div class="province-preview-box">
        <div class="province-mini-jersey">
          ${generateJerseySVG(province, 'front')}
        </div>
        <ul class="province-specs">
          <li>
            <span>Chủ đạo</span>
            <span style="color: ${province.primary}; font-weight: 700;">■ ${province.primary}</span>
          </li>
          <li>
            <span>Phối hợp</span>
            <span style="color: ${province.secondary}; font-weight: 700;">■ ${province.secondary}</span>
          </li>
          <li>
            <span>Chi tiết</span>
            <span style="color: ${province.accent}; font-weight: 700;">■ ${province.accent}</span>
          </li>
          <li>
            <span>Biểu tượng</span>
            <span style="text-transform: capitalize;">${province.symbol}</span>
          </li>
        </ul>
      </div>
      
      <button class="btn-primary" onclick="openDetailsModal('${province.slug}')">XEM THIẾT KẾ CHI TIẾT</button>
    `;
    mapDetailView.classList.add("active");
  }
}

// --- 34 PROVINCE GRID GALLERY ENGINE ---
function initCollectionGrid() {
  renderGrid(PROVINCES_DATA);
}

function renderGrid(data) {
  if (!collectionGrid) return;
  collectionGrid.innerHTML = "";

  if (data.length === 0) {
    collectionGrid.innerHTML = `
      <div class="no-results">
        <h3>Không tìm thấy tỉnh thành nào phù hợp</h3>
        <p>Vui lòng thử tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card-perspective reveal";
    card.setAttribute("data-slug", p.slug);
    card.setAttribute("data-region", p.region);
    card.innerHTML = `
      <div class="card-inner">
        <!-- Front of the Card -->
        <div class="card-front">
          <div class="card-top">
            <span class="card-num">VN / ${p.id}</span>
            <span class="card-region">${p.region === 'bac' ? 'MIỀN BẮC' : p.region === 'trung' ? 'MIỀN TRUNG' : 'MIỀN NAM'}</span>
          </div>
          <div class="card-jersey-area">
            ${generateJerseySVG(p, 'front')}
          </div>
          <div class="card-bottom">
            <h3 class="card-title">${p.name}</h3>
            <span class="card-concept">${p.tagline}</span>
          </div>
        </div>
        
        <!-- Back of the Card -->
        <div class="card-back">
          <div class="card-back-content">
            <div>
              <h3 class="card-back-title">${p.name}</h3>
              <p class="card-back-desc">${p.desc.substring(0, 100)}...</p>
              
              <div class="card-back-specs">
                <div class="card-back-spec">
                  <span>Thiết kế:</span>
                  <span>Chính hãng</span>
                </div>
                <div class="card-back-spec">
                  <span>Chất liệu:</span>
                  <span>Cool-Air Mesh</span>
                </div>
                <div class="card-back-spec">
                  <span>Form dáng:</span>
                  <span>Athletic Fit</span>
                </div>
              </div>
            </div>
            
            <button class="card-cta" onclick="openDetailsModal('${p.slug}')">
              XEM THIẾT KẾ
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    collectionGrid.appendChild(card);
    
    // Trigger immediate animation frame update
    setTimeout(() => {
      card.classList.add("active");
    }, 50);
  });

  // Re-bind tilt effects
  if (typeof initCardTiltEffect === 'function') {
    initCardTiltEffect();
  }
}

// --- SEARCH & FILTER CONTROLLER ---
function initSearchFilter() {
  if (!searchInput) return;

  // Search Input listener
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilter();
  });

  // Region Filter Tabs listener
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeRegion = tab.getAttribute("data-filter");
      applyFilter();
    });
  });
}

function applyFilter() {
  const filtered = PROVINCES_DATA.filter(p => {
    const matchesRegion = state.activeRegion === 'all' || p.region === state.activeRegion;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || 
                          p.tagline.toLowerCase().includes(state.searchQuery) ||
                          p.desc.toLowerCase().includes(state.searchQuery) ||
                          p.id.includes(state.searchQuery);
    return matchesRegion && matchesSearch;
  });
  renderGrid(filtered);
}

// --- JERSEY CUSTOMIZER PLAYGROUND ENGINE ---
function initCustomizer() {
  const selectProv = document.getElementById("cust-province");
  const inputName = document.getElementById("cust-name");
  const inputNum = document.getElementById("cust-number");
  const viewBtns = document.querySelectorAll(".view-btn");
  
  const pickerPrimary = document.getElementById("cust-color-primary");
  const pickerSecondary = document.getElementById("cust-color-secondary");
  const pickerAccent = document.getElementById("cust-color-accent");

  if (!selectProv || !customizerPreview) return;

  // Populate province options
  PROVINCES_DATA.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.slug;
    opt.textContent = `${p.id} - ${p.name}`;
    selectProv.appendChild(opt);
  });

  // Form listeners
  selectProv.addEventListener("change", (e) => {
    state.customizerProvince = PROVINCES_DATA.find(p => p.slug === e.target.value);
    
    // Sync color pickers with new province default colors
    if (pickerPrimary) pickerPrimary.value = state.customizerProvince.primary;
    if (pickerSecondary) pickerSecondary.value = state.customizerProvince.secondary;
    if (pickerAccent) pickerAccent.value = state.customizerProvince.accent;

    updateCustomizerPreview();
  });

  inputName.addEventListener("input", (e) => {
    state.customizerName = e.target.value;
    updateCustomizerPreview();
  });

  inputNum.addEventListener("input", (e) => {
    state.customizerNumber = e.target.value;
    updateCustomizerPreview();
  });

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      viewBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.customizerSide = btn.getAttribute("data-view");
      updateCustomizerPreview();
    });
  });

  if (pickerPrimary) pickerPrimary.addEventListener("input", updateCustomizerPreview);
  if (pickerSecondary) pickerSecondary.addEventListener("input", updateCustomizerPreview);
  if (pickerAccent) pickerAccent.addEventListener("input", updateCustomizerPreview);

  // Set initial picker values
  if (pickerPrimary) pickerPrimary.value = state.customizerProvince.primary;
  if (pickerSecondary) pickerSecondary.value = state.customizerProvince.secondary;
  if (pickerAccent) pickerAccent.value = state.customizerProvince.accent;

  // Initial load
  updateCustomizerPreview();
}

function updateCustomizerPreview() {
  if (!customizerPreview) return;

  const pickerPrimary = document.getElementById("cust-color-primary");
  const pickerSecondary = document.getElementById("cust-color-secondary");
  const pickerAccent = document.getElementById("cust-color-accent");

  const customColors = {
    primary: pickerPrimary ? pickerPrimary.value : state.customizerProvince.primary,
    secondary: pickerSecondary ? pickerSecondary.value : state.customizerProvince.secondary,
    accent: pickerAccent ? pickerAccent.value : state.customizerProvince.accent
  };

  const svgMarkup = generateJerseySVG(
    state.customizerProvince,
    state.customizerSide,
    state.customizerName,
    state.customizerNumber,
    customColors
  );
  customizerPreview.innerHTML = svgMarkup;
}

// --- PRODUCT DETAILS MODAL ---
window.openDetailsModal = function(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province || !detailModal) return;

  const modalContainer = detailModal.querySelector(".modal-content");
  modalContainer.innerHTML = `
    <button class="modal-close" onclick="closeDetailsModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="modal-visual">
      ${generateJerseySVG(province, 'front')}
    </div>
    <div class="modal-info">
      <div class="modal-meta">
        <span class="modal-num">VN / COLLECTION ${province.id}</span>
        <span class="modal-region">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h2 class="modal-title">${province.name}</h2>
      <div class="modal-concept">${province.tagline}</div>
      <p class="modal-desc">${province.desc}</p>
      
      <ul class="modal-specs">
        <li>
          <span>Chất liệu vải</span>
          <span>Cool-Air Mesh / Polyester 100%</span>
        </li>
        <li>
          <span>Công nghệ in</span>
          <span>Sublimation Print (In chuyển nhiệt 3D)</span>
        </li>
        <li>
          <span>Form dáng</span>
          <span>Athletic Fit / Thể thao năng động</span>
        </li>
        <li>
          <span>Mã sản phẩm</span>
          <span>VTN-${province.id}</span>
        </li>
      </ul>
      
      <div class="modal-action-box">
        <button class="btn-primary" onclick="orderJersey('${province.name}')">ĐẶT MUA NGAY</button>
        <button class="btn-secondary" onclick="loadInCustomizer('${province.slug}')">TỰ THIẾT KẾ</button>
      </div>
    </div>
  `;

  detailModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll
};

window.closeDetailsModal = function() {
  if (!detailModal) return;
  detailModal.classList.remove("active");
  document.body.style.overflow = ""; // Enable scroll
};

window.loadInCustomizer = function(slug) {
  closeDetailsModal();
  const selectProv = document.getElementById("cust-province");
  if (selectProv) {
    selectProv.value = slug;
    selectProv.dispatchEvent(new Event('change'));
    // Smooth scroll to customizer section
    document.getElementById("personalization").scrollIntoView({ behavior: 'smooth' });
  }
};

window.orderJersey = function(provName) {
  alert(`Cảm ơn bạn đã quan tâm! Bộ phận hỗ trợ đặt áo cho tỉnh thành [${provName}] sẽ liên hệ với bạn trong giây lát.`);
};

// --- SHOWCASE MARQUEE COMPONENT ---
function initShowcaseMarquee() {
  const marquee = document.getElementById("marquee-content");
  if (!marquee) return;

  // Clear original
  marquee.innerHTML = "";

  // Render all 34 jerseys inside marquee
  PROVINCES_DATA.forEach(p => {
    const item = document.createElement("div");
    item.className = "marquee-item";
    item.innerHTML = `
      ${generateJerseySVG(p, 'front')}
      <div>
        <h4 class="marquee-name">${p.name}</h4>
        <span class="marquee-region">${p.region === 'bac' ? 'Kinh Bắc' : p.region === 'trung' ? 'Trung Bộ' : 'Nam Bộ'}</span>
      </div>
    `;
    // Click action inside marquee opens details modal
    item.addEventListener("click", () => {
      openDetailsModal(p.slug);
    });
    marquee.appendChild(item);
  });

  // Duplicate the children to make scrolling continuous
  const cloned = marquee.cloneNode(true);
  cloned.id = "marquee-content-clone";
  marquee.parentNode.appendChild(cloned);
}

// --- PRODUCT TECHNOLOGY HOTSPOTS ---
function initProductTech() {
  const hotspots = document.querySelectorAll(".tech-hotspot");
  const cards = document.querySelectorAll(".tech-card");

  if (hotspots.length === 0) return;

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", () => {
      const point = hotspot.getAttribute("data-point");
      
      // Active states for hotspots
      hotspots.forEach(h => h.classList.remove("active"));
      hotspot.classList.add("active");

      // Active states for descriptions
      cards.forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-point") === point) {
          card.classList.add("active");
          // Smooth scroll inside details box if needed
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const point = card.getAttribute("data-point");

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      hotspots.forEach(h => {
        h.classList.remove("active");
        if (h.getAttribute("data-point") === point) {
          h.classList.add("active");
        }
      });
    });
  });
}

// --- SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// --- PREMIUM CUSTOM CURSOR INTERACTION ---
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");
  if (!cursor || !cursorDot) return;

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorDot.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorDot.style.opacity = "0";
  });

  const updateHoverElements = () => {
    const hoverTargets = document.querySelectorAll("a, button, select, input, .map-hotspot, .card-perspective, .tech-card, .marquee-item, .view-btn");
    hoverTargets.forEach(el => {
      el.removeEventListener("mouseenter", addHoverClass);
      el.removeEventListener("mouseleave", removeHoverClass);
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });
  };

  function addHoverClass() {
    cursor.classList.add("hovering");
    cursorDot.classList.add("hovering");
    playTactileSound('hover');
  }

  function removeHoverClass() {
    cursor.classList.remove("hovering");
    cursorDot.classList.remove("hovering");
  }

  const observer = new MutationObserver(() => {
    updateHoverElements();
  });
  const grid = document.getElementById("collection-grid");
  if (grid) {
    observer.observe(grid, { childList: true });
  }

  updateHoverElements();
}

// --- SYNTHESIZED TACTILE SOUND ENGINE ---
let audioCtx = null;
let isSoundMuted = true;

function initTactileAudio() {
  const toggleBtn = document.getElementById("sound-toggle");
  const icon = document.getElementById("sound-icon");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    isSoundMuted = !isSoundMuted;
    if (isSoundMuted) {
      if (icon) icon.textContent = "🔇";
      toggleBtn.style.color = "var(--color-muted)";
      toggleBtn.style.borderColor = "var(--color-light-gray)";
    } else {
      if (icon) icon.textContent = "🔊";
      toggleBtn.style.color = "var(--color-vietnam-gold)";
      toggleBtn.style.borderColor = "var(--color-vietnam-gold)";
      
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playTactileSound('success');
    }
  });

  // Bind inputs
  setTimeout(() => {
    const inputs = document.querySelectorAll("#cust-name, #cust-number, #cust-province, .view-btn, input[type='color']");
    inputs.forEach(input => {
      input.addEventListener("input", () => playTactileSound('click'));
      input.addEventListener("change", () => playTactileSound('click'));
    });
  }, 100);
}

function playTactileSound(type = 'click') {
  if (isSoundMuted || !audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'hover') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.02);
    
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
    
    osc.start(now);
    osc.stop(now + 0.02);
  } else if (type === 'click') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.05);

    gainNode.gain.setValueAtTime(0.05, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    
    gainNode.gain.setValueAtTime(0.04, now);
    gainNode.gain.setValueAtTime(0.04, now + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

// --- 3D PERSPECTIVE TILT ---
function initCardTiltEffect() {
  const cards = document.querySelectorAll(".card-perspective");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;

      const xc = (x / width) - 0.5;
      const yc = (y / height) - 0.5;

      const rotateY = xc * 16;
      const rotateX = -yc * 16;

      card.classList.add("tilting");
      // Appends tilt offset to the 180deg card flip
      cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${180 - rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      card.classList.remove("tilting");
      cardInner.style.transform = "";
    });
  });
}

// --- CONFETTI EMITTER BURST ---
function initConfettiBurst() {
  const submitBtn = document.querySelector("#customizer-form .btn-primary");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    // Play Victory Sound
    playTactileSound('success');

    const rect = submitBtn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const colors = ['#da251d', '#ffbe00', '#ffffff', '#00f0ff', '#ff007f', '#2ecc71'];

    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "confetti-particle";
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 80 + Math.random() * 120;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 40;
      const rot = 180 + Math.random() * 360;

      p.style.setProperty("--tx", tx + "px");
      p.style.setProperty("--ty", ty + "px");
      p.style.setProperty("--rot", rot + "deg");

      p.style.left = startX + "px";
      p.style.top = startY + "px";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 8;
      p.style.width = size + "px";
      p.style.height = size + "px";
      
      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 1200);
    }
  });
}

// --- VN/34 FUSION EXPERIENCE: journey progress + province personality match ---
document.addEventListener('DOMContentLoaded', () => {
  const fusionProgress = document.querySelector('.fusion-progress i');
  const updateFusionProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fusionProgress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateFusionProgress, { passive: true });
  updateFusionProgress();

  const modal = document.getElementById('fusion-match');
  const openButton = document.getElementById('fusion-match-open');
  const closeButton = modal.querySelector('.fusion-match-close');
  const jerseySlot = document.getElementById('fusion-match-jersey');
  const resultName = document.getElementById('fusion-result-name');
  const resultCopy = document.getElementById('fusion-result-copy');
  const resultView = document.getElementById('fusion-result-view');
  let selectedProvince = PROVINCES_DATA[0];
  let folkRound = 0;
  let currentHomeNode = 'root';
  let preferenceScores = {};
  let journeyChoices = [];

  const HOME_QUESTIONS = [
    { question: 'QUÊ BẠN THUỘC MIỀN NÀO?', hint: 'Câu đầu tiên giúp khoanh vùng bản đồ.', options: [
      { text: 'Miền Bắc', label: 'BẮC BỘ', region: 'bac' }, { text: 'Miền Trung', label: 'TRUNG BỘ', region: 'trung' }, { text: 'Miền Nam', label: 'NAM BỘ', region: 'nam' }, { text: 'Mình không chắc', label: 'ĐỂ HỆ THỐNG TỰ ĐOÁN' }
    ]},
    { question: 'CẢNH NÀO GẦN VỚI TUỔI THƠ BẠN?', hint: 'Hãy chọn hình ảnh quen thuộc nhất khi nghĩ về quê nhà.', options: [
      { text: 'Núi cao, đèo dốc và sương', label: 'MIỀN SƠN CƯỚC', keywords: ['núi','cao nguyên','đỉnh','đèo','biên cương','sơn'] },
      { text: 'Biển rộng, đảo và những con sóng', label: 'MIỀN DUYÊN HẢI', keywords: ['biển','vịnh','đảo','cảng','sóng','hải'] },
      { text: 'Sông nước, ruộng đồng và phù sa', label: 'MIỀN ĐỒNG BẰNG', keywords: ['sông','phù sa','lúa','gạo','đồng bằng','miệt vườn'] },
      { text: 'Phố xá, ánh đèn và nhịp sống nhanh', label: 'MIỀN ĐÔ THỊ', keywords: ['đô thị','thành phố','hiện đại','công nghiệp','chuyển động'] }
    ]},
    { question: 'BIỂU TƯỢNG NÀO KHIẾN BẠN NHỚ QUÊ?', hint: 'Một hình ảnh nhỏ đôi khi giữ cả miền ký ức.', options: [
      { text: 'Thành quách, đền chùa, phố cổ', label: 'DI SẢN', keywords: ['di sản','kinh đô','thăng long','phố cổ','hoàng triều','chùa'] },
      { text: 'Cầu, bến cảng và cửa biển', label: 'GIAO THƯƠNG', keywords: ['cầu','cảng','bến','biển','tàu','neo'] },
      { text: 'Hoa trái, rừng cây và đồng ruộng', label: 'THIÊN NHIÊN', keywords: ['rừng','hoa','trái','lúa','nông','cây','sen'] },
      { text: 'Chợ, phố và những ánh đèn đêm', label: 'NHỊP SỐNG', keywords: ['chợ','phố','đô thị','đêm','neon','thành phố'] }
    ]},
    { question: 'KHÍ CHẤT NGƯỜI QUÊ BẠN RA SAO?', hint: 'Chọn điều bạn thường tự hào khi nhắc đến người quê mình.', options: [
      { text: 'Thanh lịch, sâu sắc và trọng truyền thống', label: 'THANH LỊCH', keywords: ['thanh lịch','di sản','văn hiến','truyền thống','kinh kỳ'] },
      { text: 'Mạnh mẽ, bền bỉ và không ngại thử thách', label: 'KIÊN CƯỜNG', keywords: ['mạnh mẽ','hào khí','kiên cường','võ','khát vọng'] },
      { text: 'Cởi mở, phóng khoáng và hào sảng', label: 'HÀO SẢNG', keywords: ['phóng khoáng','cởi mở','hào sảng','năng động'] },
      { text: 'Mộc mạc, nghĩa tình và gần gũi', label: 'NGHĨA TÌNH', keywords: ['mộc mạc','nghĩa tình','phù sa','sông nước','quê'] }
    ]},
    { question: 'NHỊP QUÊ NÀO GIỐNG NƠI BẠN LỚN LÊN?', hint: 'Câu cuối cùng để hệ thống hoàn tất dự đoán.', options: [
      { text: 'Se lạnh, chậm rãi và nhiều lớp ký ức', label: 'TRẦM MẶC', keywords: ['sương','lạnh','cổ','di sản','núi'] },
      { text: 'Nắng gió, rắn rỏi và giàu sức sống', label: 'NẮNG GIÓ', keywords: ['nắng','gió','biển','cát','võ'] },
      { text: 'Êm đềm, xanh mát và theo nhịp con nước', label: 'ÊM ĐỀM', keywords: ['sông','nước','xanh','phù sa','vườn'] },
      { text: 'Sôi động, thức khuya và luôn chuyển mình', label: 'SÔI ĐỘNG', keywords: ['đô thị','đêm','hiện đại','chuyển động','công nghiệp'] }
    ]}
  ];

  const provinceText = province => `${province.name} ${province.tagline} ${province.desc} ${province.pattern} ${province.symbol}`.toLowerCase();

  // Adaptive decision tree. Every terminal answer maps to exactly one province.
  const HOME_TREE = {
    root: { question: 'QUÊ BẠN NẰM Ở VÙNG NÀO?', hint: 'Chọn vùng địa lý gần nhất với nơi bạn sinh ra hoặc lớn lên.', choices: [
      { text: 'Phía Bắc — nơi có mùa đông và những lớp di sản lâu đời', label: 'MIỀN BẮC', next: 'north_group' },
      { text: 'Dải miền Trung — nắng gió, di sản và đường bờ biển dài', label: 'MIỀN TRUNG', next: 'central_group' },
      { text: 'Phương Nam — phù sa, miệt vườn và nhịp sống hào sảng', label: 'MIỀN NAM', next: 'south_group' },
      { text: 'Cao nguyên — đất đỏ, rừng thông, cà phê và đại ngàn', label: 'TÂY NGUYÊN', next: 'highland_leaf' }
    ]},
    north_group: { question: 'KÝ ỨC BẮC BỘ NÀO GẦN QUÊ BẠN?', hint: 'Lựa chọn này sẽ mở đúng nhóm địa phương liên quan.', choices: [
      { text: 'Kinh kỳ, quan họ, cố đô và những lớp văn hóa cổ', label: 'VÙNG DI SẢN', next: 'north_culture' },
      { text: 'Cảng biển, vịnh đá, cánh đồng ven biển và nhà thờ cổ', label: 'VÙNG DUYÊN HẢI', next: 'north_coast' },
      { text: 'Đá tai mèo, ruộng bậc thang, thác lớn và núi biên cương', label: 'VÙNG NÚI PHÍA BẮC', next: 'north_mountain' },
      { text: 'Non nước đá vôi, sông Mã và miền chuyển tiếp Bắc–Trung', label: 'VÙNG CỬA NGÕ', next: 'north_gateway' }
    ]},
    north_culture: { question: 'BIỂU TƯỢNG NÀO LÀ QUÊ BẠN?', hint: 'Mỗi lựa chọn chỉ thuộc về một địa phương.', choices: [
      { text: 'Hồ Gươm, cầu Thê Húc và ba mươi sáu phố phường', label: 'NGHÌN NĂM VĂN HIẾN', result: 'ha-noi' },
      { text: 'Dân ca quan họ, áo tứ thân và miền Kinh Bắc', label: 'LIỀN ANH LIỀN CHỊ', result: 'bac-ninh' },
      { text: 'Tràng An, Tam Cốc và núi đá vôi soi bóng sông', label: 'NON NƯỚC TRÀNG AN', result: 'ninh-binh' },
      { text: 'Thành Nhà Hồ, trống đồng Đông Sơn và dòng sông Mã', label: 'ĐỊA LINH XỨ THANH', result: 'thanh-hoa' }
    ]},
    north_coast: { question: 'HÌNH ẢNH NÀO THUỘC QUÊ BẠN?', hint: 'Chọn ký ức địa phương rõ nhất.', choices: [
      { text: 'Hoa phượng đỏ, bến cảng và dòng Tam Bạc', label: 'THÀNH PHỐ CẢNG', result: 'hai-phong' },
      { text: 'Vịnh Hạ Long, than đá và những đảo đá giữa biển', label: 'KỲ QUAN VỊNH RỒNG', result: 'quang-ninh' },
      { text: 'Cánh đồng lúa, bánh cáy và chùa Keo cổ kính', label: 'QUÊ LÚA', result: 'thai-binh' },
      { text: 'Tháp Phổ Minh, nhà thờ và tiếng sóng vùng cửa biển', label: 'ĐẤT HỌC THÀNH NAM', result: 'nam-dinh' }
    ]},
    north_mountain: { question: 'DẤU ẤN NÀO LÀ QUÊ BẠN?', hint: 'Bốn biểu tượng của bốn miền biên cương khác nhau.', choices: [
      { text: 'Cột cờ Lũng Cú, cao nguyên đá và hoa tam giác mạch', label: 'MIỀN ĐÁ NỞ HOA', result: 'ha-giang' },
      { text: 'Fansipan, Sa Pa và ruộng bậc thang trong mây', label: 'NƠI GẶP GỠ ĐẤT TRỜI', result: 'lao-cai' },
      { text: 'Thác Bản Giốc, động Ngườm Ngao và miền non nước xanh', label: 'NON NƯỚC BIÊN CƯƠNG', result: 'cao-bang' },
      { text: 'Phố Kỳ Lừa, nàng Tô Thị và chùa Tam Thanh', label: 'XỨ LẠNG', result: 'lang-son' }
    ]},
    north_gateway: { question: 'ĐỊA DANH NÀO KÉO BẠN VỀ QUÊ?', hint: 'Hai miền cửa ngõ với hai bản sắc rất riêng.', choices: [
      { text: 'Tràng An, cố đô Hoa Lư và những dòng sông xuyên núi', label: 'NINH BÌNH', result: 'ninh-binh' },
      { text: 'Sông Mã, Lam Sơn và những lớp trầm tích Đông Sơn', label: 'THANH HÓA', result: 'thanh-hoa' },
      { text: 'Chùa Keo, đồng lúa và vị ngọt của bánh cáy', label: 'THÁI BÌNH', result: 'thai-binh' },
      { text: 'Phố Hiến xưa, nhãn lồng và bãi bồi sông Hồng', label: 'GẦN PHỐ HIẾN', result: 'nam-dinh' }
    ]},
    central_group: { question: 'MIỀN TRUNG TRONG BẠN CÓ HÌNH DÁNG NÀO?', hint: 'Chọn cụm ký ức gần với quê bạn nhất.', choices: [
      { text: 'Kinh thành, phố cổ, thành lũy và văn hóa lâu đời', label: 'MIỀN DI SẢN', next: 'central_heritage' },
      { text: 'Thành phố biển, vịnh xanh, ghềnh đá và võ đường', label: 'MIỀN DUYÊN HẢI', next: 'central_coast' },
      { text: 'Ví giặm, gió Lào và những miền đất nhiều thử thách', label: 'BẮC TRUNG BỘ', next: 'central_north' },
      { text: 'Đồi cát, thanh long và dải biển nhiều nắng nhất', label: 'CỰC NAM TRUNG BỘ', next: 'central_south' }
    ]},
    central_heritage: { question: 'DI SẢN NÀO GẮN VỚI QUÊ BẠN?', hint: 'Mỗi lựa chọn là một căn cước địa phương.', choices: [
      { text: 'Kinh thành, sông Hương, núi Ngự và nón bài thơ', label: 'XỨ HUẾ', result: 'hue' },
      { text: 'Phố cổ Hội An, thánh địa Mỹ Sơn và rượu Hồng Đào', label: 'ĐẤT QUẢNG', result: 'quang-nam' },
      { text: 'Vĩ tuyến 17, cầu Hiền Lương và dòng Bến Hải', label: 'ĐẤT LỬA', result: 'quang-tri' },
      { text: 'Núi Ấn, sông Trà và đảo Lý Sơn giữa biển', label: 'NÚI ẤN SÔNG TRÀ', result: 'quang-ngai' }
    ]},
    central_coast: { question: 'ĐƯỜNG BỜ BIỂN NÀO LÀ QUÊ BẠN?', hint: 'Những biểu tượng không thể nhầm lẫn của duyên hải miền Trung.', choices: [
      { text: 'Cầu Rồng, sông Hàn và thành phố đáng sống', label: 'ĐÀ NẴNG', result: 'da-nang' },
      { text: 'Vịnh Nha Trang, trầm hương và tháp Bà Ponagar', label: 'XỨ TRẦM HƯƠNG', result: 'khanh-hoa' },
      { text: 'Gành Đá Đĩa, hoa vàng cỏ xanh và đầm Ô Loan', label: 'XỨ NẪU', result: 'phu-yen' },
      { text: 'Eo Gió, Kỳ Co và miền đất võ Tây Sơn', label: 'ĐẤT VÕ TRỜI VĂN', result: 'binh-dinh' }
    ]},
    central_north: { question: 'CÂU NÀO NHẮC ĐÚNG QUÊ BẠN?', hint: 'Nhận diện qua giọng nói, lịch sử và cảnh sắc.', choices: [
      { text: 'Ví giặm, quê Bác, núi Hồng và dòng Lam', label: 'XỨ NGHỆ', result: 'nghe-an' },
      { text: 'Cầu Hiền Lương, địa đạo Vịnh Mốc và đất lửa anh hùng', label: 'QUẢNG TRỊ', result: 'quang-tri' },
      { text: 'Sông Trà Khúc, núi Thiên Ấn và tỏi Lý Sơn', label: 'QUẢNG NGÃI', result: 'quang-ngai' },
      { text: 'Thành Nhà Hồ, biển Sầm Sơn và dòng sông Mã', label: 'XỨ THANH', result: 'thanh-hoa' }
    ]},
    central_south: { question: 'NẮNG GIÓ NÀO LÀ QUÊ BẠN?', hint: 'Chọn dấu hiệu bạn gặp thường xuyên nhất.', choices: [
      { text: 'Đồi cát bay, thanh long và tháp Chăm bên biển', label: 'MIỀN CÁT TRẮNG', result: 'binh-thuan' },
      { text: 'Gành Đá Đĩa và những bờ biển xanh như ngọc', label: 'PHÚ YÊN', result: 'phu-yen' },
      { text: 'Eo Gió, tháp Chăm và tiếng trống võ Tây Sơn', label: 'BÌNH ĐỊNH', result: 'binh-dinh' },
      { text: 'Vịnh biển, trầm hương và những hòn đảo đầy nắng', label: 'KHÁNH HÒA', result: 'khanh-hoa' }
    ]},
    highland_leaf: { question: 'CAO NGUYÊN NÀO LÀ QUÊ BẠN?', hint: 'Hai miền cao nguyên với hai nhịp sống rất khác.', choices: [
      { text: 'Rừng thông, sương lạnh, hoa và những đồi chè', label: 'THÀNH PHỐ NGÀN HOA', result: 'lam-dong' },
      { text: 'Cà phê, voi, cồng chiêng và sử thi đại ngàn', label: 'THỦ PHỦ CÀ PHÊ', result: 'dak-lak' },
      { text: 'Biển xanh và trầm hương — có lẽ bạn gần duyên hải hơn', label: 'VỀ DUYÊN HẢI', result: 'khanh-hoa' },
      { text: 'Nắng, cát và thanh long — có lẽ bạn ở phía đông cao nguyên', label: 'VỀ MIỀN CÁT', result: 'binh-thuan' }
    ]},
    south_group: { question: 'PHƯƠNG NAM TRONG BẠN LÀ KHUNG CẢNH NÀO?', hint: 'Chọn nhóm ký ức gần nhất với nơi bạn lớn lên.', choices: [
      { text: 'Đô thị lớn, khu công nghiệp, núi thiêng và biển nghỉ dưỡng', label: 'ĐÔNG NAM BỘ', next: 'south_urban' },
      { text: 'Chợ nổi, vườn cây, cù lao và những dòng sông phù sa', label: 'MIỀN SÔNG NƯỚC', next: 'south_mekong' },
      { text: 'Biển Tây, đảo ngọc, rừng ngập mặn và đất tận cùng', label: 'MIỀN BIỂN TÂY', next: 'south_coast' },
      { text: 'Núi Bà, hồ Dầu Tiếng và miền biên giới đầy nắng', label: 'MIỀN BIÊN GIỚI', next: 'south_border' }
    ]},
    south_urban: { question: 'BIỂU TƯỢNG ĐÔNG NAM BỘ NÀO LÀ QUÊ BẠN?', hint: 'Bốn nhịp sống, bốn căn cước khác nhau.', choices: [
      { text: 'Chợ Bến Thành, sông Sài Gòn và thành phố không ngủ', label: 'TP. HỒ CHÍ MINH', result: 'tp-hcm' },
      { text: 'Một dòng sông lớn, làng bưởi và những khu công nghiệp lâu đời', label: 'ĐỒNG NAI', result: 'dong-nai' },
      { text: 'Bãi Sau, ngọn hải đăng và những giàn khoan ngoài biển', label: 'VŨNG TÀU', result: 'vung-tau' },
      { text: 'Núi Bà Đen, bánh tráng phơi sương và hồ Dầu Tiếng', label: 'TÂY NINH', result: 'tay-ninh' }
    ]},
    south_mekong: { question: 'DÒNG SÔNG NÀO CHẢY QUA KÝ ỨC BẠN?', hint: 'Mỗi miền Tây có một dấu ấn rất riêng.', choices: [
      { text: 'Bến Ninh Kiều, chợ nổi Cái Răng và gạo trắng nước trong', label: 'TÂY ĐÔ', result: 'can-tho' },
      { text: 'Xứ dừa, những cù lao xanh và dòng Hàm Luông', label: 'XỨ DỪA', result: 'ben-tre' },
      { text: 'Chợ nổi Cái Bè, vú sữa Lò Rèn và sông Tiền', label: 'MIỀN TRÁI NGỌT', result: 'tien-giang' },
      { text: 'Núi Sam, rừng tràm Trà Sư và miền Thất Sơn', label: 'BẢY NÚI', result: 'an-giang' }
    ]},
    south_coast: { question: 'BIỂN PHƯƠNG NAM NÀO LÀ QUÊ BẠN?', hint: 'Chọn cảnh biển thân thuộc nhất.', choices: [
      { text: 'Mũi đất tận cùng, rừng đước và nơi đất nở về phương Nam', label: 'ĐẤT MŨI', result: 'ca-mau' },
      { text: 'Phú Quốc, Hà Tiên và hoàng hôn trên biển Tây', label: 'ĐẢO NGỌC', result: 'kien-giang' },
      { text: 'Bãi Sau, mũi Nghinh Phong và ngọn hải đăng', label: 'THÀNH PHỐ BIỂN', result: 'vung-tau' },
      { text: 'Sông Hậu, rừng tràm và mùa nước nổi', label: 'MIỀN THẤT SƠN', result: 'an-giang' }
    ]},
    south_border: { question: 'DẤU ẤN BIÊN GIỚI NÀO LÀ QUÊ BẠN?', hint: 'Chọn biểu tượng gần với tuổi thơ nhất.', choices: [
      { text: 'Núi Bà Đen và bánh tráng phơi sương', label: 'TÂY NINH', result: 'tay-ninh' },
      { text: 'Núi Sam, miếu Bà Chúa Xứ và rừng tràm Trà Sư', label: 'AN GIANG', result: 'an-giang' },
      { text: 'Hà Tiên, Phú Quốc và biển trời Tây Nam', label: 'KIÊN GIANG', result: 'kien-giang' },
      { text: 'Rừng đước, Đất Mũi và những con sông chảy ra biển', label: 'CÀ MAU', result: 'ca-mau' }
    ]}
  };

  const showStep = step => modal.querySelectorAll('.fusion-step').forEach(el => {
    el.classList.toggle('active', el.dataset.step === String(step));
  });
  const openMatcher = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    startFolkQuiz();
    showStep(1);
  };
  const closeMatcher = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  openButton.addEventListener('click', openMatcher);
  closeButton.addEventListener('click', closeMatcher);
  modal.addEventListener('click', event => { if (event.target === modal) closeMatcher(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMatcher(); });

  // Invite visitors after three seconds without interrupting their reading.
  const guessNudge = document.getElementById('guess-nudge');
  const guessNudgeClose = guessNudge.querySelector('.guess-nudge-close');
  const hideGuessNudge = () => guessNudge.classList.remove('show', 'attention');
  const launchFromNudge = () => { hideGuessNudge(); openMatcher(); };
  const showGuessNudge = () => {
    if (modal.classList.contains('open')) return;
    guessNudge.classList.add('show', 'attention');
    openButton.classList.add('attention');
    setTimeout(() => openButton.classList.remove('attention'), 900);
    setTimeout(hideGuessNudge, 10000);
  };
  // First invitation after 3 seconds, then one final reminder at 2 minutes.
  setTimeout(showGuessNudge, 3000);
  setTimeout(showGuessNudge, 120000);
  guessNudge.addEventListener('click', event => { if (!event.target.closest('.guess-nudge-close')) launchFromNudge(); });
  guessNudge.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') launchFromNudge(); });
  guessNudgeClose.addEventListener('click', event => { event.stopPropagation(); hideGuessNudge(); });

  function startFolkQuiz() {
    folkRound = 1;
    currentHomeNode = 'root';
    journeyChoices = [];
    renderFolkQuestion();
  }

  function renderFolkQuestion() {
    const step = HOME_TREE[currentHomeNode];
    document.getElementById('folk-progress').textContent = `CÂU ${String(folkRound).padStart(2, '0')} · ĐANG THU HẸP BẢN ĐỒ`;
    document.getElementById('folk-question').innerHTML = step.question.replace(' NÀO ', ' NÀO<br>');
    document.getElementById('folk-quote').textContent = step.hint;
    const feedback = document.getElementById('folk-feedback');
    feedback.textContent = '';
    feedback.className = 'folk-feedback';
    const options = document.getElementById('folk-options');
    options.innerHTML = step.choices.map((choice, index) => `<button data-option="${index}" data-label="DẤU HIỆU ${String(index + 1).padStart(2, '0')}">${choice.text}</button>`).join('');
    options.querySelectorAll('button').forEach(button => button.addEventListener('click', () => chooseFolkPath(button, step.choices[Number(button.dataset.option)])));
  }

  function chooseFolkPath(button, choice) {
    const buttons = [...document.querySelectorAll('#folk-options button')];
    buttons.forEach(item => item.disabled = true);
    button.classList.add('chosen-answer');
    journeyChoices.push(choice.label);
    const feedback = document.getElementById('folk-feedback');
    feedback.textContent = 'Đã ghi nhận lựa chọn — đang mở nhánh câu hỏi tiếp theo…';
    feedback.classList.add('correct');
    setTimeout(() => {
      if (choice.next) {
        folkRound += 1;
        currentHomeNode = choice.next;
        return renderFolkQuestion();
      }
      selectedProvince = PROVINCES_DATA.find(province => province.slug === choice.result);
      if (!selectedProvince) return;
      resultName.textContent = selectedProvince.name;
      resultCopy.textContent = `Qua nhánh ký ức “${journeyChoices.join(' → ').toLowerCase()}”, hệ thống dự đoán quê hương của bạn là ${selectedProvince.name}. ${selectedProvince.desc}`;
      jerseySlot.innerHTML = generateJerseySVG(selectedProvince, 'front');
      showStep(3);
    }, 560);
  }

  resultView.addEventListener('click', () => {
    closeMatcher();
    document.getElementById('collection-grid-sec').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const card = document.querySelector(`.card-perspective[data-slug="${selectedProvince.slug}"]`);
      if (!card) return openDetailsModal(selectedProvince.slug);
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('fusion-highlight');
      setTimeout(() => card.classList.remove('fusion-highlight'), 1100);
    }, 700);
  });

  document.getElementById('fusion-match-again').addEventListener('click', () => { startFolkQuiz(); showStep(1); });
});

// --- COMMUNITY VOTE: simulated campaign baseline + real local browser vote ---
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('vote-province');
  const submit = document.getElementById('vote-submit');
  const list = document.getElementById('vote-list');
  const total = document.getElementById('vote-total');
  const message = document.getElementById('vote-message');
  if (!select || !submit || !list || !total) return;

  const uniqueProvinces = [...new Map(PROVINCES_DATA.map(province => [province.slug, province])).values()];
  const storageKey = 'vn34-community-votes-v1';
  const voterKey = 'vn34-community-voter-v1';
  const oneDay = 24 * 60 * 60 * 1000;
  const hashSeed = text => [...text].reduce((value, char) => ((value << 5) - value + char.charCodeAt(0)) | 0, 0);
  const demoBase = Object.fromEntries(uniqueProvinces.map(province => [province.slug, 160 + Math.abs(hashSeed(province.slug)) % 740]));
  let localVotes = {};
  let lastVote = null;
  try {
    localVotes = JSON.parse(localStorage.getItem(storageKey) || '{}');
    lastVote = JSON.parse(localStorage.getItem(voterKey) || 'null');
  } catch (_) {
    localVotes = {};
  }

  select.innerHTML = '<option value="">— Chọn tỉnh / thành phố —</option>' + uniqueProvinces
    .slice().sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    .map(province => `<option value="${province.slug}">${province.name}</option>`).join('');

  const voteCount = province => demoBase[province.slug] + Number(localVotes[province.slug] || 0);
  const renderVotes = () => {
    const ranking = uniqueProvinces.slice().sort((a, b) => voteCount(b) - voteCount(a));
    const max = voteCount(ranking[0]);
    total.textContent = ranking.reduce((sum, province) => sum + voteCount(province), 0).toLocaleString('vi-VN');
    list.innerHTML = ranking.slice(0, 5).map((province, index) => `
      <div class="vote-row">
        <span class="vote-rank">${String(index + 1).padStart(2, '0')}</span>
        <span class="vote-name">${province.name}</span>
        <span class="vote-count">${voteCount(province).toLocaleString('vi-VN')} phiếu</span>
        <span class="vote-meter"><i style="width:${Math.round(voteCount(province) / max * 100)}%"></i></span>
      </div>`).join('');
  };

  submit.addEventListener('click', () => {
    const slug = select.value;
    if (!slug) {
      message.className = 'vote-message';
      message.textContent = 'Hãy chọn quê hương bạn muốn được ưu tiên thiết kế.';
      return;
    }
    if (lastVote?.time && Date.now() - lastVote.time < oneDay) {
      const votedProvince = uniqueProvinces.find(province => province.slug === lastVote.slug);
      message.className = 'vote-message';
      message.textContent = `Bạn đã bình chọn cho ${votedProvince?.name || 'quê hương của mình'} hôm nay. Hẹn bạn quay lại vào ngày mai.`;
      return;
    }
    localVotes[slug] = Number(localVotes[slug] || 0) + 1;
    lastVote = { slug, time: Date.now() };
    try {
      localStorage.setItem(storageKey, JSON.stringify(localVotes));
      localStorage.setItem(voterKey, JSON.stringify(lastVote));
    } catch (_) {}
    const province = uniqueProvinces.find(item => item.slug === slug);
    message.className = 'vote-message success';
    message.textContent = `Đã ghi nhận! ${province.name} vừa nhận thêm một tiếng nói từ cộng đồng.`;
    renderVotes();
    const box = document.querySelector('.vote-box');
    box.classList.add('vote-burst');
    setTimeout(() => box.classList.remove('vote-burst'), 750);
    if (typeof playTactileSound === 'function') playTactileSound('success');
  });

  renderVotes();
});
