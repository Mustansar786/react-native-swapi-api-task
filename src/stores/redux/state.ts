
declare global {
  interface RootState {
    rootData: any;
    filmsData: any;
    starshipsData: any;
    rootDataLoading: boolean;
    filmsDataLoading: boolean,
    starshipsDataLoading: boolean,
  }

  interface AlertState {
    customAlertData?: any;
  }
}
export { RootState, AlertState };
