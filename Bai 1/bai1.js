// Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. 
// Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].
let A1 = [1, 2, 4, "a"];
let A2 = [1, 3, 4, "b"];
function check(mang1, mang2) {
    let rs = []
    for (let i = 0; i < mang1.length; i++) {
        if (mang2.includes(mang1[i]) == false) {
            rs.push(mang1[i])
        }
    }
    for (let j = 0; j < mang2.length; j++) {
        if (mang1.includes(mang2[j]) == false) {
            rs.push(mang2[j])
        }
    }
    return alert(rs)
}
check(A1, A2)