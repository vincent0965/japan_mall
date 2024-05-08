const ProductList = [
    {
        id:"101",
        name:"大正漢方胃腸薬",
        price:460 ,
        category:1,
        img:"https://tshop.r10s.jp/sundrug/cabinet/84/4987306009486.jpg?_ex=400x400&s=0&r=1",
        info:"大正漢方胃腸薬(粉狀) 48包"
    },
    {
        id:"102",
        name:"キャベジン胃腸薬",
        price:430,
        category:1,
        img:"https://tshop.r10s.jp/master/cabinet/200-24/a0057456.jpg?downsize=300:*",
        info:"キャベジン胃腸薬 300錠入"
    },
    {
        id:"103",
        name:"AAAA",
        price:330,
        category:1,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/fortress/cabinet/products/06713660/medeal4987107629753.jpg",
        info:"第一三共胃腸薬(粉狀) 60包入"
    },
    {
        id:"104",
        name:"御岳百草丸",
        price:500,
        category:1,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/v-drug/cabinet/0103/4987352002455.jpg",
        info:"御岳百草丸 4100錠入"
    },
    {
        id:"105",
        name:"太田胃散A",
        price:500,
        category:1,
        img:"https://tshop.r10s.jp/sundrug/cabinet/67/4987033811116.jpg?_ex=400x400&s=0&r=1",
        info:"太田胃散A 300錠入(錠劑)"
    },
    {
        id:"106",
        name:"太田胃散",
        price:390,
        category:1,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/bey-drug/cabinet/tatennpogaido7/4987033409061.jpg",
        info:"太田胃散 48包入 粉裝"
    },
    {
        id:"107",
        name:"皇漢堂製薬 ビューラック",
        price:270,
        category:1,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/uniquedrugstore2021/cabinet/compass1641968113.jpg",
        info:"皇漢堂製薬 便祕碇 400錠入"
    },
    {
        id:"301",
        name:"サロンパス",
        price:290,
        category:3,
        img:"https://tshop.r10s.jp/sundrug/cabinet/1/4987188100578.jpg?_ex=400x400&s=0&r=1",
        info:"薩隆帕斯藥布 120枚入 (4.6 * 7.2 公分)"
    },
    {
        id:"302",
        name:"サロンパスAe",
        price:160,
        category:3,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/sapoot/cabinet/00372421/img57631072.jpg",
        info:"薩隆帕斯藥布 大片12枚入 (7.2 * 13 公分)",
        mass:2000
    },
    {
        id:"303",
        name:"ペアアクネ クリームW",
        price:190,
        category:3,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/ladydrug/cabinet/gazo21/4903301025726_2.jpg",
        info:"PAIR 皮膚藥(24g)",
        mass:4000
    },
    {
        id:"304",
        name:"メンソレータム AD20 乳液",
        price:420,
        category:3,
        img:"https://shop.r10s.jp/genki-e-shop-hanshin/cabinet/c/4987241119912.jpg",
        info:"曼秀雷敦 AD20(金色) 乳液(120ml)",
        mass:3000
    },
    {
        id:"305",
        name:"ロート製薬 メンソレータム エクシブ W",
        price:310,
        category:3,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/tsuruha/cabinet/shouhin41/4987241142590.jpg",
        info:"指甲藥膏(針對指甲感染、水泡、蟲咬等) 15g"
    },
    {
        id:"306",
        name:"オロナインＨ軟膏",
        price:230,
        category:3,
        img:"https://tshop.r10s.jp/sakuraiyakuhinstore/cabinet/1/09418500/imgrc0098721386.jpg?_ex=200x200&s=0&r=1",
        info:"Oronine H 創傷軟膏 100g"
    },
    {
        id:"307",
        name:"DHC 薬用リップクリーム",
        price:140,
        category:3,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/aromage-store2/cabinet/item/imgrc0073951876.jpg",
        info:"DHC 藥用護唇膏"
    },
    {
        id:"401",
        name:"チョコラBB",
        price:900,
        category:4,
        img:"https://tshop.r10s.jp/tennouji-oka1925/cabinet/compass1675667972.jpg?downsize=200:*",
        info:"CHOCOLA BB B群 250錠入"
    },
    {
        id:"402",
        name:"アリナミン",
        price:1600,
        category:4,
        img:"https://image.rakuten.co.jp/biccamera/cabinet/product/0890/00000001882212_a01.jpg",
        info:"合力他命 270錠入"
    },
    {
        id:"403",
        name:"強力わかもと",
        price:630,
        category:4,
        img:"https://shop.r10s.jp/stacon/cabinet/2016-1/4987243114014_1.jpg",
        info:"若元錠 1000錠入"
    },
    {
        id:"501",
        name:"Vロートアクティブプレミアム",
        price:340,
        category:5,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/uniquedrugstore2021/cabinet/08685604/4987241174461.jpg",
        info:"Premium V 眼藥水(15ml)"
    },
    {
        id:"502",
        name:"参天製薬 サンテFX ネオ",
        price:110,
        category:5,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/curecarat/cabinet/dai2/09141886/4987084410443.jpg",
        info:"參天眼藥水(白色) (12ml)"
    },
    {
        id:"601",
        name:"パブロンゴールドA微粒",
        price:560,
        category:6,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/uniquedrugstore2021/cabinet/compass1643006382.jpg",
        info:"大正感冒藥 44包入 粉裝"
    },
    {
        id:"602",
        name:"龍角散",
        price:600,
        category:6,
        img:"https://shop.r10s.jp/healthy-good/cabinet/item/r_21/rkki-210344.jpg",
        info:"龍角散 喉嚨藥(90g)"
    },
    {
        id:"603",
        name:"イブクイック頭痛薬",
        price:310,
        category:6,
        img:"https://image.rakuten.co.jp/biccamera/cabinet/product/1214/00000002072401_a01.jpg",
        info:"EVE頭痛藥(藍色) 40錠入"
    },
    {
        id:"604",
        name:"イブクイック頭痛薬DX",
        price:340,
        category:6,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/uniquedrugstore2021/cabinet/compass1642731153.jpg",
        info:"EVE頭痛藥(金色) 40錠入 含有保護胃黏膜成分 不傷胃"
    },
    {
        id:"801",
        name:"ミンティア MINTIA",
        price:280,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/worldcontact/cabinet/06747508/06930002/imgrc0100668032.jpg",
        info:"MINTIA 薄荷糖 (10盒為一組)"
    },
    {
        id:"802",
        name:"UCC 職人の珈琲",
        price:850,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/soukaidrink/cabinet/466/404466-2.jpg",
        info:"UCC 職人の珈琲 100包/箱"
    },
    {
        id:"803",
        name:"森永製菓 塩キャラメル袋",
        price:80,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/segp-shop/cabinet/kashi/imgrc0075803477.jpg",
        info:"森永牛奶糖 92g/包"
    },
    {
        id:"804",
        name:"ロッテ ブラックブラック",
        price:1150,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/ladydrug/cabinet/gazo27/4903333106530_2.jpg",
        info:"LOTTE 黑X黑 口香糖 (6罐/箱)"
    },
    {
        id:"805",
        name:"茅乃舎だし",
        price:990,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/sup-s-r/cabinet/tyoumiryou/5syu.jpg",
        info:"茅乃舍高湯包 (一般/減鹽/蔬菜/香菇/魚乾) (五包入)"
    },
    {
        id:"806",
        name:"日清食品 カップヌードル 75g 5入",
        price:350,
        category:8,
        img:"https://tshop.r10s.jp/kimisara/cabinet//compass1691839283.jpg?_ex=200x200&s=0&r=1",
        info:"日清杯麵 75g (左上-右下: 醬油、海鮮、咖哩、味噌、番茄，欲購買請私訊告知要哪一種,最少5杯)"
    },
    {
        id:"901",
        name:"白い恋人チョコ",
        price:600,
        category:9,
        img:"https://tshop.r10s.jp/hokkaido-omiyage/cabinet/koibito/isiya013-pack.jpg?downsize=330:*",
        info:"白色戀人巧克力 24包入/盒"
    },
    {
        id:"902",
        name:"メリー チョコレート",
        price:600,
        category:9,
        img:"https://shop.r10s.jp/gift-lien/cabinet/sweets/marys1000-1.jpg",
        info:"Mary`s 巧克力禮盒 24入/盒"
    },
    {
        id:"903",
        name:"東京ばな奈",
        price:440,
        category:9,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/brings/cabinet/tokyobanana/normal/banana-img.jpg",
        info:"東京香蕉蛋糕 8入/盒"
    },
    {
        id:"904",
        name:"サンリツ サンフィガロ",
        price:480,
        category:9,
        img:"https://shop.r10s.jp/tabaki/cabinet/tukurikomi/figaro/g1924-206_1.jpg",
        info:"FIGARO 餅乾禮盒 42入/盒"
    },
    {
        id:"1001",
        name:"DHA&EPA + セサミンEX",
        price:2300,
        category:10,
        img:"https://www.suntory-kenko.com/assets/img/supplement/main/43322/product_summary/pkg_dha_kv_rn.png?20220622",
        info:"三得利 DHA 魚油 240粒入"
    },
    {
        id:"1002",
        name:"グルコサミン アクティブ",
        price:2100,
        category:10,
        img:"https://www.suntory-kenko.com/assets/img/supplement/main/43341/product_summary/pkg_glc_kv.png?20220524",
        info:"三得利 固立申 甲殼軟骨素葡萄糖胺 360粒入"
    },
    {
        id:"1003",
        name:"黒酢にんにく",
        price:1100,
        category:10,
        img:"https://www.suntory-kenko.com/assets/img/supplement/pouch/43371/product_summary/pkg_kznk_kv.png?20220524",
        info:"三得利 黑醋大蒜精 180粒入"
    },
    {
        id:"1004",
        name:"ビトアス ザ パーフェクト セラムく",
        price:2200,
        category:10,
        img:"https://www.suntory-kenko.com/assets/img/skincare/vitoas/52100/product_summary/pkg_52100_kv.png?20220915",
        info:"三得利 美顏保濕精華乳液 120ml"
    },
    {
        id:"1005",
        name:"セサミンEX",
        price:2300,
        category:10,
        img:"https://www.suntory-kenko.com/Content/abtest/s3622/img/pkg_ssmn_kv_s3622.png?20220825",
        info:"三得利 芝麻明E 270粒入"
    },
    {
        id:"1006",
        name:"Milcolla[ミルコラ]",
        price:1300,
        category:10,
        img:"https://i2.momoshop.com.tw/1693091039/goodsimg/0009/143/614/9143614_B.webp",
        info:"三得利 蜜露珂娜 30包入"
    }
];

export default ProductList;
