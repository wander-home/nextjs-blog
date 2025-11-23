export const blogPuzzlesObject = {
    blog1: {
        id: "blog1",
        title: "Fillomino",
        date: "2014-03-09",
        pzprxs: "p?fillomino/10/10/5g13h53g1p2h1h4h35g4g44g1g2i1h3l3h2i5g5g54g1g62h4h6h1p5g23h32g6",
        imageFile: "blog1.png"
    },
    blog2: {
        id: "blog2",
        title: "Nurikabe",
        date: "2014-03-09",
        pzprxs: "p?nurikabe/10/10/l1h4s4n4l2kbn6k2l2n5s2h1l",
    },
    blog3: {
        id: "blog3",
        title: "Slitherlink",
        date: "2014-03-09",
        pzprxs: "p?slither/10/10/q313020271cj221c2a0c1c1bh1b2d2d3b222bj362123111do",
    }
}

export const blogPuzzlesArray = Object.keys(blogPuzzlesObject).map((key) => blogPuzzlesObject[key])