
/*Modaline forma - issokantis langas su galerija*/

function startGallery(){				document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	drawGallery();
	
	let currentImageId = 0;
	document.querySelector("#right").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		currentImageId = imageInModal.getAttribute("id");
		
		currentImageId++;
		let newImage = document.getElementById(currentImageId);
		document.querySelector(".modal .center img").setAttribute("src", newImage.getAttribute("src"));
		document.querySelector(".modal .center img").setAttribute("id", newImage.getAttribute("id"));
		
		});
						
}

function drawGallery(){
	let allImages = getGallery();
	for(let i = 0; i < allImages.length; i++){
		createImage(allImages[i].imageLink, allImages[i].id, allImages[i].title);
	}
	
}


/*Automatinis div ir img sukurimas*/

function createImage(imageLink, id, title){
	let divMain = document.createElement("div");
		divMain.setAttribute("class", "coll4");
		
		let divImage = document.createElement("div");
		divImage.setAttribute("class", "image");
		divMain.appendChild(divImage);
		
		let image = document.createElement("img");
		image.setAttribute("src", imageLink);
		image.setAttribute("id", id);
		image.setAttribute("title", title);
		divImage.appendChild(image);
		
		image.addEventListener("click", function(){
			let image = document.createElement("img");
			image.setAttribute("src", this.getAttribute("src"));
			image.setAttribute("id", this.getAttribute("id"));
			document.querySelector(".modal .center").appendChild(image);
			document.querySelector(".modal").style.display = "flex";				   
   		});
	
	//iterpiam paveikslelio nuoroda
//	
//		let image = document.createElement("img");
//		image.setAttribute("src", "https://picsum.photos/300");
//		image.setAttribute("id", 1);
//		divImage.appendChild(image);
	
		
		let gallery = document.querySelector(".gallery .row");
		gallery.appendChild(divMain);	
}		