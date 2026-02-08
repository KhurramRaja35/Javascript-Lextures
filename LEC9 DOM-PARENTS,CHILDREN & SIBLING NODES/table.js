document.body.children
// div.container , table , script ,script
document.body.children[1]
// <table>...</table>
document.body.children[1].rows
// 4
document.body.children[1].caption
//<caption>​NAMES​</caption>​
document.body.children[1].tFoot
{/* <tfoot>​…​</tfoot>​<tr>​<td colspan=​"2">​Total student​</td>​<td>​2​</td>​</tr>​</tfoot>​ */}
document.body.children[1].tHead
{/* <thead>​…​</thead>​<tr>​…​</tr>​</thead>​ */}
document.body.children[1].tBodies
// HTMLCollection [tbody]

//there are many other properties of table which i dont know how to use like..
//tbody.rows --> collection of tr inside
document.body.children[1].tBodies[0].rows
// tr.cells ---> collection of td and th
// tr.SectionRowIndex ---> index of tr inside closing element
// tr.rowIndex ---> row numbe starting from zero
// tr.cellIndex ---> no of cell inside enclosing <tr>