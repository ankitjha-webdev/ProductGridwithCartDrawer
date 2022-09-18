
// Json data address
// const api_url = "/data/products.json";

// // A function to fetch the data from the product.json file
// const productData = async (url) => {
//     const response = await fetch(url);

//     var data = await response.json();
    
//     console.log(data);
//     if (response) {
//         // hideloader();
//     }
//     show(data);
// }

// productData(api_url);


// Function to hide the loader
// const hideloader = () => {
//     document.getElementById('loading').style.display = 'none';
// }



// Function to define innerHTML for HTML table

var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');

	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	