import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare const readDocument: any;
declare const saveDocument: any;
declare const readDocumentFromHttp: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {};
  title = 'my-editor-app';
  editorHeight:string = (window.innerHeight - 50)+"px";
  editorWidth:string = (window.innerWidth - 30)+"px"; 
  headers = new HttpHeaders().set('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  constructor(private http: HttpClient){}

  openFileUsingHttp() {
    this.http.get(`https://rajeev310.github.io/docEditor/assets/docs/doc1.docx`,{
      responseType: 'arraybuffer', headers: this.headers} 
     ).subscribe(
       (response) => {
         
         this.uploadFile(response, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        });
  }

  


uploadFile(data: any, type: string) {
  var byteArray = new Uint8Array(data);
  var file = new File([data], "doc1.docx", {type: type});
  readDocumentFromHttp(file);
}

  onChangeLoad(event: any) {
    readDocument(event);
  }

  onClickSave() {
    saveDocument();
  }  
}
