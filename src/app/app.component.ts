import { Component } from '@angular/core';
declare const readDocument: any;
declare const saveDocument: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-editor-app';
  editorHeight:string = (window.innerHeight - 50)+"px";
  editorWidth:string = (window.innerWidth - 30)+"px";  

  onChangeLoad(event: any) {
    readDocument(event);
  }

  onClickSave() {
    saveDocument();
  }  
}
