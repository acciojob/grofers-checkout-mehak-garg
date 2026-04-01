const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices=document.querySelectorAll(`.price`);
	let total_price=0;
	for(let i=0;i<prices.length;i++)
		{
			total_price+=parseInt(prices[i].innerText);
		}
	let last_row=document.createElement("tr");
	last_row.innerHTML+=`<td>${total_price}</td>`;
	document.querySelector("table").appendChild(last_row);
};

getSumBtn.addEventListener("click", getSum);

