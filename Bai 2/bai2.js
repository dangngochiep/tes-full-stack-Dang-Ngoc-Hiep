// Viết chương trình xếp hạng rank theo số điểm các đội bóng đạt được trong giải đấu. 
// Biết rằng tên của các đội bóng không thể trùng nhau, nếu số điểm trùng nhau thì xếp đội xếp trên có hiệu số bàn thắng bại (GD: Goal Difference) ít hơn, 
// rồi mới xét đến Alphabet nếu 2 đội trùng cả điểm số lẫn hiệu số bàn thắng.

    let doibong =  [
        {
            name: "Arsenal",
            point: 99,
            GD: 45,
        },
        {
            name: "Chelsea",
            point: 75,
            GD: 39,
        },
        {
            name: "Manchester United",
            point: 60,
            GD: 29,
        },
        {
            name: "Liverpool",
            point: 88,
            GD: 39,
        }
    ]
    arrpoints = []
    for (i = 0; i < doibong.length; i++) {
        arrpoints.push(doibong[i].point)
    }
    console.log(arrpoints)
    let sorted = arrpoints.slice().sort(function(a, b) { return b - a })
    let ranks = arrpoints.map(function(arrabc) {
        return sorted.indexOf(arrabc) + 1
    })
    doibong.forEach(input)
    console.log(doibong)
    function input() {
        for (i = 0; i < doibong.length; i++) {
            doibong[i].position = ranks[i]
        }
    }
