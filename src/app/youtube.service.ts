import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'sgTJpyR5NrU', song: 'TÀU ĐÊM NĂM CŨ - Búp Bê Bolero Ý Linh Khiến Mọi Con Tim Phải Thổn Thức Khi Cô Hát Ca Khúc Này'},
    {id: 'EzI5QbdL5PE', song: 'Trăng Tàn Trên Hè Phố - Ý Linh (Thần Tượng Bolero 2017) [MV Official]'},
    {id: '8pb1cHeW6Cg', song: 'Chiều Sân Ga - Phương Anh (Official MV)'},
    {id: 'tCzvYMW-jO8', song: '1977 Vlog - Chị Dậu Parody - Kỷ Nguyên Hắc Ám'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];

  constructor() {
  }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
