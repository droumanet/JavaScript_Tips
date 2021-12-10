<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.10.2/tinymce.min.js"></script>
		<script>
		// Paramètre pour les options du module TinyMCE (format JSON)
		tinymce.init({
		  selector: 'textarea#basic-example',
		  height: 500,
		  menubar: false,
		  plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table paste code help wordcount'
		  ],
		  toolbar: 'undo redo | formatselect | ' +
		  'bold italic backcolor | alignleft aligncenter ' +
		  'alignright alignjustify | bullist numlist outdent indent | ' +
		  'removeformat | help',
		  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
		});

		</script>
	</head>
	<body>
		<p>Éditeur TinyMCE</p>
		<textarea id="basic-example">Voici un exemple de texte avec <strong>TinyMCE</strong></textarea>
		<input type="button" value="Voir" id="btnVoir">
		<script>
			// Action de lecture du contenu du champ textarea sur clic du bouton :
			let btnVoir = document.querySelector("#btnVoir")
			btnVoir.addEventListener("click", () => {
				// Get the HTML contents of the currently active editor
				console.log(tinyMCE.activeEditor.getContent())

				// Get the raw contents of the currently active editor
				console.log(tinyMCE.activeEditor.getContent({format : 'raw'}))

				// Get content of a specific editor:
				console.log(tinyMCE.get('basic-example').getContent())
			})
		</script>
	</body>
</html>
