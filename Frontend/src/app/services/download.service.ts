import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  download(url: string, filename: string) {
    return this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      saveAs(blob, filename);
    });
  }
}
