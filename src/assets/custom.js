function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.WordprocessingML, function (e) {
        bDocument = e.data;
        
        var element = document.createElement('a');
        element.setAttribute('href', 'data:application/octet-stream;base64,' + e.data);
        element.setAttribute('download', "document.docx");
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        // simulate click
        element.click();
    
        // remove the link
        document.body.removeChild(element);
    });
}

function readDocument(input) {
    input = input.srcElement;

    if (input.files && input.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
      
         var streamType = TXTextControl.streamType.PlainText;
         // set the StreamType based on the lower case extension
         switch (fileinput.value.split('.').pop().toLowerCase()) {
          case 'doc':
           streamType = TXTextControl.streamType.MSWord;
           break;
          case 'docx':
           streamType = TXTextControl.streamType.WordprocessingML;
           break;
          case 'rtf':
           streamType = TXTextControl.streamType.RichTextFormat;
           break;
          case 'htm':
           streamType = TXTextControl.streamType.HTMLFormat;
           break;
          case 'tx':
           streamType = TXTextControl.streamType.InternalUnicodeFormat;
           break;
          case 'pdf':
           streamType = TXTextControl.streamType.AdobePDF;
           break;
         }
      
         // load the document beginning at the Base64 data (split at comma)
         TXTextControl.loadDocument(streamType, e.target.result.split(',')[1]);
        };
        fileReader.readAsDataURL(input.files[0]);
    }    
}

function readDocumentFromHttp(blob) {
    if (blob) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {        
         var streamType = TXTextControl.streamType.WordprocessingML;         
         // load the document beginning at the Base64 data (split at comma)
         TXTextControl.loadDocument(streamType, e.target.result.split(',')[1]);
        };      
        // read the file and convert it to Base64          
        fileReader.readAsDataURL(blob);
    }    
}