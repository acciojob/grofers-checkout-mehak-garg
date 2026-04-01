const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices=document.querySelectorAll(`.prices`);
	let total_price=0;
	for(let i=0;i<prices.length;i++)
		{
			total_price+=parseInt(prices[i].innerText);
		}
	let last_row=document.createElement("tr");
	let element1=document.createElement("td");
	element1.innerText="Total price";
	last_row.appendChild(element1);
	let element2=document.createElement("td");
	element2.innerText=`${total_price}`;
	last_row.appendChild(element2);
	document.querySelector("table").appendChild(last_row);
};

getSumBtn.addEventListener("click", getSum);

