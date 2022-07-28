import {RelationsDataToOptions} from "../SelectCompanyRelationTypes";

const relationsDataToOptions: RelationsDataToOptions = (data) => {
    if (data && data?.applicantIndividualCompanyRelations) {
        return data.applicantIndividualCompanyRelations.data.map(item => ({
            id: item.id,
            label: item.name,
        }));
    }

    return [];
}

export default relationsDataToOptions;