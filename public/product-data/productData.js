// add conditions that trigger filtering of content

const productData = [
    {
        id:1,
        imgSrc: '/product-images/b1-1.png',
        name: 'Chinese Juniper Itoigawa',
        price: 184,
        quantity: 1,
        brief: 'PRE-ORDER this Chinese Juniper Itoigawa Bonsai Tree, imported from Japan. Approximately 40-43cm tall. Ready for dispatch June/July 2023.',
        tree: true,
        bonsaiID: 1,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:2,
        imgSrc: '/product-images/b2-1.jpeg',
        name: 'Japanese Black Pine',
        price: 610,
        quantity: 1,
        brief: 'PRE-ORDER this Cork Bark Japanese Black Pine (Pinus Thunbergii) imported from Japan and ready for dispatch June/ July 2023. Approximately 28-30cm tall, and in a ceramic pot.',
        tree: true,
        bonsaiID: 2,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:3,
        imgSrc: '/product-images/b3-1.jpg',
        name: 'Japanese White Pine',
        price: 159,
        quantity: 1,
        brief: 'PRE-ORDER this Japanese White Pine imported from Japan and ready for dispatch June/ July 2023. Approximately 26-30cm tall.',
        tree: true,
        bonsaiID: 3,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:4,
        imgSrc: '/product-images/b4-1.jpg',
        name: 'Mugo Pine',
        price: 308,
        quantity: 1,
        brief: 'Outdoor Mugo Pine Bonsai Tree stands approximately 33-37 tall wired to shape and in a ceramic pot.',
        tree: true,
        bonsaiID: 4,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:5,
        imgSrc: '/product-images/b5-1.jpg',
        name: 'Japanese White Pine',
        price: 981,
        quantity: 1,
        brief: 'Beautiful Japanese White Pine, approximately 43-50cm tall and in a ceramic pot. Imported from Japan.',
        tree: true,
        bonsaiID: 5,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id: 6,
        imgSrc: '/product-images/b6-1.jpg',
        name: 'Osakazuki Maple',
        price: 734,
        quantity: 1,
        brief: 'Osakazuki Maple Bonsai Tree. Approximately 75-77cm tall and displayed in a plastic bonsai pot. This tree is an outdoor deciduous species. Due to the size, shape, value or weight of this piece it would need to be collected from our nursery.',
        tree: true,
        bonsaiID: 6,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:7,
        imgSrc: '/product-images/b7-1.jpg',
        name: 'Mountain Maple',
        price: 240,
        quantity: 1,
        brief: 'Mountain Maple Bonsai Tree. Approximately 45-50cm tall and displayed in a plastic bonsai pot. This tree is an outdoor deciduous species.',
        tree: true,
        bonsaiID: 7,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:8,
        imgSrc: '/product-images/b8-1.jpg',
        name: 'Mountain Maple',
        price: 6170,
        quantity: 1,
        brief: 'Gorgeous Mountain Maple planted in a Mica Drum pot, stands approximately 70-75cm tall. This tree appears in a YouTube video. This would need to be collected from the nursery.',
        tree: true,
        bonsaiID: 8,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:9,
        imgSrc: '/product-images/b9-1.jpg',
        name: 'Japanese Quince',
        price: 160,
        quantity: 1,
        brief: 'Outdoor Fruiting Japanese Quince Chaenomeles japonica, approximately 25-27cm tall and planted in a ceramic bonsai pot.',
        tree: true,
        bonsaiID: 9,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:10,
        imgSrc: '/product-images/b10-1.jpg',
        name: 'Wisteria Floribunda',
        price: 302,
        quantity: 1,
        brief: `Wisteria floribunda approximately 65-70cm tall (bottom of pot to top of tree) in a ceramic cascade pot and wired to shape. We wouldn't be able to send this so it would need to be COLLECTED.`,
        tree: true,
        bonsaiID: 10,
        seed: false,
        tool: false,
        misc: false
    },
    {
        id:11,
        imgSrc: '/product-images/t1.png',
        name: 'Stainless Steel Bonsai Tool Kit',
        price: 364,
        quantity: 1,
        brief: 'High quality 7 Piece Stainless Steel Dingmu Bonsai Tool kit. An ideal gift for someone who wants to learn a bit more about bonsai.',
        tree: false,
        seed: false,
        tool: true,
        toolID: 1,
        misc: false
    },
    {
        id:12,
        imgSrc: '/product-images/t2.jpeg',
        name: 'Shears',
        price: 30,
        quantity: 1,
        brief: 'Shears | 50cm',
        tree: false,
        seed: false,
        tool: true,
        toolID: 2,
        misc: false
    },
    {
        id:13,
        imgSrc: '/product-images/t3.jpg',
        name: 'Dingmu',
        price: 110,
        quantity: 1,
        brief: '200mm Stainless Steel Bonsai Branch Cutter from Dingmu.',
        tree: false,
        seed: false,
        tool: true,
        toolID: 3,
        misc: false
    },
    {
        id:14,
        imgSrc: '/product-images/t4.jpg',
        name: 'Root Rake',
        price: 23,
        quantity: 1,
        brief: 'This root rake is designed to remove soil from around the roots and to stir up the soil a very useful tool, especially if you are potting a tree.',
        tree: false,
        seed: false,
        tool: true,
        toolID: 4,
        misc: false
    },
    {
        id:15,
        imgSrc: '/product-images/s1.jpg',
        name: 'Japanese Black Pine Bonsai Seeds',
        price: 5,
        quantity: 1,
        brief: 'Grow your own Japanese Black Pine (Pinus thunbergii) bonsai with these bonsai seeds. The Japanese Black Pine is an evergreen tree native to Japan. Bonsai seed pouch included bonsai seeds, growing instruction, and stratification instructions.Bonsai Seed pack includes approximately 15-20 seeds.',
        tree: false,
        seed: true,
        seedID: 1,
        tool: false,
        misc: false
    },
    {
        id:16,
        imgSrc: '/product-images/s2.jpg',
        name: 'Coastal Redwood Bonsai Seeds',
        price: 7,
        quantity: 1,
        brief: 'Grow your own Coastal Redwood (Sequoia Sempervirens) bonsai with these bonsai seeds. The Coastal Redwood is an evergreen tree mainly found near the coast in California and Oregon. Bonsai seed pouch included bonsai seeds, growing instruction, and stratification instructions.Bonsai Seed pack includes approximately 8 seeds.',
        tree: false,
        seed: true,
        seedID: 2,
        tool: false,
        misc: false
    },
    {
        id:17,
        imgSrc: '/product-images/s3.jpg',
        name: 'Japanese Red Maple Bonsai Seeds',
        price: 5,
        quantity: 1,
        brief: 'Grow your own Japanese Red Maple (Acer Palmatum) bonsai with these bonsai seeds. The Japanese Red Maple is a decidiuos tree native Japan. Bonsai seed pouch included bonsai seeds, growing instruction, and stratification instructions.Bonsai Seed pack includes approximately 15-20 seeds.',
        tree: false,
        seed: true,
        seedID: 3,
        tool: false,
        misc: false
    },
    {
        id:18,
        imgSrc: '/product-images/m1.png',
        name: 'Superfly Bonsai Logo Trucker Cap',
        price: 20,
        quantity: 1,
        brief: 'This six-panel trucker cap with a mesh back will be a comfy and classic choice for a perfect day in the sun.',
        tree: false,
        seed: false,
        tool: false,
        misc: true,
        miscID: 1
    },
    {
        id:19,
        imgSrc: '/product-images/m2.jpg',
        name: 'I Love Bonsai T Shirt',
        price: 25,
        quantity: 1,
        brief: 'Lightweight, Classic fit, Double-needle sleeve and bottom hem',
        tree: false,
        seed: false,
        tool: false,
        misc: true,
        miscID: 2
    },

]

export default productData