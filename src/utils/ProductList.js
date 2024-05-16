const ProductList = [
    {
        id:"101",
        name:"大正漢方胃腸薬",
        price:435,
        category:1,
        img:"https://m.media-amazon.com/images/I/71sNHvva-pL._AC_SX679_.jpg",
        info:"大正漢方胃腸薬(粉狀) 48包",
        mass:120
    },
    {
        id:"102",
        name:"キャベジン胃腸薬",
        price:495,
        category:1,
        img:"https://m.media-amazon.com/images/I/71t7L8-gxPL._AC_SX679_.jpg",
        info:"Cabaginα 胃腸藥 300錠",
        mass:440
    },
    {
        id:"103",
        name:"キャベジン胃腸薬 顆粒",
        price:495,
        category:1,
        img:"https://m.media-amazon.com/images/I/71fGiI9NliL.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"Cabaginα顆粒 56包",
        mass:105
    },
    {
        id:"104",
        name:"第一三共胃腸薬細粒S",
        price:255,
        category:1,
        img:"https://m.media-amazon.com/images/I/91VZUd93ZXL.__AC_SY300_SX300_QL70_ML2_.jpg",
        info:"第一三共胃腸薬(粉狀) 32包入",
        mass:120
    },
    {
        id:"105",
        name:"御岳百草丸",
        price:585,
        category:1,
        img:"https://m.media-amazon.com/images/I/51RhIpM3GXL._AC_.jpg",
        info:"御岳百草丸 4100錠入",
        mass:250
    },
    {
        id:"106",
        name:"太田胃散 <分包>",
        price:320,
        category:1,
        img:"https://m.media-amazon.com/images/I/81-sT2m4huL.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"太田胃散 48包入 粉裝",
        mass:120
    },
    {
        id:"107",
        name:"太田胃散A錠劑",
        price:375,
        category:1,
        img:"https://m.media-amazon.com/images/I/81tH8mJHFfL._AC_SY679_.jpg",
        info:"太田胃散A錠劑 120錠",
        mass:100
    },
    {
        id:"108",
        name:"太田胃散 罐裝",
        price:350,
        category:1,
        img:"https://m.media-amazon.com/images/I/81WNH8s+vIL._AC_SX522_.jpg",
        info:"太田胃散 210g 罐裝",
        mass:260
    },
    {
        id:"109",
        name:"皇漢堂製薬 ビューラック",
        price:290,
        category:1,
        img:"https://m.media-amazon.com/images/I/61lSnjVXirL.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"皇漢堂製薬 便祕碇 400錠入",
        mass:80
    },
    {
        id:"301",
        name:"サロンパス",
        price:350,
        category:3,
        img:"https://tshop.r10s.jp/sundrug/cabinet/1/4987188100578.jpg?_ex=400x400&s=0&r=1",
        info:"薩隆帕斯藥布 120枚入 (4.6 * 7.2 公分)",
        mass:450
    },
    {
        id:"302",
        name:"サロンパス",
        price:310,
        category:3,
        img:"https://m.media-amazon.com/images/I/61I2Wn1mkUL._AC_SY679_.jpg",
        info:"撒隆巴斯 酸痛貼布AE 140枚入 (4.2 * 6.5 公分)",
        mass:450
    },
    {
        id:"303",
        name:"サロンパスAe",
        price:150,
        category:3,
        img:"https://m.media-amazon.com/images/I/61bWw3rVoeL._AC_SY679_.jpg",
        info:"薩隆帕斯藥布 大片12枚入 (7.2 * 13 公分)",
        mass:150
    },
    {
        id:"304",
        name:"ペアアクネ クリームW",
        price:180,
        category:3,
        img:"https://m.media-amazon.com/images/I/71yN7aN+WqL._AC_SX679_.jpg",
        info:"PAIR 皮膚藥 (24g)",
        mass:40
    },
    {
        id:"305",
        name:"メンソレータムAD クリーム",
        price:215,
        category:3,
        img:"https://m.media-amazon.com/images/I/81LUm66fAAL._AC_SX679_.jpg",
        info:"面速力達姆AD乳膏 (145g)",
        mass:200
    },
    {
        id:"306",
        name:"メンソレータム エクシブW ディープ10 クリーム",
        price:310,
        category:3,
        img:"https://m.media-amazon.com/images/I/61DXlgTWFjS._AC_SX679_.jpg",
        info:"曼秀雷敦 XIV Deep 10足癬治療乳膏 35g",
        mass:50
    },
    {
        id:"307",
        name:"オロナインＨ軟膏",
        price:165,
        category:3,
        img:"https://m.media-amazon.com/images/I/716+i5LVL0L._AC_SX342_SY445_.jpg",
        info:"Oronine H 創傷軟膏 100g",
        mass: 160
    },
    {
        id:"308",
        name:"DHC 薬用リップクリーム",
        price:135,
        category:3,
        img:"https://m.media-amazon.com/images/I/51gHLZ7qJ0L._AC_SX679_.jpg",
        info:"DHC 藥用護唇膏",
        mass: 15
    },
    {
        id:"309",
        name:"YuSkin ユースキンI 110g",
        price:250,
        category:3,
        img:"https://m.media-amazon.com/images/I/610oOQrFZaL._AC_SX679_.jpg",
        info:"YuSkin 止癢保濕乳霜 (110g)",
        mass: 150
    },
    {
        id:"310",
        name:"YuSkin ユースキンI ローション 130mL",
        price:250,
        category:3,
        img:"https://m.media-amazon.com/images/I/71OVM4ZQjvL._AC_SX679_.jpg",
        info:"YuSkin 止癢消炎 保濕乳液 (130ml)",
        mass: 180
    },
    {
        id:"311",
        name:"ロイヒつぼ膏",
        price:190,
        category:3,
        img:"https://m.media-amazon.com/images/I/81-tyly9NtL._AC_SX679_.jpg",
        info:"ロイヒつぼ膏 人頭貼布 156枚入",
        mass: 160
    },
    {
        id:"401",
        name:"チョコラBB プラス",
        price:960,
        category:4,
        img:"https://m.media-amazon.com/images/I/816a4wLmfQL._AC_SX679_.jpg",
        info:"CHOCOLA BB B群 250錠入",
        mass: 120
    },
    {
        id:"402",
        name:"アリナミン EX Plus",
        price:1500,
        category:4,
        img:"https://m.media-amazon.com/images/I/81k5t9kvHeL._AC_SX522_.jpg",
        info:"合力他命EX 270錠入",
        mass:180
    },
    {
        id:"403",
        name:"アリナミン EX Plus α",
        price:1050,
        category:4,
        img:"https://m.media-amazon.com/images/I/91iVxO7Wj4L.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"合力他命EX Plus α 140錠入",
        mass:150
    },
    {
        id:"404",
        name:"強力わかもと",
        price:700,
        category:4,
        img:"https://shop.r10s.jp/stacon/cabinet/2016-1/4987243114014_1.jpg",
        info:"若元錠 1000錠入",
        mass:500
    },
    {
        id:"405",
        name:"ASAHI Ebios",
        price:510,
        category:4,
        img:"https://m.media-amazon.com/images/I/71JvrwCk32L._AC_SX679_.jpg",
        info:"朝日 愛表斯錠 啤酒酵母乳酸菌 2000錠入",
        mass:800
    },
    {
        id:"406",
        name:"ビオスリー Hi",
        price:610,
        category:4,
        img:"https://m.media-amazon.com/images/I/81+mJcBOnkL._AC_UL480_FMwebp_QL65_.jpg",
        info:"武田 必歐斯錠 酪酸菌 270錠入",
        mass:150
    },
    {
        id:"407",
        name:"新ビオフェルミンS",
        price:650,
        category:4,
        img:"https://m.media-amazon.com/images/I/71suV0zE9pL._AC_SX679_.jpg",
        info:"新表飛鳴 S 540錠入",
        mass:280
    },
    {
        id:"408",
        name:"新ビオフェルミンS プラス錠",
        price:980,
        category:4,
        img:"https://m.media-amazon.com/images/I/81mge2pSNLL._AC_SX679_.jpg",
        info:"新表飛鳴 S+ 550錠入",
        mass:320
    },
    {
        id:"501",
        name:"スマイル40プレミアムDX",
        price:230,
        category:5,
        img:"https://m.media-amazon.com/images/I/7146ivtdx8L.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"獅王 LION 獅美露SMILE 40 Premium潤眼液 (15ml)",
        mass: 20
    },
    {
        id:"502",
        name:"サンテメディカルガードEX",
        price:200,
        category:5,
        img:"https://m.media-amazon.com/images/I/51Iv3hiJR3L._AC_.jpg",
        info:"參天製藥 MedicalGuardEX 角膜修復 眼藥水 (12ml)",
        mass:20
    },
    {
        id:"503",
        name:"Vロート プレミアム",
        price:315,
        category:5,
        img:"https://m.media-amazon.com/images/I/61dwYNL5v2L._AC_SX679_.jpg",
        info:"樂敦 ROHTO V頂級藍鑽 全能型眼藥水 (15ml)",
        mass: 20
    },
    {
        id:"504",
        name:"Vロートアクティブプレミアム",
        price:205,
        category:5,
        img:"https://m.media-amazon.com/images/I/71jVEgiec4L.__AC_SY445_SX342_QL70_ML2_.jpg",
        info:"參天製藥 Medical12 抗疲勞 眼藥水 (12ml)",
        mass: 20
    },
    {
        id:"601",
        name:"パブロンゴールドA微粒",
        price:420,
        category:6,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/uniquedrugstore2021/cabinet/compass1643006382.jpg",
        info:"大正感冒藥 44包入 粉裝",
        mass: 150
    },
    {
        id:"602",
        name:"龍角散",
        price:480,
        category:6,
        img:"https://shop.r10s.jp/healthy-good/cabinet/item/r_21/rkki-210344.jpg",
        info:"龍角散 喉嚨藥(90g)",
        mass: 140
    },
    {
        id:"603",
        name:"イブクイック頭痛薬DX",
        price:400,
        category:6,
        img:"https://m.media-amazon.com/images/I/81WbBq7htwL._AC_SX679_.jpg",
        info:"EVE頭痛藥(金色) 60錠入 含有保護胃黏膜成分 不傷胃",
        mass: 80
    },
    {
        id:"604",
        name:"パブロンSゴールドW微粒",
        price:425,
        category:6,
        img:"https://m.media-amazon.com/images/I/716r+IYK5AL._AC_SX679_.jpg",
        info:"大正百寶能 黃金W 微粒 24包",
        mass:150
    },
    {
        id:"605",
        name:"バファリンプレミアムDX",
        price:455,
        category:6,
        img:"https://m.media-amazon.com/images/I/71NaoHZVnPL._AC_SX679_.jpg",
        info:"獅王 bufferin 頭痛藥 60錠",
        mass:100
    },
    {
        id:"801",
        name:"UCC 職人の珈琲",
        price:300,
        category:8,
        img:"https://m.media-amazon.com/images/I/719cYsRD7YL.__AC_SX300_SY300_QL70_ML2_.jpg",
        info:"UCC 職人の珈琲 50包/箱",
        mass: 400
    },
    {
        id:"802",
        name:"森永製菓 塩キャラメル袋",
        price:80,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/segp-shop/cabinet/kashi/imgrc0075803477.jpg",
        info:"森永牛奶糖 92g/包",
        mass: 110
    },
    {
        id:"803",
        name:"祇園辻利 ぎおんの里&つじりの里 アソート",
        price:520,
        category:8,
        img:"https://m.media-amazon.com/images/I/61+VsR+ZfZL._AC_SX679_.jpg",
        info:"京都祇園辻利抹茶蛋捲(咖啡/抹茶) 24入",
        mass: 270
    },
    {
        id:"804",
        name:"京都 抹茶の焼きショコラ",
        price:520,
        category:8,
        img:"https://m.media-amazon.com/images/I/81Em2OvZ+CL._AC_SX679_.jpg",
        info:"京都抹茶烘培巧克力蛋糕 12入",
        mass: 270
    },
    {
        id:"805",
        name:"茅乃舎だし",
        price:990,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/sup-s-r/cabinet/tyoumiryou/5syu.jpg",
        info:"茅乃舍高湯包 (一般/減鹽/蔬菜/香菇/魚乾) (五包入)",
        mass: 150
    },
    {
        id:"806",
        name:"白い恋人チョコ",
        price:600,
        category:8,
        img:"https://tshop.r10s.jp/hokkaido-omiyage/cabinet/koibito/isiya013-pack.jpg?downsize=330:*",
        info:"白色戀人巧克力 24包入/盒",
        mass: 450
    },
    {
        id:"807",
        name:"メリー チョコレート",
        price:600,
        category:8,
        img:"https://shop.r10s.jp/gift-lien/cabinet/sweets/marys1000-1.jpg",
        info:"Mary`s 巧克力禮盒 24入/盒",
        mass: 350
    },
    {
        id:"808",
        name:"東京ばな奈",
        price:440,
        category:8,
        img:"https://thumbnail.image.rakuten.co.jp/@0_mall/brings/cabinet/tokyobanana/normal/banana-img.jpg",
        info:"東京香蕉蛋糕 8入/盒",
        mass: 650
    },
    {
        id:"809",
        name:"キットカットミニ オトナの甘さ濃い抹茶",
        price:140,
        category:8,
        img:"https://m.media-amazon.com/images/I/6136kLv3GkL._AC_SX679_.jpg",
        info:"KitKat 抹茶巧克力 10入",
        mass: 120
    },
    {
        id:"810",
        name:"グリコ ポッキー濃い深み抹茶",
        price:140,
        category:8,
        img:"https://m.media-amazon.com/images/I/6136kLv3GkL._AC_SX679_.jpg",
        info:"Pocky 抹茶巧克力",
        mass: 50
    },
    {
        id:"901",
        name:"DHA&EPA + セサミンEX",
        price:2300,
        category:9,
        img:"https://www.suntory-kenko.com/assets/img/supplement/main/43322/product_summary/pkg_dha_kv_rn.png?20220622",
        info:"三得利 DHA 魚油 240粒入"
    },
    {
        id:"902",
        name:"グルコサミン アクティブ",
        price:2100,
        category:9,
        img:"https://www.suntory-kenko.com/assets/img/supplement/main/43341/product_summary/pkg_glc_kv.png?20220524",
        info:"三得利 固立申 甲殼軟骨素葡萄糖胺 360粒入"
    },
    {
        id:"903",
        name:"黒酢にんにく",
        price:1100,
        category:9,
        img:"https://www.suntory-kenko.com/assets/img/supplement/pouch/43371/product_summary/pkg_kznk_kv.png?20220524",
        info:"三得利 黑醋大蒜精 180粒入"
    },
    {
        id:"904",
        name:"ビトアス ザ パーフェクト セラムく",
        price:2200,
        category:9,
        img:"https://www.suntory-kenko.com/assets/img/skincare/vitoas/52100/product_summary/pkg_52100_kv.png?20220915",
        info:"三得利 美顏保濕精華乳液 120ml"
    },
    {
        id:"905",
        name:"セサミンEX",
        price:2300,
        category:9,
        img:"https://www.suntory-kenko.com/Content/abtest/s3622/img/pkg_ssmn_kv_s3622.png?20220825",
        info:"三得利 芝麻明E 270粒入"
    },
    {
        id:"906",
        name:"Milcolla[ミルコラ]",
        price:1300,
        category:9,
        img:"https://i2.momoshop.com.tw/1693091039/goodsimg/0009/143/614/9143614_B.webp",
        info:"三得利 蜜露珂娜 30包入"
    }
];

export default ProductList;
