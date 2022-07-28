import {PositionsDataToOptions} from "../SelectCompanyPositionTypes";

const positionsDataToOptions: PositionsDataToOptions = (data) => {
    if (data && data?.applicantIndividualCompanyPositions) {
        return data.applicantIndividualCompanyPositions.data.map(item => ({
            id: item.id,
            label: item.name,
        }));
    }

    return [];
}

export default positionsDataToOptions;