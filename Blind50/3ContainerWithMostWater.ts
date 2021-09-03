function maxArea(height: number[]): number {
  let area = 0;
  let j = height.length-1;
  let width = j - 0;

  for (let i = 0; i < height.length; i++) {

    console.log(`start i: ${i}`)
    
    let currArea = Math.min(height[i], height[j]) * (width);
    area = Math.max(currArea, area);
    
    if (height[i] > width && height[i] ) {
      console.log(`height[i]: ${height[i]}, i: %d`, i);
    }
    
    if (height[j] > width) {
      console.log(`height[j+]: ${height[j]}, j: %d`, j);
    }

  }

  return area;
}


// [1,8,100,2,100,4,8,3,7]


// function maxArea(height: number[]): number {
  
//   let area:number = 0;
//   let wall1 = height[0]
//   let wall2 = height[height.length-1];
//   let j = height.length-1;

//   for (let i = 0; i < height.length; i++) {
//     // console.log(`height: ${height}`)
//     // console.log(`i: %d | j: %d \nwall1: %d | wall2: %d`, i, j, wall1, wall2)
//     // let iHeight = height[i];
//     // let iLength = j-i;
//     // let iArea = iHeight * iLength; 

//     // let jHeight = height[j];
//     // let jLength = j-i;
//     // let jArea = jHeight*jLength;
//     wall1 = Math.max(wall1, height[i]);
//     wall2 = Math.max(wall2, height[j], (height.indexOf(wall1)-height.indexOf(wall2)));

//     let currArea = Math.min(wall1, wall2) * (height.lastIndexOf(wall2)-height.indexOf(wall1))
    
//     area = Math.min(height[i], height[j]) * (j-i)



//     // console.log(`=======\ncurrArea: %d, area: %d, iArea: %d, jArea: %d`, currArea, area, iArea, jArea)

//     // if (iArea >= currArea) {
//     //   wall1 = i;
//     // } 

//     // if (jArea >= iArea) {
//     //   wall2 = j;
//     // }
    
//     area = Math.max(currArea, area);
//     j--;
//     // console.log(`currArea: %d, area: %d\n`, currArea, area)
    
//   }
//   // console.log(`height: [${height}]\nwall1: %d, wall2: %d`, wall1, wall2)
//   return area;
// };

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
console.log(maxArea([2,100]));
console.log(maxArea([1,1,1,1,1,1,1,100,1]));
console.log(maxArea([1,2,4,3]))
console.log(maxArea([2,3,10,5,7,8,9]))
console.log(maxArea([2,3,4,5,18,17,6]))
console.log(maxArea([1,3,2,5,25,24,5]))
console.log(maxArea([1,8,100,2,100,4,8,3,7]))

// 49
// 1
// 16
// 2
// 2
// 8
// 4
// 36
// 17
// 24
// 200

function oldMaxArea(height: number[]): number {
  
  let area:number = 0;
  let wall1 = 0
  let wall2 = height.length-1;
  let j = wall2;
  let minHeight = 0;

  for (let i = 0; i < height.length/2; i++) {

    console.log(`i: ${i} -> height[i]: ${height[i]}`)
    console.log(`j: ${j} -> height[j]: ${height[j]}`)
    console.log(`wall1: ${wall1} -> height[wall1]: ${height[wall1]}`)
    console.log(`wall2: ${wall2} -> height[wall2]: ${height[wall2]}`)

    if (height[wall1] < wall2-i) {
      wall1 = i;
      console.log(`wall1 changed to: ${wall1} -> height[wall1]: ${height[wall1]}`)
    }

    if (height[wall2] > wall2-wall1) {
      wall2 = j;
      console.log(`wall2 changed to: ${wall2} -> height[wall2]: ${height[wall2]}`) 
    }

    j--;
    console.log(``)

    minHeight = Math.min(height[wall1], height[wall2]);
  }
  console.log(`wall1: ${wall1} // wall2: ${wall2}`)
  console.log(`height[wall1]: ${height[wall1]} // height[wall2]: ${height[wall2]}`)
  console.log(`wall2-wall1: ${wall2-wall1}`)
  
  
  const length = wall2-wall1
  area = minHeight*length;

  console.log(`minHeight: ${minHeight}`)

  return area;
};
/**
 * n = non-negative nubmers
 * a1, a2, ..., a3
 * (i, ai) = a coordinate
 * 
 * n vertical lines
 * 
 * two endpoints of line i
 *  is located at (i, ai) and (i, 0)
 * 
 * 
 * find two lines, which, together with the x-axis
 * forms a container with the most water
 * 
 * 
 * EXAMPLE=========
 * height = [1,8,6,2,5,4,8,3,7]
 * heighti= [0,1,2,3,4,5,6,7,8]
 * 
 * max area of water = 49
 * 
 * height[1] = 8
 * height[8] = 7
 * 
 * output = min(height[1], height[8]) * min(height[1], height[8])
 * 
 * EXAMPLE=========
 * height = [4,3,2,1,4]
 * 
 * output = 16
 *        = min(height[0], height[4]) * min(height[0], height[4])
 * 
 */