export interface MapPoint {
  id: string;
  authorName: string;
  changeDescription: string | null;
  oldPhotoYear: string;
  oldPhotoUrl: string;
  newPhotoUrl: string;
  latitude: number;
  longitude: number;
  approved: boolean;
  createdAt: string;
}
