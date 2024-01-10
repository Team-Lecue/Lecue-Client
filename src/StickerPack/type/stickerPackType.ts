export interface stickerPackType {
  stickerCategory: string;
  stickerList: [
    {
      stickerId: number;
      stickerImage: string;
    },
  ];
}
