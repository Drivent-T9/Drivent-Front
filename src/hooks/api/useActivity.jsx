import * as activityApi from '../../services/activityApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useActivity() {
    const token = useToken();

    const {
        data: activities,
        loading: activitiesLoading,
        error: activitiesError,
        act: getActivity,
    } = useAsync(() => activityApi.getActivities(token));

    return {
        activities,
        activitiesLoading,
        activitiesError,
        getActivity,
    };
}