import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomAlert } from '../../stores/alert/AlertActions';

export const useAppOpening = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the action when the component mounts (app opens)
        dispatch(
            setCustomAlert({
                title: '',
                message: "",
                // title: 'Notice',
                // message: "App is under revision don't purchase any product",
                buttons: [
                    {
                        text: 'Ok',
                        onPress: () => { },
                        style: 'cancel',
                    },
                ],
                options: {},
                visibility: true,
            }) as any
        );
    }, []);


    return null;
};