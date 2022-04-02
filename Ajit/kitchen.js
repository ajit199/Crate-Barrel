let kitchen = [
  {
    title: "CAVIAR WHITE CLAY DINNERWARE",
    price: 40,
    image:
      "https://cb2.scene7.com/is/image/CB2/CaviarWtRcyclClayGrpFHS22/$web_plp_card$/211115123058/caviar-white-recycled-clay-dinnerware.jpg",
  },
  {
    title: "BLOSSOM DINNERWARE",
    price: 45,
    image:
      "https://cb2.scene7.com/is/image/CB2/Blossom3PcPlcStSHS22/$web_plp_card$/211115123051/blossom-dinnerware.jpg",
  },
  {
    title: "DIZZY REACTIVE METALLIC DINNERWARE",
    price: 38,
    image:
      "https://cb2.scene7.com/is/image/CB2/DizzyRctvMtllc4PcSttngSHF21/$web_plp_card$/210517175029/dizzy-reactive-metallic-dinnerware.jpg",
  },
  {
    title: "PACIFIC TEAK WOOD DINNERWARE",
    price: 15,
    image:
      "https://cb2.scene7.com/is/image/CB2/PacificGroupFHS18/$web_plp_card$/190905022815/pacific-teak-dinnerware.jpg",
  },
  {
    title: "DAPHNE GLASS DINNERWARE",
    price: 3,
    image:
      "https://cb2.scene7.com/is/image/CB2/DaphneGroupFHS18/$web_plp_card$/190905022822/daphne-glass-dinnerware.jpg",
  },
  {
    title: "20-PIECE ESSENCE BRUSHED BLACK FLATWARE SET",
    price: 129,
    image:
      "https://cb2.scene7.com/is/image/CB2/EssenceBdBkFltwr20PcSSHS22/$web_plp_card$/211217132914/20-piece-essence-brushed-black-flatware-set.jpg",
  },
  {
    title: "20-PIECE PIN BRUSHED DARK BRONZE FLATWARE",
    price: 119,
    image:
      "https://cb2.scene7.com/is/image/CB2/PinBrshdDrkBrnzFltwr20PcSSHF21/$web_plp_card$/210727105840/pin-brshd-drk-brnz-flatware-20pc.jpg",
  },
  {
    title: "FRAME FLATWARE 20-PIECE SET",
    price: 70,
    image:
      "https://cb2.scene7.com/is/image/CB2/KMFrameFlatware20PcSSHS21/$web_plp_card$/210210135647/frame-flatware-20pc-set.jpg",
  },
  {
    title: "ARRIS MARBLE CANISTERS SET OF 2",
    price: 249,
    image:
      "https://cb2.scene7.com/is/image/CB2/ArrisCanistersS2SHS22/$web_plp_card$/211129120022/arris-marble-canisters-set-of-2.jpg",
  },
  {
    title: "CONTEMPRI BLACK COOKIE JAR",
    price: 30,
    image:
      "https://cb2.scene7.com/is/image/CB2/ContempriBlkCnstrCookieJrSHS22/$web_plp_card$/211129120027/contempri-black-cookie-jar.jpg",
  },
  {
    title: "BAKING SET",
    price: 259,
    image:
      "https://cb2.scene7.com/is/image/CB2/JFBakingBundleSHF21/$web_plp_card$/210830142001/baking-bundle.jpg",
  },
  {
    title: "SALAD SET",
    price: 130,
    image:
      "https://cb2.scene7.com/is/image/CB2/JFSaladBundleSHF21/$web_plp_card$/210830142006/salad-bundle.jpg",
  },
  {
    title: "MARIANA WHITE WASH ROUND TEAK DINING TABLE",
    price: 1699,
    image:
      "https://cb2.scene7.com/is/image/CB2/MarianaWtWhTkRndDngTableSHF21/$web_pdp_main_carousel_md$/210528164024/mariana-white-wash-round-teak-dining-table.jpg",
  },
  {
    title: "DYLAN 36 X104 MEDIUM ACACIA DINING TABLE",
    price: 1499,
    image:
      "https://cb2.scene7.com/is/image/CB2/DylanDineTbl104X36inSHF18_1x1/$web_pdp_main_carousel_md$/190905023300/dylan-104x36-dining-table-2.jpg",
  },
  {
    title: "ORRIN BLACK OVAL DINING TABLE",
    price: 999,
    image:
      "https://cb2.scene7.com/is/image/CB2/OrrinTableBlackSHS22/$web_pdp_main_carousel_md$/211028102237/orrin-black-oval-dining-table.jpg",
  },
  {
    title: "CAMPBELL OVAL WOOD DINING TABLE",
    price: 1799,
    image:
      "https://cb2.scene7.com/is/image/CB2/CampbellOvalDiningTableSHF21/$web_pdp_main_carousel_md$/210825100035/campbell-oval-wood-dining-table.jpg",
  },
  {
    title: "MARBLE TOP ISLAND",
    price: 1999,
    image:
      "https://cb2.scene7.com/is/image/CB2/MarbleIslandSHS18_1x1/$web_pdp_main_carousel_md$/190905022852/marble-top-island.jpg",
  },
  {
    title: "GO-CART BLACK ROLLING COUNTER TABLE-STAND UP DESK",
    price: 179,
    image:
      "https://cb2.scene7.com/is/image/CB2/GoCartCntrRlgtblBk36inResSHF18_1x1/$web_pdp_main_carousel_md$/190905023455/go-cart-black-rolling-counter-table-stand-up-desk.jpg",
  },
  //
  {
    title: "FOLEY FAUX MOHAIR NAVY DINING ARMCHAIR SET OF 4",
    price: 1499,
    image:
      "https://cb2.scene7.com/is/image/CB2/FoleyNvyFxMhrDiningChairSHF21/$web_plp_card$/210722145957/foley-faux-mohair-navy-dining-chair.jpg",
  },
  {
    title: "DROP STRIPE DINING ARMCHAIR",
    price: 299,
    image:
      "https://cb2.scene7.com/is/image/CB2/DropStripeDiningArmChair3QSSS21/$web_spill_item$/220329033840/DropStripeDiningArmChair3QSSS21.jpg",
  },
];

let container = document.getElementById("container");
let productArr = [];
const displayData = (data) => {
  container.innerHTML = null;
  data.forEach(({ title, image, price }, index) => {
    let div = create("div");
    let img = create("img");
    img.src = image;
    let name = create("p");
    name.innerText = title;
    name.addEventListener("click", () => {
      let storeData = data[index];
      productArr.push(storeData);
      localStorage.setItem("purchaseData", JSON.stringify(productArr));
      window.location.href = "detail.html";
    });
    let amount = create("span");
    amount.innerText = `$${price}`;
    div.append(img, name, amount);
    container.append(div);
  });
};
displayData(kitchen);
function create(tag) {
  return document.createElement(tag);
}
