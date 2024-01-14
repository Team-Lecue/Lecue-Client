export interface postedStickerType {
  postedStickerId: number;
  stickerImage: string;
  positionX: number;
  positionY: number;
}

export interface NoteType {
  noteId: number;
  renderType: number;
  content: string;
  noteDate: string;
  noteNickname: string;
  noteTextColor: number;
  noteBackgroundColor: number;
  noteBackgroundImage: string;
}
