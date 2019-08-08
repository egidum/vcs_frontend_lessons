
/*Modaline forma - issokantis langas su galerija*/

function startGallery(){				document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	
}



/*Automatinis div ir img sukurimas*/

function createImage(imageLink, id){
	let divMain = document.createElement("div");
		divMain.setAttribute("class", "coll4");
		
		let divImage = document.createElement("div");
		divImage.setAttribute("class", "image");
		divMain.appendChild(divImage);
		
		let image = document.createElement("img");
		image.setAttribute("src", imageLink);
		image.setAttribute("id", id);
		divImage.appendChild(image);
		
		image.addEventListener("click", function(){
			let image = document.createElement("img");
			image.setAttribute("src", this.getAttribute("src"));
			document.querySelector(".modal .center").appendChild(image);
			document.querySelector(".modal").style.display = "flex";				   
   		});
//	
//		let image = document.createElement("img");
//		image.setAttribute("src", "https://picsum.photos/300");
//		image.setAttribute("id", 1);
//		divImage.appendChild(image);
	
		
		let gallery = document.querySelector(".gallery .row");
		gallery.appendChild(divMain);	
}		