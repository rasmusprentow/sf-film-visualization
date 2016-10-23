

/**
 * The IFilmLocationRepository is used to fetch the information 
 * The idea is to create an abstraction between the data, as it can have several origins
 *  */
export interface IGroupRepository {

    getGroups(primary: ISelector, secondary: ISelector): Promise<Array<IGroup>>;
    getSelectors(): Promise<Array<ISelector>>;
}