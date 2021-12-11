<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Rich Text Editor</title>
	
	<!-- Include stylesheet and Quill library-->
	<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
	<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
	
</head>
<body>
	<h1>Racontez votre histoire :</h1>
	<p>Saisissez ci-dessous votre récit de sauvetage. Cliquez sur le bouton [Terminer] lorsque vous avez fini</p>
	<!-- Create the editor container -->
	<div id="editor">
	  <p>Bonjour et bienvenue</p>
	  <p><strong>Quill</strong> est un éditeur de texte <strong>enrichi</strong> qui permet de copier/coller une image du presse-papier au format Mime64</p>
	  <p><br></p>
	</div>
	<div><input type="text" value="Terminer" id="btnTerminer"></div>


	<!-- Initialize Quill editor -->
	<script>
	  var quill = new Quill('#editor', {
		theme: 'snow'
	  });
	</script>
	
	<!-- Code to get back content from Quill -->
	<script>
		let btnTerminer = document.getElementById("btnTerminer")
		btnTerminer.addEventListener("click", () => {
			console.log(quill.getText())
			console.log(quill.root.innerHTML)
		})
	</script>
</body>
</html>
