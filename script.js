const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices=document.querySelectorAll(".prices");
	let total_price=0;
	for(let i=0;i<prices.length;i++)
		{
			total_price+=prices[i];
		}
	let last_row=document.createElement("tr");
	last_row.innerHtml+="<td>total_price</td>";
	document.table.appendChild(last_row);
};

getSumBtn.addEventListener("click", getSum);

